import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "experience", "education", "skills", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const ThemeToggle = ({ className = "" }) => (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300
        border-black/10 bg-black/5 hover:bg-black/10 text-gray-600
        dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-400
        hover:text-gray-900 dark:hover:text-white
        ${className}`}
    >
      {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
    </button>
  );

  return (
    <>
      {/* Desktop nav */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5 px-4 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden md:flex pointer-events-auto items-center gap-1 pl-2 pr-2 py-1.5 rounded-full border transition-all duration-500
            border-black/10 bg-white/80 backdrop-blur-2xl shadow-sm shadow-black/5
            dark:border-white/10 dark:bg-[#0a0f0d]/80 dark:shadow-black/30
            data-[scrolled=true]:shadow-lg"
          data-scrolled={scrolled}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200
                ${activeSection === item.id
                  ? "text-white dark:text-[#0a0f0d]"
                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gray-900 dark:bg-[#4ade80] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}

          {/* Divider */}
          <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />

          {/* Theme toggle */}
          <ThemeToggle />
        </motion.div>
      </div>

      {/* Mobile: top-right buttons */}
      <div className="fixed top-5 right-5 z-50 md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5
            bg-white/80 dark:bg-[#0a0f0d]/80 backdrop-blur border
            border-black/10 dark:border-white/10"
          aria-label="Menu"
        >
          <motion.span
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
            className="block w-5 h-0.5 bg-gray-800 dark:bg-white origin-center"
          />
          <motion.span
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            className="block w-5 h-0.5 bg-gray-800 dark:bg-white"
          />
          <motion.span
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
            className="block w-5 h-0.5 bg-gray-800 dark:bg-white origin-center"
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0, pointerEvents: isMenuOpen ? "auto" : "none" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-6
          bg-white/95 dark:bg-[#0a0f0d]/98 backdrop-blur-xl"
      >
        {navItems.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
            transition={{ delay: i * 0.05 }}
            className={`text-3xl font-bold tracking-tight transition-colors
              ${activeSection === item.id
                ? "text-green-600 dark:text-[#4ade80]"
                : "text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
          >
            {item.label}
          </motion.button>
        ))}
      </motion.div>
    </>
  );
};

export default Navigation;
