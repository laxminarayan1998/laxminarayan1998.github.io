import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const buildTime = new Date().toLocaleString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
}) // e.g. "Oct 19, 2026, 2:30 PM"

export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_TIME__: JSON.stringify(buildTime),
  },
})