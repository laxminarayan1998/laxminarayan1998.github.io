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
    <div className="min-h-screen bg-[#0a0f0d] text-white">
      <Navigation />
      <AnimatedHero />
      <WorkExperience />
      <EducationSection />
      <TechnicalSection />
      <ProjectGrid />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-gray-600 text-sm font-mono">© 2026 NRYN</p>
          <Link
            to="/privacy-policy"
            className="text-gray-600 hover:text-[#4ade80] text-sm transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
