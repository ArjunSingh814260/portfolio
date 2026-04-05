"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialBar() {
  const socials = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/arjunsingh" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/arjunsingh" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com/arjunsingh" },
    { name: "Email", icon: Mail, href: "mailto:arjunsingh814260@gmail.com" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      className="fixed z-50 flex items-center 
      bottom-6 left-1/2 -translate-x-1/2 flex-row gap-6 px-6 py-3 bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-full
      md:bottom-0 md:left-6 md:-translate-x-0 md:flex-col md:bg-transparent md:backdrop-blur-none md:border-transparent md:rounded-none md:px-0 md:py-0
      md:after:content-[''] md:after:w-[1px] md:after:h-24 md:after:bg-white/20 md:after:mt-2"
    >
      {socials.map((social, idx) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + idx * 0.1, type: "spring", bounce: 0.5 }}
            whileHover={{ scale: 1.25, y: -6, rotate: idx % 2 === 0 ? 5 : -5 }}
            className="text-zinc-400 hover:text-white transition-colors duration-300"
            title={social.name}
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
