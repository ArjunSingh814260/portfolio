"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: ["React.js (18)", "Next.js (15)", "TypeScript", "SSR / SSG", "Zustand / Redux", "Tailwind CSS"],
      color: "from-indigo-500/10 to-sky-500/10",
      accent: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-300"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT / OAuth", "WebSockets"],
      color: "from-violet-500/10 to-purple-500/10",
      accent: "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300"
    },
    {
      title: "Databases & Caching",
      skills: ["MongoDB", "Mongoose", "Redis", "Pub / Sub", "Caching"],
      color: "from-lime-500/10 to-emerald-500/10",
      accent: "text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-300"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "EC2 / S3 / CloudFront", "Docker", "CI / CD", "PM2", "NGINX", "GitHub Actions"],
      color: "from-fuchsia-500/10 to-rose-500/10",
      accent: "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-rose-300"
    },
    {
      title: "Architecture",
      skills: ["System Design", "Performance Tuning", "Scalable Architecture", "Microservices"],
      color: "from-yellow-500/10 to-amber-500/10",
      accent: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300"
    }
  ];

  return (
    <section className="bg-[#121212] pt-16 md:pt-24 pb-8 px-6 lg:px-12 relative z-20 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-2xl font-light max-w-2xl leading-relaxed"
          >
            A comprehensive toolkit for crafting robust, scalable, and visually stunning digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -12, scale: 1.03, rotateX: 2, rotateY: 2 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              key={idx} 
              className="group relative rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-md p-8 md:p-12 hover:bg-white/[0.05] transition-colors duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Subtle hover glow background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10`} />
              
              <div className="z-10 relative">
                <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight ${category.accent} opacity-90 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm`}>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span 
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 + skillIdx * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.1, y: -4, rotate: (skillIdx % 2 === 0 ? 2 : -2) }}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm md:text-base font-medium tracking-wide hover:bg-white/15 hover:text-white transition-colors duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-white/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
