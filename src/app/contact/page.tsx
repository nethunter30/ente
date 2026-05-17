import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact as ContactSection } from "@/components/sections/Contact";
import { Shield, Clock, MessageSquare, Zap } from "lucide-react";

export const metadata = {
  title: "Contact Us | Enteropia",
  description: "Get in touch with Enteropia for modern IT, cloud, and cybersecurity solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Contact Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Have a question or ready to start your next big project? Our team is here to help you scale and secure your business.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
        </section>

        {/* Support Features */}
        <section className="py-12 bg-secondary-bg/30">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "24/7 Support", desc: "Always available for critical issues." },
              { icon: Shield, title: "Secure Communications", desc: "Your data is protected and encrypted." },
              { icon: MessageSquare, title: "Expert Advice", desc: "Speak directly with our senior architects." },
              { icon: Zap, title: "Fast Response", desc: "We typically respond within 2-4 hours." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 border-white/5 text-center">
                <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center mx-auto mb-4 border border-accent-blue/20">
                  <item.icon className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />

        {/* Map Placeholder */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-card aspect-[21/9] w-full border-white/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary-dark/50 flex items-center justify-center text-gray-500">
                <div className="text-center">
                   <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                   <p className="font-heading font-bold text-2xl">Interactive Map Coming Soon</p>
                   <p>123 Tech Avenue, Silicon Valley, CA 94025</p>
                </div>
              </div>
              <div className="w-full h-full cyber-grid opacity-20" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { MapPin } from "lucide-react";
