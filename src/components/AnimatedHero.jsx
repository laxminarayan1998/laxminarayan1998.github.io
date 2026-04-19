import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profilePic from "/nryn_profile_pic.webp";

const chips = [
  "Flutter", "Dart", "Firebase", "BLoC", "Node.js",
  "AWS", "Prompt Engineering", "AI Tools", "Method Channels", "Android · iOS",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
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
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center transition-colors duration-300
        bg-gradient-to-br from-green-50 via-white to-gray-50
        dark:bg-[#0a0f0d] dark:from-[#0a0f0d] dark:via-[#0a0f0d] dark:to-[#0a0f0d]"
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          color: "#4ade80",
        }}
      />

      {/* Ambient glow — sits behind photo on right */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(74,222,128,0.10) 0%, rgba(74,222,128,0.03) 50%, transparent 72%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content — two-column layout */}
      <div className="relative w-full px-6 md:px-16 lg:px-24 pt-28 pb-24">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row md:items-center gap-12 md:gap-16">

          {/* LEFT: text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 min-w-0"
          >
            {/* Status badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-sm font-medium border
                bg-green-50 text-green-700 border-green-200
                dark:bg-[#4ade80]/10 dark:text-[#4ade80] dark:border-[#4ade80]/25">
                <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-[#4ade80] animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(40px,7vw,88px)] font-bold tracking-tight leading-[0.95] mb-5 text-gray-900 dark:text-white"
            >
              I build apps
              <br />
              <span className="text-green-600 dark:text-[#4ade80]">that work.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="text-sm md:text-base font-mono mb-3 tracking-wide text-gray-500 dark:text-gray-400"
            >
              Flutter dev &nbsp;·&nbsp; AI tinkerer &nbsp;·&nbsp; Tool builder
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg max-w-lg mb-10 leading-relaxed text-gray-600 dark:text-gray-300"
            >
              5+ years shipping mobile apps. I explore tools obsessively, build things that make teams faster, and know how to get real results out of AI.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2.5 px-6 py-3 font-bold text-sm rounded-full transition-all duration-300
                  bg-gray-900 text-white hover:bg-gray-700
                  dark:bg-[#4ade80] dark:text-[#0a0f0d] dark:hover:bg-white"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={downloadResume}
                className="flex items-center gap-2.5 px-6 py-3 font-semibold text-sm rounded-full transition-all duration-300
                  border border-black/15 text-gray-700 hover:border-black/30 hover:bg-black/5
                  dark:border-white/15 dark:text-white dark:hover:border-[#4ade80]/50 dark:hover:bg-[#4ade80]/5"
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
                  className="px-3 py-1.5 text-xs rounded-full font-mono font-medium transition-all duration-300 cursor-default
                    bg-white border border-gray-300 text-gray-700 shadow-sm hover:bg-green-50 hover:border-green-400 hover:text-green-700
                    dark:bg-white/[0.08] dark:border-white/[0.22] dark:text-gray-200 dark:hover:bg-[#4ade80]/15 dark:hover:border-[#4ade80]/70 dark:hover:text-[#4ade80]"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-shrink-0 flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full opacity-40
                bg-gradient-to-br from-green-400 via-green-300 to-transparent
                dark:from-[#4ade80] dark:via-[#4ade80]/50 dark:to-transparent
                blur-xl" />

              {/* Green rotating border */}
              <motion.div
                className="absolute -inset-1 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #4ade80 0%, transparent 40%, #4ade80 70%, transparent 100%)",
                  opacity: 0.35,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Photo container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4
                border-white shadow-2xl shadow-green-500/20
                dark:border-[#0a0f0d] dark:shadow-[#4ade80]/10">
                <img
                  src={profilePic}
                  alt="Narayan Das"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t
                  from-green-100/40 to-transparent
                  dark:from-[#0a0f0d]/40 dark:to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold border shadow-lg
                  bg-white text-green-700 border-green-200 shadow-green-500/10
                  dark:bg-[#0f1a12] dark:text-[#4ade80] dark:border-[#4ade80]/30 dark:shadow-[#4ade80]/10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 300 }}
              >
                5+ yrs exp
              </motion.div>
            </div>


          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-green-400/60 dark:from-[#4ade80]/60 to-transparent"
          animate={{ opacity: [1, 0.3, 1], scaleY: [1, 0.6, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
        <span className="text-gray-400 dark:text-gray-600 text-[10px] tracking-[0.2em] uppercase font-mono">scroll</span>
      </motion.div>
    </section>
  );
};

export default AnimatedHero;
