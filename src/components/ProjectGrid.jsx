import React from "react";
import { motion } from "framer-motion";
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
    className="group relative overflow-hidden rounded-2xl border p-8 flex flex-col transition-all duration-500
      bg-white border-gray-200 shadow-sm shadow-gray-200/80 hover:border-green-300 hover:shadow-md hover:shadow-green-500/8 hover:-translate-y-0.5
      dark:bg-white/[0.02] dark:border-white/[0.14] dark:shadow-none dark:hover:border-[#4ade80]/30 dark:hover:bg-white/[0.04] dark:hover:translate-y-0"
  >
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/25 dark:via-[#4ade80]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="flex items-start justify-between mb-3">
      <div>
        {project.company && (
          <p className="text-xs font-mono tracking-wider uppercase mb-2 text-green-600 dark:text-[#4ade80]">{project.company}</p>
        )}
        <h3 className="text-xl font-bold transition-colors duration-300 text-gray-900 group-hover:text-green-600 dark:text-white dark:group-hover:text-[#4ade80]">
          {project.title}
        </h3>
      </div>
      <span className="text-xs font-mono shrink-0 ml-4 mt-1 text-gray-400 dark:text-gray-600">{project.year}</span>
    </div>

    <p className="text-sm leading-relaxed mb-6 flex-1 text-gray-600 dark:text-gray-300">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-1.5 mb-6">
      {project.tags.map((tag, i) => (
        <span key={i} className="px-2.5 py-0.5 text-[11px] rounded-full font-mono
          bg-gray-100 text-gray-700 border border-gray-300
          dark:bg-white/10 dark:text-gray-200 dark:border-white/[0.2]">
          {tag}
        </span>
      ))}
    </div>

    {(project.playStore || project.appStore || project.webLink) && (
      <div className="flex flex-wrap gap-3 pt-5 border-t border-gray-100 dark:border-white/[0.07]">
        {project.playStore && (
          <a href={project.playStore} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all duration-300
              bg-gray-100 hover:bg-green-50 border border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-700
              dark:bg-white/5 dark:hover:bg-[#4ade80]/10 dark:border-white/10 dark:hover:border-[#4ade80]/30 dark:text-gray-300 dark:hover:text-white">
            <img src={playstore_icon} alt="Play Store" className="w-4 h-4" />
            Play Store
          </a>
        )}
        {project.appStore && (
          <a href={project.appStore} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all duration-300
              bg-gray-100 hover:bg-green-50 border border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-700
              dark:bg-white/5 dark:hover:bg-[#4ade80]/10 dark:border-white/10 dark:hover:border-[#4ade80]/30 dark:text-gray-300 dark:hover:text-white">
            <img src={appstore_icon} alt="App Store" className="w-4 h-4" />
            App Store
          </a>
        )}
        {project.webLink && (
          <a href={project.webLink} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all duration-300
              bg-gray-100 hover:bg-green-50 border border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-700
              dark:bg-white/5 dark:hover:bg-[#4ade80]/10 dark:border-white/10 dark:hover:border-[#4ade80]/30 dark:text-gray-300 dark:hover:text-white">
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
    <section id="projects" className="relative py-32 px-6 md:px-16 transition-colors duration-300 bg-gray-50 dark:bg-[#0a0f0d]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase font-mono font-bold mb-4 text-green-600 dark:text-[#4ade80]">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Things I've built
          </h2>
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-2xl border p-10 mb-5 transition-all duration-500
            bg-gradient-to-br from-green-50 to-white border-green-200 shadow-md shadow-green-500/10 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/15
            dark:bg-[#4ade80]/[0.04] dark:from-transparent dark:to-transparent dark:border-[#4ade80]/20 dark:shadow-none dark:hover:border-[#4ade80]/40"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/60 dark:via-[#4ade80]/50 to-transparent" />
          <div className="absolute top-10 right-10 w-48 h-48 rounded-full pointer-events-none blur-3xl bg-green-200/40 dark:bg-[#4ade80]/[0.06]" />

          <div className="relative flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs px-3 py-1 rounded-full font-mono tracking-wider border
                  bg-green-100 text-green-700 border-green-300
                  dark:bg-[#4ade80]/15 dark:text-[#4ade80] dark:border-[#4ade80]/25">
                  ✦ Featured
                </span>
                <span className="text-xs font-mono tracking-wider uppercase text-green-500/70 dark:text-[#4ade80]/60">
                  {featured.company}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300
                text-gray-900 group-hover:text-green-600 dark:text-white dark:group-hover:text-[#4ade80]">
                {featured.title}
              </h3>
              <p className="leading-relaxed max-w-2xl mb-6 text-gray-600 dark:text-gray-300">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full font-mono border
                    bg-green-100 text-green-800 border-green-300
                    dark:bg-[#4ade80]/15 dark:text-[#4ade80] dark:border-[#4ade80]/35">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-xs font-mono flex-shrink-0 text-gray-400 dark:text-gray-600">{featured.year}</span>
          </div>
        </motion.div>

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
