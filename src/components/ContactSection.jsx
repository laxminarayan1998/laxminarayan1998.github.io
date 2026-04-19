import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const email = "laxminarayan1998@icloud.com";
  const phone = "+919776229989";

  const contacts = [
    { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    { icon: Phone, label: "Phone", value: "+91 977-622-9989", href: `tel:${phone}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Message directly", href: `https://wa.me/${phone.replace(/\D/g, "")}` },
  ];

  const socials = [
    { icon: Github, label: "GitHub", handle: "@laxminarayan1998", href: "https://github.com/laxminarayan1998" },
    { icon: Linkedin, label: "LinkedIn", handle: "laxminarayan1998", href: "https://www.linkedin.com/in/laxminarayan1998" },
    { icon: Instagram, label: "Instagram", handle: "@nryn_das", href: "https://www.instagram.com/nryn_das" },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 md:px-16 overflow-hidden transition-colors duration-300 bg-white dark:bg-[#0a0f0d]">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none">
        <div className="w-full h-full"
          style={{ background: "radial-gradient(ellipse, rgba(74,222,128,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.25em] uppercase font-mono font-bold mb-6 text-green-600 dark:text-[#4ade80]">Contact</p>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            Let's build
            <br />
            <span className="text-green-600 dark:text-[#4ade80]">something.</span>
          </h2>
          <p className="text-lg mt-6 max-w-lg text-gray-500">
            Have a project, an idea, or just want to talk tech? I'm open to it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {contacts.map((item, i) => (
              <a key={i} href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-xl border transition-all duration-400
                  bg-white border-gray-200 shadow-sm shadow-gray-100 hover:border-green-300 hover:shadow-md hover:shadow-green-500/8
                  dark:bg-white/[0.02] dark:border-white/[0.14] dark:shadow-none dark:hover:border-[#4ade80]/30 dark:hover:bg-[#4ade80]/[0.04]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors
                    bg-green-50 group-hover:bg-green-100 dark:bg-[#4ade80]/10 dark:group-hover:bg-[#4ade80]/20">
                    <item.icon className="text-green-600 dark:text-[#4ade80]" style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">{item.label}</p>
                    <p className="text-sm font-semibold mt-0.5 text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                  text-gray-300 group-hover:text-green-500 dark:text-gray-600 dark:group-hover:text-[#4ade80]" />
              </a>
            ))}

            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl border
              bg-white border-gray-200 dark:bg-white/[0.02] dark:border-white/[0.14]">
              <MapPin className="w-4 h-4 text-green-600 dark:text-[#4ade80]" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Bangalore, India</span>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border p-7
              bg-white border-gray-200 shadow-sm shadow-gray-100
              dark:bg-white/[0.02] dark:border-white/[0.14] dark:shadow-none"
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-6 text-gray-400 dark:text-gray-500">
              Find me online
            </p>
            <div className="space-y-3">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border transition-all duration-300
                    bg-transparent border-transparent hover:bg-green-50 hover:border-green-200
                    dark:hover:bg-[#4ade80]/[0.06] dark:hover:border-[#4ade80]/20"
                >
                  <div className="flex items-center gap-4">
                    <s.icon className="transition-colors" style={{ width: 18, height: 18 }}
                      className="text-gray-400 group-hover:text-green-600 dark:text-gray-500 dark:group-hover:text-[#4ade80] transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{s.label}</p>
                      <p className="text-xs font-mono text-gray-400 dark:text-gray-600">{s.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-green-500 dark:text-gray-600 dark:group-hover:text-[#4ade80] transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
