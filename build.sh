#!/usr/bin/env bash
set -e

HERO="src/components/AnimatedHero.jsx"

# Extract current resume link
CURRENT_LINK=$(node -e "
  const fs = require('fs');
  const content = fs.readFileSync('$HERO', 'utf8');
  const match = content.match(/window\.open\(\s*\"([^\"]+)\"/);
  if (match) process.stdout.write(match[1]);
")

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  nryn.in — Build & Deploy"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Current resume link:"
echo "  $CURRENT_LINK"
echo ""
read -rp "New resume link? (press Enter to keep existing): " NEW_LINK

if [[ -n "$NEW_LINK" ]]; then
  # Replace the URL inside the window.open call
  sed -i '' "s|window\.open(\n\{0,5\}[[:space:]]*\"[^\"]*\"|window.open(\n      \"$NEW_LINK\"|" "$HERO" 2>/dev/null || \
  node -e "
    const fs = require('fs');
    const file = '$HERO';
    const content = fs.readFileSync(file, 'utf8');
    const updated = content.replace(
      /(window\.open\(\s*\")[^\"]+(\",)/,
      '\$1$NEW_LINK\$2'
    );
    fs.writeFileSync(file, updated);
    console.log('  ✔ Resume link updated');
  "
  echo "  ✔ Resume link updated to:"
  echo "    $NEW_LINK"
else
  echo "  → Keeping existing link"
fi

echo ""
echo "Building..."
npm run build

echo ""
echo "Deploying to Firebase..."
firebase deploy --only hosting

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✔ Live at https://nryn-portfolio.web.app"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
