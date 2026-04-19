import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const email = "laxminarayan1998@icloud.com";
  const phone = "+919776229989";

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 977-622-9989",
      href: `tel:${phone}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message directly",
      href: `https://wa.me/${phone.replace(/\D/g, "")}`,
    },
  ];

  const socials = [
    { icon: Github, label: "GitHub", handle: "@laxminarayan1998", href: "https://github.com/laxminarayan1998" },
    { icon: Linkedin, label: "LinkedIn", handle: "laxminarayan1998", href: "https://www.linkedin.com/in/laxminarayan1998" },
    { icon: Instagram, label: "Instagram", handle: "@nryn_das", href: "https://www.instagram.com/nryn_das" },
  ];

  return (
    <section id="contact" className="relative bg-[#0a0f0d] py-32 px-6 md:px-16 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background: "radial-gradient(ellipse, rgba(74,222,128,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Big heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[#4ade80] text-xs tracking-[0.25em] uppercase font-mono mb-6">Contact</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Let's build
            <br />
            <span className="text-[#4ade80]">something.</span>
          </h2>
          <p className="text-gray-500 text-lg mt-6 max-w-lg">
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
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-[#4ade80]/30 hover:bg-[#4ade80]/[0.04] transition-all duration-400"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4ade80]/10 flex items-center justify-center group-hover:bg-[#4ade80]/20 transition-colors">
                    <item.icon className="w-4.5 h-4.5 text-[#4ade80]" style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-white text-sm font-medium mt-0.5">{item.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-[#4ade80] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>
            ))}

            {/* Location pill */}
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/[0.07] bg-white/[0.02]">
              <MapPin className="w-4 h-4 text-[#4ade80]" />
              <span className="text-gray-400 text-sm">Bangalore, India</span>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7"
          >
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Find me online</p>
            <div className="space-y-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] hover:bg-[#4ade80]/[0.06] border border-transparent hover:border-[#4ade80]/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <s.icon className="w-4.5 h-4.5 text-gray-500 group-hover:text-[#4ade80] transition-colors" style={{ width: 18, height: 18 }} />
                    <div>
                      <p className="text-white text-sm font-medium">{s.label}</p>
                      <p className="text-gray-600 text-xs font-mono">{s.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-[#4ade80] transition-colors" />
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
