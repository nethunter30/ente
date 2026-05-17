"use client";

import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

export const Blog = () => {
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
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  } as any;

  return (
    <section className="py-24 relative bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-blue font-bold tracking-wider uppercase text-sm">Insights</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-4 text-primary-dark">Latest from <span className="text-accent-blue">Enteropia</span></h2>
            <p className="mt-4 text-gray-600 max-w-xl font-medium">
              Stay updated with the latest trends in cloud security, IT infrastructure, and digital transformation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="flex items-center gap-2 text-primary-dark font-bold hover:text-accent-blue transition-colors group">
              View All Posts
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
          {blogPosts.slice(0, 3).map((post) => (
            <motion.div
              key={post.slug}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-2xl overflow-hidden group flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-accent-blue text-white text-[10px] font-bold tracking-widest uppercase shadow-lg">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow relative overflow-hidden">
                <div className="flex items-center gap-4 text-xs text-gray-400 font-bold mb-4 relative z-10">
                  <span className="flex items-center gap-1 uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  {post.readTime && (
                    <span className="flex items-center gap-1 uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-heading font-extrabold mb-4 text-primary-dark group-hover:text-accent-blue transition-colors line-clamp-2 relative z-10">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed relative z-10 font-medium">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-border flex justify-between items-center relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue text-[10px] font-extrabold border border-accent-blue/20">
                      {post.author[0]}
                    </div>
                    <span className="text-xs font-bold text-gray-500">{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-accent-blue group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
