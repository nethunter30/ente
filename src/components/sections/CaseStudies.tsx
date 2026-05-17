"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Global Logistics Cloud",
    category: "Cloud Services",
    description: "Migrated a legacy logistics platform to a serverless architecture, reducing operational costs by 40%.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    result: "40%",
    metric: "Cost Reduction",
  },
  {
    title: "Finance System Hardening",
    category: "Cybersecurity",
    description: "Implemented Zero-Trust architecture for a fintech startup, achieving SOC2 compliance in record time.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    result: "100%",
    metric: "SOC2 Compliant",
  },
  {
    title: "Enterprise IT Infrastructure",
    category: "IT Support",
    description: "Setup a multi-region server infrastructure for a global logistics company with 24/7 monitoring.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop",
    result: "24/7",
    metric: "Uptime Managed",
  },
];

export const CaseStudies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  } as any;

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-blue font-bold tracking-wider uppercase text-sm">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-4 text-primary-dark">Enterprise <span className="text-accent-blue">Impact</span></h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/case-studies" className="flex items-center gap-2 text-primary-dark font-bold hover:text-accent-blue transition-colors group">
              View Strategy Portfolio
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group relative"
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={study.image}
                  alt={study.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="px-3 py-1 rounded-full bg-accent-blue text-white text-[10px] font-bold tracking-widest uppercase">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-heading font-bold text-primary-dark group-hover:text-accent-blue transition-colors line-clamp-1">{study.title}</h3>
                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-accent-blue font-extrabold text-xl">{study.result}</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{study.metric}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 line-clamp-2 leading-relaxed">
                  {study.description}
                </p>

                <Link
                  href={`/case-studies/${study.title.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center gap-2 text-accent-blue font-bold group/link"
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
