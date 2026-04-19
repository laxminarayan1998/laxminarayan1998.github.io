import React from "react";
import { ArrowRight } from "lucide-react";

const AnimatedHero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/12k751qMq8yj_1d2f-fbf-HPWLxp7hUD9/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-[#0a0f0d]"
    >
      {/* Simple gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4ade80]/5 via-transparent to-transparent" />
      </div>

      {/* Simple dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#4ade80 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Simple badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#4ade80]/10 text-[#4ade80] text-sm mb-8 border border-[#4ade80]/20">
            Flutter Developer · AI Tinkerer · Tool Builder
          </span>

          {/* Name and title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Hi, I'm
            <span className="block text-[#4ade80] mt-2">Laxminarayan Das</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Flutter developer with 5+ years of experience. I love exploring new tools,
            building internal tools that make teams move faster, and using AI to ship better products —
            I know how to talk to AI and get real results out of it.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={scrollToProjects}
              className="group px-6 py-3 bg-[#4ade80] text-[#0a0f0d] rounded hover:bg-[#4ade80]/90 transition-all flex items-center justify-center"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={downloadResume}
              className="px-6 py-3 border border-[#4ade80]/20 rounded text-white hover:bg-[#4ade80]/10 transition-all"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
