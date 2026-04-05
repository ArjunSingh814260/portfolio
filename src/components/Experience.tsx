"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  // Smooth the scroll progress for a buttery line drawing effect
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "AllHeart Web Pvt. Ltd.",
      period: "Oct 2024 - Present",
      description: "Built scalable Next.js + Node.js features, increasing user engagement by 25%. Improved page load speed by 30% with optimized APIs/UI. Ensured 99.9% uptime using monitoring and error-resilient architecture.",
      techStack: ["Next.js", "Node.js", "React.js", "TypeScript", "AWS", "MongoDB"]
    },
    {
      title: "Full Stack Developer",
      company: "Algoscale Technologies",
      period: "Mar 2024 - Aug 2024",
      description: "Enhanced backend performance by 20%. Integrated payments/analytics reducing response time by 30%. Achieved 95% sprint delivery efficiency.",
      techStack: ["React.js", "Node.js", "Express.js", "Analytics"]
    },
    {
      title: "Full Stack Developer",
      company: "Codedrill Infotech",
      period: "May 2022 - Mar 2024",
      description: "Delivered MERN modules improving UX/performance by 30%. Reduced API latency by 25% with DB optimization.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis"]
    },
    {
      title: "Full Stack Intern",
      company: "Oops Infosolutions",
      period: "Oct 2021 - Apr 2022",
      description: "Developed personalized e-commerce features. Improved UI navigation and user experience.",
      techStack: ["HTML", "CSS", "JavaScript", "React.js"]
    }
  ];

  return (
    <section className="bg-[#121212] py-16 md:py-24 px-6 lg:px-12 relative z-20 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Animation */}
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-2xl font-light max-w-2xl leading-relaxed"
          >
            My professional journey building digital products and leading engineering teams.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative md:ml-6 ml-2 select-none pb-10">
          
          {/* Faded Background Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
          
          {/* Animated Active Line (Scroll-linked) */}
          <motion.div 
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[0px] -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent z-10" 
          />

          {/* Experience Items */}
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="mb-16 md:mb-24 pl-8 md:pl-16 relative group"
            >
              {/* Timeline Glowing Dot */}
              <div className="absolute left-[0px] -translate-x-1/2 top-3 w-[14px] h-[14px] rounded-full bg-[#121212] border-[2px] border-blue-500 group-hover:border-purple-500 group-hover:bg-purple-500 group-hover:scale-150 transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:shadow-[0_0_25px_rgba(168,85,247,1)] z-20" />
              

              {/* Title & Period */}
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                  {exp.title}
                </h3>
                <span className="text-zinc-500 text-sm md:text-base font-medium tracking-[0.2em] uppercase mt-2 md:mt-0 flex-shrink-0">
                  {exp.period}
                </span>
              </div>
              
              {/* Company */}
              <div className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
                {exp.company}
              </div>
              
              {/* Description */}
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 group-hover:text-zinc-300 transition-colors duration-300">
                {exp.description}
              </p>

              {/* Technologies Row (Staggered Children via Hover or slightly lifted) */}
              <div className="flex flex-wrap gap-3">
                {exp.techStack.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-zinc-300 text-sm md:text-base backdrop-blur-md group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300 hover:shadow-[0_4px_15px_rgba(0,0,0,0.5)] cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
