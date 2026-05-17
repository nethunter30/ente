"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Users, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Client Satisfaction", value: "99%" },
  { label: "Successful Migrations", value: "500+" },
  { label: "Uptime Guaranteed", value: "99.9%" },
  { label: "Security Incidents Fixed", value: "10k+" },
];

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  } as any;

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="about">
      {/* Decorative corporate watermark background */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[12rem] font-heading font-black rotate-90 origin-top-right">ENTEROPIA</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Professional Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block py-1 px-4 rounded-full bg-accent-blue/5 border border-accent-blue/10 text-accent-blue font-bold text-xs uppercase tracking-[0.2em] mb-6"
              >
                Executive Summary
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-dark leading-[1.1]">
                Leading the Next Era of <span className="text-accent-blue">Digital Integrity</span>
              </h2>
              <p className="mt-8 text-gray-500 text-lg leading-relaxed font-medium">
                Enteropia is a premium technology consultancy dedicated to architecting resilient digital ecosystems. We bridge the gap between complex technical challenges and sustainable business growth through a rigorous, security-first approach to innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4">
               {[
                 { title: "Our Mission", desc: "To fortify global digital infrastructure with uncompromising security and scalability.", icon: Target },
                 { title: "Our Vision", desc: "Setting the gold standard for enterprise-grade digital transformation services.", icon: Eye }
               ].map((item, idx) => (
                 <div key={idx} className="space-y-3">
                   <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                     <item.icon className="w-5 h-5" />
                   </div>
                   <h4 className="text-lg font-heading font-extrabold text-primary-dark">{item.title}</h4>
                   <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent-blue text-white font-extrabold rounded-2xl shadow-xl shadow-accent-blue/20 hover:bg-accent-blue/90 transition-all group"
                >
                  Explore More
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
              
              <div className="flex -space-x-3 items-center">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                 ))}
                 <div className="pl-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                   Trusted by 200+ Enterprises
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Structured Data & Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Professional Grid of Stats */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
               {stats.map((stat, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="p-8 rounded-[2rem] bg-white border border-border shadow-sm hover:shadow-2xl hover:border-accent-blue/20 transition-all group overflow-hidden relative"
                 >
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Users className="w-12 h-12" />
                   </div>
                   <div className="text-4xl font-heading font-black text-primary-dark group-hover:text-accent-blue transition-colors">
                     {stat.value}
                   </div>
                   <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-2">
                     {stat.label}
                   </div>
                 </motion.div>
               ))}
            </div>

            {/* Background elements for depth */}
            <div className="absolute inset-0 -z-10 bg-accent-blue/[0.02] rounded-full blur-[100px] scale-150" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-blue/5 rounded-full blur-3xl animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

