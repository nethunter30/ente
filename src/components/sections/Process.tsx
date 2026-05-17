"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    desc: "We begin by understanding your business goals, current infrastructure, and technical requirements.",
  },
  {
    title: "Planning",
    desc: "A detailed roadmap is created, focusing on security, scalability, and performance optimization.",
  },
  {
    title: "Deployment",
    desc: "Our experts execute the plan with precision, ensuring minimal disruption to your operations.",
  },
  {
    title: "Security & Testing",
    desc: "Rigorous security audits and performance testing are conducted to ensure enterprise-grade stability.",
  },
  {
    title: "Optimization",
    desc: "Fine-tuning the system for maximum efficiency and cost-effectiveness.",
  },
  {
    title: "Support & Maintenance",
    desc: "Ongoing 24/7 monitoring and proactive support to keep your systems running at peak performance.",
  },
];

export const Process = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, x: -30, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  } as any;

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent-blue font-bold tracking-wider uppercase text-sm">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-4 text-primary-dark">Our Technical <span className="text-accent-blue">Workflow</span></h2>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-[19px] md:left-1/2 top-0 w-0.5 bg-border transform md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`relative flex items-center justify-between md:justify-normal w-full group ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-white border-2 border-accent-blue flex items-center justify-center transform md:-translate-x-1/2 z-10 transition-all duration-300 group-hover:bg-accent-blue group-hover:scale-110 shadow-sm">
                  <span className="text-xs font-extrabold text-accent-blue group-hover:text-white transition-colors">{i + 1}</span>
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-[45%]">
                  <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-accent-blue/20 transition-all duration-300 relative overflow-hidden group">
                    <h3 className="text-2xl font-heading font-bold mb-3 text-primary-dark group-hover:text-accent-blue transition-colors relative z-10">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed relative z-10">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
