import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";
import { Link } from 'react-router-dom';

import TechnicalSection from "./TechnicalSection";
import AnimatedHero from "./AnimatedHero";
import Navigation from "./Navigation";
import ProjectGrid from "./ProjectGrid";
import ContactSection from "./ContactSection";
import WorkExperience from "./WorkExpirience";
import EducationSection from "./EducationSection";

const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "PTT on Wave (Motorola)",
      description:
        "Core functionality implemented natively in Android and iOS, with frontend migration to Flutter using BLoC state management.",
      tags: ["Flutter", "Android", "iOS", "BLoC", "Method Channels"],
    },
    {
      title: "Instrucko",
      description:
        "Educational platform for UK and India-based students, enabling parents to book on-demand classes with real-time video calls and scheduling.",
      tags: ["Flutter", "Video Calls", "UI/UX", "Booking System"],
    },
    {
      title: "Cordelia Cruises",
      description:
        "Companion app managing cruise bookings and guest details, built in just 5 days with 75+ screens and 50+ API integrations.",
      tags: ["Flutter", "API Integration", "Dynamic Content"],
    },
    {
      title: "Fanzly",
      description:
        "Social media platform clone featuring live video streaming, exclusive content, and integrated payment gateway.",
      tags: ["Flutter", "Live Streaming", "Payment Integration"],
    },
    {
      title: "Guess Who (Web)",
      description:
        "Interactive web game where users guess blurred images of friends, featuring time-based challenges and dynamic questions.",
      tags: ["Flutter Web", "Interactive Gaming", "UI Design"],
    },
  ];

  const skills = [
    { name: "Flutter/Dart", level: 95 },
    { name: "Core Java", level: 85 },
    { name: "Firebase/MongoDB", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "AWS & Azure", level: 70 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-white font-['Space_Grotesk']">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0f0d]/95 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <Navigation />
      </nav>

      {/* Hero Section */}
      <AnimatedHero />

      {/* Work Experience */}
      <WorkExperience />

      {/* Education Section */}
      <EducationSection />

      {/* Technical Section */}
      <TechnicalSection />

      {/* Projects Grid */}
      <ProjectGrid />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-[#4ade80]/10">
        <div className="flex items-center justify-center gap-4">
          <p>© 2026 NRYN.</p>
          <span>•</span>
          <Link
            to="/privacy-policy"
            className="text-gray-500 hover:text-[#4ade80] transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
