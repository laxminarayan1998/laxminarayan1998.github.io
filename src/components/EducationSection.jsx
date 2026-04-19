import React from "react";
import { GraduationCap, Award, Users } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Orissa Engineering College, Bhubaneswar (BPUT)",
      period: "2017 – 2021",
      score: "CGPA: 7.8",
    },
    {
      degree: "12th — Science with Information Practices",
      institution: "Maharishi Vidya Mandir, Balasore (CBSE)",
      period: "2015 – 2017",
      score: "65%",
    },
    {
      degree: "10th — Information Technology",
      institution: "St. Thomas Convent School, Balasore (CBSE)",
      period: "2015",
      score: "CGPA: 9.2",
    },
  ];

  const extracurricular = [
    {
      role: "Mentor @ GDG Solution Challenge",
      period: "Jan 2023",
      description:
        "Guided students in building Flutter apps for the Google Developer Group Solution Challenge.",
    },
    {
      role: "Mentor @ OEC Tech Community",
      period: "Apr 2020 – 2021",
      description:
        "Organized events on trending technologies, trained 200+ students in app development, and helped newcomers get started with Flutter.",
    },
  ];

  const certifications = [
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "Sep 2020",
      link: "https://bit.ly/laxminarayan_psc",
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#0a0f0d] py-20 px-4"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4ade80]/5 via-transparent to-transparent" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#4ade80 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Education & More
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic background, mentoring, and certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#4ade80]/10">
                <GraduationCap className="w-5 h-5 text-[#4ade80]" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300"
                >
                  <p className="text-white font-semibold text-sm leading-snug">
                    {edu.degree}
                  </p>
                  <p className="text-gray-400 text-xs mt-1.5">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-500 text-xs">{edu.period}</span>
                    <span className="text-[#4ade80] text-xs font-semibold">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Extracurricular */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#4ade80]/10">
                <Users className="w-5 h-5 text-[#4ade80]" />
              </div>
              <h3 className="text-xl font-bold text-white">Mentoring</h3>
            </div>
            <div className="space-y-4">
              {extracurricular.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300"
                >
                  <p className="text-white font-semibold text-sm">
                    {item.role}
                  </p>
                  <p className="text-[#4ade80] text-xs mt-1">{item.period}</p>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#4ade80]/10">
                <Award className="w-5 h-5 text-[#4ade80]" />
              </div>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded-xl bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300"
                >
                  <p className="text-white font-semibold text-sm group-hover:text-[#4ade80] transition-colors">
                    {cert.title}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{cert.issuer}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-500 text-xs">{cert.date}</span>
                    <span className="text-[#4ade80] text-xs underline underline-offset-2">
                      View →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
