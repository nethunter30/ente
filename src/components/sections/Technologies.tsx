"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "AWS", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "Azure", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "Google Cloud", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "DigitalOcean", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "Linux", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "Windows Server", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "React.js", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "Next.js", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "Node.js", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "MongoDB", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "MySQL", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "Docker", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "Kubernetes", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "Nginx", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> },
  { name: "Cloudflare", icon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2z"/></svg> }
];

export const Technologies = () => {
  return (
    <section className="py-6 relative overflow-hidden bg-blue-100" id="technologies">
      {/* Futuristic Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
             style={{ transform: 'perspective(1000px) rotateX(60deg) translateY(-50px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-accent-blue font-bold tracking-wider uppercase text-[10px]">Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mt-2 text-primary-dark">Built with <span className="text-accent-blue">Modern Tech</span></h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto font-medium text-sm">
            Advanced technologies ensuring your project is built for the future.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10">
        {/* Marquee Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />
        
        <div className="flex overflow-hidden select-none">
          <div className="flex animate-marquee py-6 whitespace-nowrap gap-6">
            {[...technologies, ...technologies, ...technologies].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.03 }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-border shadow-sm hover:shadow-lg hover:border-accent-blue/30 transition-all duration-300 group/tech cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary-bg flex items-center justify-center text-gray-400 group-hover/tech:bg-accent-blue/10 group-hover/tech:text-accent-blue transition-all">
                  <tech.icon />
                </div>
                <span className="text-lg font-heading font-extrabold tracking-tight text-gray-400 group-hover/tech:text-primary-dark transition-colors">
                  {tech.name}
                </span>              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative accent */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-blue/[0.03] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};
