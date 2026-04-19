import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import appscrip_icon from "/appscrip_icon.png";
import motorola_icon from "/msi_icon.jpg";

const experiences = [
  {
    title: "Software Engineer",
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
    <section id="experience" className="relative bg-[#0a0f0d] py-32 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-[#4ade80] text-xs tracking-[0.25em] uppercase font-mono mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Where I've worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-8 w-px bg-gradient-to-b from-[#4ade80]/60 via-[#4ade80]/20 to-transparent hidden md:block" />

          <div className="space-y-16 md:pl-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-14 top-6 hidden md:flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#4ade80] ring-[5px] ring-[#4ade80]/15" />
                </div>

                {/* Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-[#4ade80]/25 hover:bg-white/[0.04] transition-all duration-500 p-8">

                  {/* Top glow on hover */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex flex-col md:flex-row md:items-start gap-8">

                    {/* Left */}
                    <div className="md:w-52 flex-shrink-0">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center p-2">
                          <img src={exp.imgSrc} alt={exp.company} className="w-full h-full object-contain" />
                        </div>
                        {exp.current && (
                          <span className="flex items-center gap-1.5 text-xs font-mono text-[#4ade80]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-[#4ade80] transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{exp.company}</p>

                      <div className="flex items-center gap-2 mt-4 text-gray-600 text-xs font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-gray-600 text-xs font-mono">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Right: highlights */}
                    <div className="flex-1 space-y-4">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex gap-3 group/item">
                          <div className="mt-2 w-1 h-1 rounded-full bg-[#4ade80]/50 flex-shrink-0 group-hover/item:bg-[#4ade80] transition-colors" />
                          <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-gray-300 transition-colors">
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
