"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const Services = () => {
  const [activeId, setActiveId] = React.useState(services[0].id);

  // Add images to services for the carousel (using high-quality tech images)
  const servicesWithImages = services.map((s, i) => ({
    ...s,
    image: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
    ][i % 7]
  }));

  return (
    <section className="py-24 relative bg-white overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section - Centered */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-blue font-bold tracking-wider uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold mt-4 text-primary-dark"
          >
            Enterprise <span className="text-accent-blue">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Select a service to explore how we can transform your digital infrastructure with precision and scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Service List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2">
              {servicesWithImages.map((service) => (
                <button
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                    activeId === service.id 
                    ? "bg-accent-blue/5 border-l-4 border-accent-blue" 
                    : "hover:bg-gray-50 border-l-4 border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      activeId === service.id ? "bg-accent-blue text-white" : "bg-gray-100 text-gray-400 group-hover:text-accent-blue"
                    }`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className={`font-bold transition-colors ${
                      activeId === service.id ? "text-primary-dark" : "text-gray-400 group-hover:text-gray-600"
                    }`}>
                      {service.title}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-all ${
                    activeId === service.id ? "opacity-100 translate-x-0 text-accent-blue" : "opacity-0 -translate-x-2"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Stacked Cards */}
          <div className="lg:col-span-7 relative h-[450px] flex items-center justify-center lg:justify-end pr-4">
            {servicesWithImages.map((service, index) => {
              const isActive = activeId === service.id;
              const postionIndex = servicesWithImages.findIndex(s => s.id === activeId);
              const offset = index - postionIndex;
              
              return (
                <motion.div
                  key={service.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : 30 * offset,
                    y: isActive ? 0 : 12 * offset,
                    scale: isActive ? 1 : 0.85 - (Math.abs(offset) * 0.05),
                    zIndex: isActive ? 50 : 50 - Math.abs(offset),
                    opacity: isActive ? 1 : offset < 0 ? 0 : 0.5 - (Math.abs(offset) * 0.1),
                    rotate: isActive ? 0 : offset * 2,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-[280px] md:w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-white border border-border cursor-pointer group"
                  onClick={() => setActiveId(service.id)}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/20 to-transparent" />
                  
                  {/* Overlay Details - Only visible on hover */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20 bg-black/40 backdrop-blur-[2px]"
                  >
                    <div className="mb-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-blue flex items-center justify-center mb-3 shadow-lg">
                        <service.icon className="w-4.5 h-4.5" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-heading font-extrabold mb-1.5">{service.title}</h3>
                      <p className="text-gray-200 text-[10px] md:text-xs leading-relaxed mb-3 font-medium line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <ul className="space-y-1.5 mb-5">
                      {service.features.slice(0, 3).map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-gray-100 font-bold">
                          <div className="w-3 h-3 rounded-full bg-accent-blue/30 flex items-center justify-center shrink-0">
                            <Check className="w-2 h-2 text-accent-blue" />
                          </div>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-1.5 text-white font-bold bg-accent-blue px-4 py-2 rounded-lg hover:bg-accent-blue/90 transition-colors self-start shadow-xl text-[10px] uppercase tracking-wider"
                    >
                      Explore
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
