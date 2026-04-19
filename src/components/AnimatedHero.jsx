import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const chips = [
  "Flutter", "Dart", "Firebase", "BLoC", "Node.js",
  "AWS", "Prompt Engineering", "AI Tools", "Method Channels", "Android · iOS",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const AnimatedHero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/12k751qMq8yj_1d2f-fbf-HPWLxp7hUD9/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[#0a0f0d] flex items-center">

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(74,222,128,0.10) 0%, rgba(74,222,128,0.03) 50%, transparent 72%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#4ade80]/[0.06] to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#4ade80]/[0.04] to-transparent" />

      {/* Content */}
      <div className="relative w-full px-6 md:px-16 lg:px-24 pt-28 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="mb-10">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#4ade80]/10 text-[#4ade80] text-sm border border-[#4ade80]/25 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(48px,9vw,108px)] font-bold tracking-tight leading-[0.95] mb-6"
          >
            <span className="text-white">I build apps</span>
            <br />
            <span className="text-[#4ade80]">that work.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-gray-500 font-mono mb-4 tracking-wide"
          >
            Flutter dev &nbsp;·&nbsp; AI tinkerer &nbsp;·&nbsp; Tool builder
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-gray-400 max-w-xl mb-12 leading-relaxed"
          >
            4+ years shipping mobile apps. I explore tools obsessively, build things that make teams faster, and know how to get real results out of AI — not just prompts, but products.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-[#4ade80] text-[#0a0f0d] font-bold text-sm rounded-full hover:bg-white transition-all duration-300"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={downloadResume}
              className="flex items-center gap-2.5 px-7 py-3.5 border border-white/15 text-white font-semibold text-sm rounded-full hover:border-[#4ade80]/50 hover:bg-[#4ade80]/5 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Resume
            </button>
          </motion.div>

          {/* Skill chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {chips.map((chip, i) => (
              <span
                key={i}
                className="px-3.5 py-1 text-xs text-gray-500 border border-white/[0.08] rounded-full hover:border-[#4ade80]/40 hover:text-[#4ade80] transition-all duration-300 cursor-default font-mono"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-px h-14 bg-gradient-to-b from-[#4ade80]/60 to-transparent"
          animate={{ opacity: [1, 0.3, 1], scaleY: [1, 0.6, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
        <span className="text-gray-600 text-[10px] tracking-[0.2em] uppercase font-mono">scroll</span>
      </motion.div>
    </section>
  );
};

export default AnimatedHero;
