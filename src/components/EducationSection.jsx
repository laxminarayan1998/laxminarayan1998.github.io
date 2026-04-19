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
    <section id="education" className="relative py-32 px-6 md:px-16 transition-colors duration-300 bg-gray-50 dark:bg-[#0a0f0d]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase font-mono font-bold mb-4 text-green-600 dark:text-[#4ade80]">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Education & more
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Education */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-100 dark:bg-[#4ade80]/10">
                <GraduationCap className="w-4 h-4 text-green-600 dark:text-[#4ade80]" />
              </div>
              <h3 className="text-sm font-mono tracking-wider uppercase text-gray-500 dark:text-gray-300">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="group p-5 rounded-xl border transition-all duration-400
                  bg-white border-gray-200 shadow-sm shadow-gray-100 hover:border-green-300 hover:shadow-md hover:shadow-green-500/8
                  dark:bg-white/[0.02] dark:border-white/[0.14] dark:shadow-none dark:hover:border-[#4ade80]/25 dark:hover:bg-white/[0.04]">
                  <p className="text-sm font-semibold leading-snug transition-colors text-gray-900 group-hover:text-green-600 dark:text-white dark:group-hover:text-[#4ade80]">
                    {edu.degree}
                  </p>
                  <p className="text-xs mt-1.5 leading-relaxed text-gray-500 dark:text-gray-400">{edu.institution}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs font-mono text-gray-400 dark:text-gray-600">{edu.period}</span>
                    <span className="text-xs font-mono font-semibold text-green-600 dark:text-[#4ade80]">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mentoring */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-100 dark:bg-[#4ade80]/10">
                <Users className="w-4 h-4 text-green-600 dark:text-[#4ade80]" />
              </div>
              <h3 className="text-sm font-mono tracking-wider uppercase text-gray-500 dark:text-gray-300">Mentoring</h3>
            </div>
            <div className="space-y-3">
              {mentoring.map((item, i) => (
                <div key={i} className="group p-5 rounded-xl border transition-all duration-400
                  bg-white border-gray-200 shadow-sm shadow-gray-100 hover:border-green-300 hover:shadow-md hover:shadow-green-500/8
                  dark:bg-white/[0.02] dark:border-white/[0.14] dark:shadow-none dark:hover:border-[#4ade80]/25 dark:hover:bg-white/[0.04]">
                  <p className="text-sm font-semibold transition-colors text-gray-900 group-hover:text-green-600 dark:text-white dark:group-hover:text-[#4ade80]">
                    {item.role}
                  </p>
                  <p className="text-xs font-mono mt-1 text-green-500 dark:text-[#4ade80]/70">{item.period}</p>
                  <p className="text-xs mt-2.5 leading-relaxed text-gray-400 dark:text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-100 dark:bg-[#4ade80]/10">
                <Award className="w-4 h-4 text-green-600 dark:text-[#4ade80]" />
              </div>
              <h3 className="text-sm font-mono tracking-wider uppercase text-gray-500 dark:text-gray-300">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col p-5 rounded-xl border transition-all duration-400
                    bg-white border-gray-200 hover:border-green-300 hover:shadow-sm hover:shadow-green-500/5
                    dark:bg-white/[0.02] dark:border-white/[0.14] dark:hover:border-[#4ade80]/25 dark:hover:bg-white/[0.04] dark:hover:shadow-none">
                  <p className="text-sm font-semibold transition-colors text-gray-900 group-hover:text-green-600 dark:text-white dark:group-hover:text-[#4ade80]">
                    {cert.title}
                  </p>
                  <p className="text-xs mt-1 text-gray-400 dark:text-gray-500">{cert.issuer}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs font-mono text-gray-400 dark:text-gray-600">{cert.date}</span>
                    <span className="text-xs font-mono group-hover:translate-x-0.5 transition-transform text-green-600 dark:text-[#4ade80]">
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
