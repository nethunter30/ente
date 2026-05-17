"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, HeartHandshake, TrendingUp, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Reliable IT solutions",
    desc: "Robust and secure IT infrastructure tailored to your business needs.",
  },
  {
    icon: Zap,
    title: "Modern cloud infrastructure",
    desc: "Leveraging the power of cloud to scale your operations seamlessly.",
  },
  {
    icon: Globe,
    title: "Professional cybersecurity",
    desc: "Enterprise-grade security practices to protect your digital assets.",
  },
  {
    icon: HeartHandshake,
    title: "Fast response & support",
    desc: "Our dedicated support team is always ready to assist you.",
  },
  {
    icon: TrendingUp,
    title: "Scalable business solutions",
    desc: "Solutions that grow with your business, ensuring long-term success.",
  },
  {
    icon: DollarSign,
    title: "Affordable packages",
    desc: "Premium services at competitive prices for startups and SMEs.",
  },
];

export const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  } as any;

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent-blue font-bold tracking-wider uppercase text-sm">Our Edge</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-4 text-primary-dark">Why Choose <span className="text-accent-blue">Enteropia</span></h2>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-secondary-bg border border-border p-8 rounded-2xl group hover:border-accent-blue/20 transition-all duration-300 relative shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-blue/5 flex items-center justify-center mb-6 group-hover:bg-accent-blue/10 transition-colors">
                <reason.icon className="w-6 h-6 text-accent-blue" />
              </div>
              
              <h3 className="text-xl font-heading font-bold mb-4 text-primary-dark group-hover:text-accent-blue transition-colors relative z-10">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
