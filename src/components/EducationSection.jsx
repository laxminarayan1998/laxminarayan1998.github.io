import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech — Computer Science Engineering",
    institution: "Orissa Engineering College, Bhubaneswar (BPUT)",
    period: "2017 – 2021",
    score: "CGPA 7.8",
  },
  {
    degree: "12th — Science & Information Practices",
    institution: "Maharishi Vidya Mandir, Balasore (CBSE)",
    period: "2015 – 2017",
    score: "65%",
  },
  {
    degree: "10th — Information Technology",
    institution: "St. Thomas Convent School, Balasore (CBSE)",
    period: "2015",
    score: "CGPA 9.2",
  },
];

const mentoring = [
  {
    role: "Mentor @ GDG Solution Challenge",
    period: "Jan 2023",
    description: "Guided students in building Flutter apps for Google Developer Group Solution Challenge.",
  },
  {
    role: "Mentor @ OEC Tech Community",
    period: "Apr 2020 – 2021",
    description: "Organized tech events. Trained 200+ students in mobile app development and Flutter.",
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

const EducationSection = () => {
  return (
    <section id="education" className="relative bg-[#0a0f0d] py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#4ade80] text-xs tracking-[0.25em] uppercase font-mono mb-4">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Education & more
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#4ade80]/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-[#4ade80]" />
              </div>
              <h3 className="text-sm font-mono text-gray-300 tracking-wider uppercase">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-[#4ade80]/25 hover:bg-white/[0.04] transition-all duration-400"
                >
                  <p className="text-white text-sm font-semibold leading-snug group-hover:text-[#4ade80] transition-colors">
                    {edu.degree}
                  </p>
                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{edu.institution}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-600 text-xs font-mono">{edu.period}</span>
                    <span className="text-[#4ade80] text-xs font-mono font-semibold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mentoring */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#4ade80]/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-[#4ade80]" />
              </div>
              <h3 className="text-sm font-mono text-gray-300 tracking-wider uppercase">Mentoring</h3>
            </div>
            <div className="space-y-3">
              {mentoring.map((item, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-[#4ade80]/25 hover:bg-white/[0.04] transition-all duration-400"
                >
                  <p className="text-white text-sm font-semibold group-hover:text-[#4ade80] transition-colors">
                    {item.role}
                  </p>
                  <p className="text-[#4ade80]/70 text-xs font-mono mt-1">{item.period}</p>
                  <p className="text-gray-500 text-xs mt-2.5 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#4ade80]/10 flex items-center justify-center">
                <Award className="w-4 h-4 text-[#4ade80]" />
              </div>
              <h3 className="text-sm font-mono text-gray-300 tracking-wider uppercase">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-[#4ade80]/25 hover:bg-white/[0.04] transition-all duration-400"
                >
                  <p className="text-white text-sm font-semibold group-hover:text-[#4ade80] transition-colors">
                    {cert.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-600 text-xs font-mono">{cert.date}</span>
                    <span className="text-[#4ade80] text-xs font-mono group-hover:translate-x-0.5 transition-transform">
                      View →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
