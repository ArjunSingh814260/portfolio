"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Dine in Florida",
      category: "Web Application",
      description: "Real-time table booking; improved UX by 25%; reduced wait time by 30%.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Curv",
      category: "Social Platform",
      description: "Social platform; +30% user engagement; real-time posts & notifications.",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Last House Standing",
      category: "Betting Platform",
      description: "Betting platform; 10k+ concurrent users; real-time odds engine.",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Calendar Tool",
      category: "Productivity",
      description: "Multi-platform scheduler (Google/Teams/Zoom) with conflict detection.",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      title: "Live Chat Support Platform",
      category: "Real-time Communication",
      description: "Real-time chat using WebSockets; low-latency messaging for thousands of users.",
      color: "from-rose-500/20 to-red-500/20",
    }
  ];

  return (
    <section className="bg-[#121212] pt-8 pb-16 md:pb-24 px-6 lg:px-12 relative z-20 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            Selected Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-2xl font-light max-w-2xl leading-relaxed"
          >
            A showcase of recent digital products, interactive experiences, and creative engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-10">
          {projects.map((project, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -12, scale: 1.03, rotateX: 2, rotateY: -2 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              key={idx} 
              className="group relative rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-md p-8 md:p-12 hover:bg-white/[0.05] transition-colors duration-500 aspect-square md:aspect-[4/3] flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              {/* Subtle hover glow background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10`} />
              
              <div className="flex justify-between items-start z-10">
                <span className="text-zinc-400 text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
                  {project.category}
                </span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <ArrowUpRight className="text-white w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>

              <div className="z-10 mt-auto">
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-lg max-w-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
