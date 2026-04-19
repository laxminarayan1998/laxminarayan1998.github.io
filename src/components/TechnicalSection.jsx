import React, { useState } from "react";
import { Code, Database, Cloud, GitBranch, Wrench, Bot } from "lucide-react";

const TechnicalSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const categories = {
    languages: {
      icon: Code,
      title: "Programming Languages",
      skills: [
        {
          name: "Dart",
          level: 95,
          description: "Primary language for Flutter development",
        },
        {
          name: "Core Java",
          level: 85,
          description: "Native Android development",
        },
        {
          name: "JavaScript",
          level: 75,
          description: "Web and Node.js development",
        },
      ],
    },
    frameworks: {
      icon: Wrench,
      title: "Frameworks & Tools",
      skills: [
        {
          name: "Flutter",
          level: 95,
          description: "Cross-platform app development",
        },
        { name: "React.js", level: 70, description: "Web development (Basic)" },
        { name: "Node.js", level: 75, description: "Backend development" },
      ],
    },
    databases: {
      icon: Database,
      title: "Databases & State Management",
      skills: [
        {
          name: "Firebase",
          level: 90,
          description: "Real-time database & authentication",
        },
        { name: "MongoDB", level: 80, description: "NoSQL database" },
        {
          name: "BLoC/Provider",
          level: 85,
          description: "Flutter state management",
        },
      ],
    },
    cloud: {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        {
          name: "AWS",
          level: 75,
          description: "Cloud infrastructure & services",
        },
        { name: "Azure", level: 70, description: "Microsoft cloud platform" },
        {
          name: "CI/CD",
          level: 80,
          description: "Automated deployment pipelines",
        },
      ],
    },
    version: {
      icon: GitBranch,
      title: "Version Control & Others",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          description: "Version control & collaboration",
        },
        {
          name: "Method Channels",
          level: 85,
          description: "Native platform integration",
        },
        {
          name: "UI/UX Design",
          level: 75,
          description: "Adobe XD, Sketch, Photoshop",
        },
      ],
    },
    ai: {
      icon: Bot,
      title: "AI & Prompt Engineering",
      skills: [
        {
          name: "Prompt Engineering",
          level: 90,
          description: "Crafting precise prompts to get real, usable output from LLMs",
        },
        {
          name: "AI-assisted Dev",
          level: 88,
          description: "Using AI to write, debug, and ship code faster",
        },
        {
          name: "Tool Building with AI",
          level: 85,
          description: "Building internal tools and automations powered by AI",
        },
      ],
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen relative overflow-hidden bg-[#0a0f0d] px-4 sm:px-6"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4ade80]/10 via-transparent to-transparent animate-pulse-slow" />
      </div>

      {/* Enhanced dot pattern with subtle animation */}
      <div
        className="absolute inset-0 opacity-10 animate-float"
        style={{
          backgroundImage: "radial-gradient(#4ade80 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          animation: "float 20s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-[#4ade80] to-[#4ade80]/70">
              Technical Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          {/* Enhanced Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-2">
            {Object.entries(categories).map(([key, category]) => {
              const Icon = category.icon;
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`
                    flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#4ade80] text-[#0a0f0d] shadow-lg shadow-[#4ade80]/25 scale-105"
                        : "bg-[#4ade80]/10 text-gray-400 hover:bg-[#4ade80]/20 hover:text-white hover:scale-102"
                    }
                    border border-[#4ade80]/20 hover:border-[#4ade80]/50
                    backdrop-blur-sm
                  `}
                >
                  <Icon
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "animate-bounce-subtle" : ""}`}
                  />
                  <span className="font-medium hidden sm:inline">{category.title}</span>
                  <span className="font-medium sm:hidden">{category.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#4ade80]/10"
              >
                <div className="p-4 sm:p-6 relative z-10">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#4ade80] transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1.5 sm:mt-2 group-hover:text-gray-300 transition-colors">
                      {skill.description}
                    </p>
                  </div>

                  <div className="relative">
                    <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                      <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300">
                        Proficiency
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#4ade80] group-hover:scale-110 transition-transform">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 sm:h-2.5 bg-[#4ade80]/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#4ade80] to-[#4ade80]/80 transform origin-left transition-all duration-1000 ease-out group-hover:scale-x-105"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Enhanced decorative corner accents */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#4ade80]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#4ade80]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;