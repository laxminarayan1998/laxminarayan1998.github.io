import React from "react";
import { Link } from "react-router-dom";
import TechnicalSection from "./TechnicalSection";
import AnimatedHero from "./AnimatedHero";
import Navigation from "./Navigation";
import ProjectGrid from "./ProjectGrid";
import ContactSection from "./ContactSection";
import WorkExperience from "./WorkExpirience";
import EducationSection from "./EducationSection";

const ModernPortfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f0d] text-gray-900 dark:text-white transition-colors duration-300">
      <Navigation />
      <AnimatedHero />
      <WorkExperience />
      <EducationSection />
      <TechnicalSection />
      <ProjectGrid />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 border-t transition-colors duration-300 border-gray-200 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-sm font-mono text-gray-400 dark:text-gray-600">© 2026 NRYN</p>
          <Link
            to="/privacy-policy"
            className="text-sm transition-colors duration-300 text-gray-400 hover:text-green-600 dark:text-gray-600 dark:hover:text-[#4ade80]"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
