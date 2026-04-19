import React from "react";
import { motion } from "framer-motion";

const bentoItems = [
  {
    category: "Flutter & Dart",
    col: "col-span-12 md:col-span-5",
    accent: true,
    description: "Primary stack since 2021. Production apps for millions of users.",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 95 },
    ],
    tags: ["BLoC", "Provider", "GetX", "Method Channels", "Flutter Web", "Flutter TV"],
  },
  {
    category: "AI & Prompt Engineering",
    col: "col-span-12 md:col-span-4",
    highlight: true,
    description: "I know how to talk to AI and ship real products with it — not just chat.",
    skills: [
      { name: "Prompt Engineering", level: 90 },
      { name: "AI-assisted Dev", level: 88 },
      { name: "Tool Building w/ AI", level: 85 },
    ],
  },
  {
    category: "Native & Backend",
    col: "col-span-12 md:col-span-3",
    description: "Android (Java), iOS (Obj-C), Node.js APIs.",
    skills: [
      { name: "Core Java", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    category: "Database & State",
    col: "col-span-12 md:col-span-4",
    description: "Real-time data, offline sync, and state management at scale.",
    skills: [
      { name: "Firebase", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "BLoC / Provider", level: 88 },
    ],
  },
  {
    category: "Cloud & DevOps",
    col: "col-span-12 md:col-span-4",
    description: "Cloud infra, deployment pipelines, automated builds.",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Azure", level: 70 },
      { name: "CI/CD", level: 80 },
    ],
  },
  {
    category: "Tooling & Design",
    col: "col-span-12 md:col-span-4",
    description: "Git workflows, UI/UX design tools, platform integration.",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Method Channels", level: 85 },
      { name: "UI/UX Design", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-xs text-gray-400 font-medium">{name}</span>
      <span className="text-xs font-mono text-[#4ade80]">{level}%</span>
    </div>
    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-[#4ade80] to-[#4ade80]/60 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  </div>
);

const TechnicalSection = () => {
  return (
    <section id="skills" className="relative bg-[#0a0f0d] py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#4ade80] text-xs tracking-[0.25em] uppercase font-mono mb-4">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            What I work with
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {bentoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`${item.col} group relative overflow-hidden rounded-2xl p-6 border transition-all duration-500
                ${item.highlight
                  ? "bg-[#4ade80]/[0.07] border-[#4ade80]/25 hover:border-[#4ade80]/50"
                  : item.accent
                  ? "bg-white/[0.03] border-white/10 hover:border-[#4ade80]/30"
                  : "bg-white/[0.02] border-white/[0.07] hover:border-[#4ade80]/25"
                }`}
            >
              {/* Top glow */}
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500
                ${item.highlight ? "via-[#4ade80]/60" : "via-[#4ade80]/30"}`} />

              {/* Category label */}
              <div className="flex items-center justify-between mb-3">
                <p className={`text-xs font-mono tracking-widest uppercase ${item.highlight ? "text-[#4ade80]" : "text-gray-500"}`}>
                  {item.category}
                </p>
                {item.highlight && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#4ade80]/20 text-[#4ade80] font-mono border border-[#4ade80]/25">
                    ✦ Featured
                  </span>
                )}
              </div>

              {/* Description */}
              {item.description && (
                <p className="text-gray-500 text-xs leading-relaxed mb-5">
                  {item.description}
                </p>
              )}

              {/* Skill bars */}
              <div>
                {item.skills.map((skill, si) => (
                  <SkillBar key={si} name={skill.name} level={skill.level} />
                ))}
              </div>

              {/* Tags (for flutter card) */}
              {item.tags && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="px-2.5 py-0.5 text-[11px] rounded-full bg-white/5 text-gray-400 border border-white/[0.07] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
