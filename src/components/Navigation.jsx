import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      {/* Desktop nav */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5 px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`hidden md:flex pointer-events-auto items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
            scrolled
              ? "bg-[#0a0f0d]/90 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/50"
              : "bg-[#0a0f0d]/40 backdrop-blur-md border-white/5"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id ? "text-[#0a0f0d]" : "text-gray-400 hover:text-white"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-[#4ade80] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </motion.nav>
      </div>

      {/* Mobile: top-right hamburger */}
      <div className="fixed top-5 right-5 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 rounded-full bg-[#0a0f0d]/80 backdrop-blur border border-white/10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <motion.span
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
            className="block w-5 h-0.5 bg-white origin-center"
          />
          <motion.span
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            className="block w-5 h-0.5 bg-white"
          />
          <motion.span
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
            className="block w-5 h-0.5 bg-white origin-center"
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0, pointerEvents: isMenuOpen ? "auto" : "none" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-[#0a0f0d]/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-6"
      >
        {navItems.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
            transition={{ delay: i * 0.05 }}
            className={`text-3xl font-bold tracking-tight transition-colors ${
              activeSection === item.id ? "text-[#4ade80]" : "text-gray-400 hover:text-white"
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
