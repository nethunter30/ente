"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    author: "John Smith",
    role: "CEO",
    company: "TechFlow",
    quote: "Enteropia transformed our infrastructure. Their cloud migration was seamless, and our system uptime has never been better. Highly recommended!",
  },
  {
    author: "Sarah Chen",
    role: "CTO",
    company: "SecureNode",
    quote: "The cybersecurity hardening provided by Enteropia gave us the peace of mind we needed. Their team is professional, fast, and highly skilled.",
  },
  {
    author: "Michael Ross",
    role: "Founder",
    company: "CloudScale",
    quote: "From web development to server management, Enteropia is our go-to partner for all things tech. They truly understand scalability.",
  },
];

export const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  } as any;

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent-blue font-bold tracking-wider uppercase text-sm">Client Trust</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-4 text-primary-dark">What Our <span className="text-accent-blue">Partners Say</span></h2>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-secondary-bg border border-border p-8 rounded-2xl flex flex-col hover:border-accent-blue/20 transition-all duration-300 relative group shadow-sm hover:shadow-md"
            >
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent-orange text-accent-orange" />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-border relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold border border-accent-blue/20">
                  {testimonial.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark group-hover:text-accent-blue transition-colors">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
