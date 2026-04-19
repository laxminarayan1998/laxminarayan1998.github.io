import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import playstore_icon from "/playstore-svgrepo-com.svg";
import appstore_icon from "/icons8-app-store.svg";

const projects = [
  {
    title: "PTT on Wave",
    company: "Motorola Solutions",
    description:
      "Enterprise push-to-talk communication app. Migrated a complex native Android/iOS codebase to Flutter — maintaining feature parity across video calling, native view embedding, and real-time comms.",
    tags: ["Flutter", "Android", "iOS", "BLoC", "Method Channels", "Video Calling"],
    featured: true,
    year: "2023–Present",
  },
  {
    title: "Instrucko",
    description:
      "On-demand tutoring platform for UK and India. Parents book live classes for their kids, with real-time video calls, scheduling, and a clean booking flow.",
    tags: ["Flutter", "Video Calls", "Booking System", "UI/UX"],
    playStore: "https://play.google.com/store/apps/details?id=com.instrucko",
    appStore: "https://apps.apple.com/in/app/instrucko/id1632440837/",
    year: "2022–Present",
  },
  {
    title: "Cordelia Cruises",
    description:
      "Guest companion app for India's first cruise line. Built end-to-end in 5 days — 75+ screens, 50+ APIs, boarding pass generation, and dynamic content.",
    tags: ["Flutter", "API Integration", "Dynamic Content", "Boarding Pass"],
    playStore: "https://play.google.com/store/apps/details?id=com.cordeliacruises.userapp",
    appStore: "https://apps.apple.com/in/app/cordelia-cruises/id1589910857",
    year: "Dec 2022",
  },
  {
    title: "Fanzly",
    description:
      "Social platform with live video streaming, exclusive content, and an integrated payment gateway. Custom UI built to replicate the original platform experience.",
    tags: ["Flutter", "Live Streaming", "Payment Gateway", "Real-time Chat"],
    year: "2022–Present",
  },
  {
    title: "Guess Who",
    description:
      "Web game where users guess blurred photos of their friends. Time-based challenges with dynamic question generation based on friend networks.",
    tags: ["Flutter Web", "Game Logic", "Interactive UI"],
    webLink: "https://oecgame-4c5b7.web.app/",
    year: "2020",
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-[#4ade80]/30 hover:bg-white/[0.04] transition-all duration-500 p-8 flex flex-col"
  >
    {/* Top glow */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Header */}
    <div className="flex items-start justify-between mb-3">
      <div>
        {project.company && (
          <p className="text-xs font-mono text-[#4ade80] tracking-wider uppercase mb-2">{project.company}</p>
        )}
        <h3 className="text-xl font-bold text-white group-hover:text-[#4ade80] transition-colors duration-300">
          {project.title}
        </h3>
      </div>
      <span className="text-xs font-mono text-gray-600 shrink-0 ml-4 mt-1">{project.year}</span>
    </div>

    {/* Description */}
    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
      {project.description}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5 mb-6">
      {project.tags.map((tag, i) => (
        <span
          key={i}
          className="px-2.5 py-0.5 text-[11px] rounded-full bg-white/5 text-gray-500 border border-white/[0.07] font-mono"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Links */}
    {(project.playStore || project.appStore || project.webLink) && (
      <div className="flex flex-wrap gap-3 pt-5 border-t border-white/[0.07]">
        {project.playStore && (
          <a
            href={project.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#4ade80]/10 border border-white/10 hover:border-[#4ade80]/30 text-xs text-gray-300 hover:text-white transition-all duration-300"
          >
            <img src={playstore_icon} alt="Play Store" className="w-4 h-4" />
            Play Store
          </a>
        )}
        {project.appStore && (
          <a
            href={project.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#4ade80]/10 border border-white/10 hover:border-[#4ade80]/30 text-xs text-gray-300 hover:text-white transition-all duration-300"
          >
            <img src={appstore_icon} alt="App Store" className="w-4 h-4" />
            App Store
          </a>
        )}
        {project.webLink && (
          <a
            href={project.webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#4ade80]/10 border border-white/10 hover:border-[#4ade80]/30 text-xs text-gray-300 hover:text-white transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            Web App
          </a>
        )}
      </div>
    )}
  </motion.div>
);

const ProjectsGrid = () => {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="relative bg-[#0a0f0d] py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#4ade80] text-xs tracking-[0.25em] uppercase font-mono mb-4">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Things I've built
          </h2>
        </motion.div>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-2xl border border-[#4ade80]/20 bg-[#4ade80]/[0.04] hover:border-[#4ade80]/40 hover:bg-[#4ade80]/[0.07] transition-all duration-500 p-10 mb-5"
        >
          {/* Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/50 to-transparent" />
          <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-[#4ade80]/[0.06] blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs px-3 py-1 rounded-full bg-[#4ade80]/15 text-[#4ade80] border border-[#4ade80]/25 font-mono tracking-wider">
                  ✦ Featured
                </span>
                <span className="text-xs font-mono text-[#4ade80]/60 tracking-wider uppercase">
                  {featured.company}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#4ade80] transition-colors duration-300 mb-4">
                {featured.title}
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl mb-6">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-[#4ade80]/10 text-[#4ade80]/80 border border-[#4ade80]/20 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-xs font-mono text-gray-600">{featured.year}</span>
            </div>
          </div>
        </motion.div>

        {/* Rest in 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
