import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import appscrip_icon from "/appscrip_icon.png";
import motorola_icon from "/msi_icon.jpg";

const experiences = [
  {
    title: "Software Engineer I",
    company: "Motorola Solutions",
    imgSrc: motorola_icon,
    location: "Bangalore, India",
    period: "May 2023 – Present",
    current: true,
    highlights: [
      "Migrating the app's frontend from ExtJS to Flutter with BLoC state management.",
      "Built custom internal libraries — reduced third-party reliance, gave the team full control.",
      "Implemented video calling with native view embedding via Method Channels.",
      "Introduced AI-assisted workflows and tooling to help the team ship faster.",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Appscrip",
    imgSrc: appscrip_icon,
    location: "Bangalore, India",
    period: "July 2021 – May 2023",
    current: false,
    highlights: [
      "Built apps across social media, travel, and education industries.",
      "Delivered a full social platform (OnlyFans Clone) with live streaming and payment gateway.",
      "Built the Cordelia Cruises app in just 5 days — 75+ screens, 50+ APIs.",
      "Integrated real-time video calls and chat on Instrucko and Vief.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="relative py-32 px-6 md:px-16 transition-colors duration-300 bg-white dark:bg-[#0a0f0d]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-xs tracking-[0.25em] uppercase font-mono font-bold mb-4 text-green-600 dark:text-[#4ade80]">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Where I've worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-8 w-px hidden md:block bg-gradient-to-b from-green-500/70 dark:from-[#4ade80]/60 via-green-300/30 dark:via-[#4ade80]/20 to-transparent" />

          <div className="space-y-10 md:pl-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                className="relative"
              >
                {/* Timeline dot — bigger + glowing for current */}
                <div className="absolute -left-14 top-8 hidden md:flex items-center justify-center">
                  {exp.current ? (
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-green-500 dark:bg-[#4ade80] ring-[6px] ring-green-500/20 dark:ring-[#4ade80]/20" />
                      <div className="absolute inset-0 rounded-full bg-green-400 dark:bg-[#4ade80] animate-ping opacity-30" />
                    </div>
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/30 ring-4 ring-gray-200/50 dark:ring-white/10" />
                  )}
                </div>

                {/* Card */}
                <div className={`group relative overflow-hidden rounded-2xl border p-8 transition-all duration-500
                  ${exp.current
                    ? `border-green-300 bg-gradient-to-br from-green-50 via-white to-white
                       shadow-lg shadow-green-500/10 hover:shadow-xl hover:shadow-green-500/15 hover:border-green-400
                       dark:from-[#0a0f0d] dark:via-[#0f1a12] dark:to-[#0a0f0d]
                       dark:border-[#4ade80]/35 dark:shadow-[#4ade80]/5 dark:hover:border-[#4ade80]/60 dark:hover:shadow-[#4ade80]/10`
                    : `border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white hover:shadow-md hover:shadow-gray-200/80
                       dark:border-white/[0.14] dark:bg-white/[0.02] dark:hover:border-white/[0.22] dark:hover:bg-white/[0.04] dark:hover:shadow-none`
                  }`}
                >
                  {/* Top accent line — always visible for current */}
                  <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent to-transparent transition-opacity duration-500
                    ${exp.current
                      ? 'via-green-400/80 dark:via-[#4ade80]/70 opacity-100'
                      : 'via-green-300/40 dark:via-[#4ade80]/25 opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* Subtle green corner glow for current */}
                  {exp.current && (
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none
                      bg-green-200/30 dark:bg-[#4ade80]/[0.05] blur-3xl" />
                  )}

                  <div className="flex flex-col md:flex-row md:items-start gap-8">

                    {/* Left: company identity */}
                    <div className="md:w-56 flex-shrink-0">

                      {/* Logo + current badge */}
                      <div className="flex items-start gap-3 mb-5">
                        <div className={`rounded-2xl overflow-hidden flex items-center justify-center p-2.5 border flex-shrink-0 transition-all
                          ${exp.current
                            ? 'w-16 h-16 bg-white border-green-200 shadow-md shadow-green-200/60 dark:bg-white/10 dark:border-[#4ade80]/30 dark:shadow-[#4ade80]/10'
                            : 'w-12 h-12 bg-white border-gray-200 shadow-sm dark:bg-white/5 dark:border-white/10'
                          }`}
                        >
                          <img
                            src={exp.imgSrc}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {exp.current && (
                          <span className="mt-1 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold
                            bg-green-100 text-green-700 border border-green-200
                            dark:bg-[#4ade80]/15 dark:text-[#4ade80] dark:border-[#4ade80]/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-[#4ade80] animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Role */}
                      <h3 className={`font-bold transition-colors duration-300
                        ${exp.current
                          ? 'text-xl text-gray-900 group-hover:text-green-700 dark:text-white dark:group-hover:text-[#4ade80]'
                          : 'text-lg text-gray-800 group-hover:text-green-600 dark:text-white dark:group-hover:text-[#4ade80]'
                        }`}>
                        {exp.title}
                      </h3>

                      {/* Company name — prominent for current */}
                      <p className={`mt-1 font-semibold
                        ${exp.current
                          ? 'text-base text-green-700 dark:text-[#4ade80]'
                          : 'text-sm text-gray-500 dark:text-gray-400'
                        }`}>
                        {exp.company}
                      </p>

                      <div className="flex items-center gap-2 mt-4 text-xs font-mono text-gray-400 dark:text-gray-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-xs font-mono text-gray-400 dark:text-gray-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className={`hidden md:block w-px self-stretch flex-shrink-0
                      ${exp.current ? 'bg-green-200 dark:bg-[#4ade80]/20' : 'bg-gray-200 dark:bg-white/10'}`} />

                    {/* Right: highlights */}
                    <div className="flex-1 space-y-4 md:pt-1">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex gap-3 group/item">
                          <div className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors
                            ${exp.current
                              ? 'bg-green-400 dark:bg-[#4ade80]/60 group-hover/item:bg-green-600 dark:group-hover/item:bg-[#4ade80]'
                              : 'bg-gray-300 dark:bg-white/20 group-hover/item:bg-green-500 dark:group-hover/item:bg-[#4ade80]'
                            }`} />
                          <p className="text-sm leading-relaxed transition-colors text-gray-600 group-hover/item:text-gray-900 dark:text-gray-300 dark:group-hover/item:text-gray-100">
                            {h}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
