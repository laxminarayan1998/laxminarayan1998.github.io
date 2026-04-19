import React from "react";
import { Calendar, MapPin } from "lucide-react";

import appscrip_icon from "/appscrip_icon.png";
import motorola_icon from "/msi_icon.jpg";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Motorola Solutions",
      imgSrc: motorola_icon,
      location: "Bangalore, India",
      period: "May 2023 – Present",
      highlights: [
        "Migrating the app's frontend from ExtJS to Flutter using BLoC state management, ensuring clean and maintainable architecture.",
        "Built custom internal libraries to reduce third-party dependency and give the team full control over app behaviour.",
        "Implemented video calling with native view embedding — bridging Flutter and native Android/iOS via Method Channels.",
        "Actively explore and introduce better tooling and AI-assisted workflows to improve team productivity.",
      ],
    },
    {
      title: "Flutter Developer",
      company: "Appscrip",
      imgSrc: appscrip_icon,
      location: "Bangalore, India",
      period: "July 2021 – May 2023",
      highlights: [
        "Developed mobile apps across industries, including social media, travel, and education.",
        "Delivered a social media platform (OnlyFans Clone) with features like user feeds, exclusive content, and live streaming.",
        "Built the Cordelia Cruises App in just 5 days, managing 75+ screens and 50+ APIs.",
        "Worked on the Instrucko App and Vief, integrating video calls, real-time chat, and complex UI components.",
        "Focused on clean code, reusable components, and high-performance implementations.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen relative overflow-hidden bg-[#0a0f0d]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4ade80]/5 via-transparent to-transparent" />
      </div>

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#4ade80 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Work Experience
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional journey and key achievements in software development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300 p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Company and Role Info */}
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-[#4ade80]/10 group-hover:bg-[#4ade80]/20 transition-colors">
                        <img
                          src={exp.imgSrc}
                          alt={`${exp.company} logo`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#4ade80] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-gray-300 mt-2">{exp.company}</p>

                    <div className="flex items-center gap-2 mt-4 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="md:w-2/3">
                    <ul className="space-y-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4ade80] flex-shrink-0" />
                          <p className="text-gray-300 leading-relaxed">
                            {highlight}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#4ade80]/10 to-transparent" />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#4ade80]/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
