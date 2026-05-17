import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStudies as CaseStudiesSection } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata = {
  title: "Case Studies | Enteropia",
  description: "Explore our successful projects and see how we've helped businesses scale and secure their infrastructure.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Case Studies Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8">
              Our <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of how Enteropia has helped companies overcome technical challenges and achieve their business goals.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
        </section>

        <CaseStudiesSection />
        <Testimonials />
        
        {/* Partnership CTA */}
        <section className="py-24 bg-secondary-bg/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Want to be our next success story?</h2>
            <p className="text-gray-400 mb-10 text-lg">
              We're ready to bring our expertise to your project and help you achieve similar results.
            </p>
            <a href="/contact" className="btn-primary">Start Your Journey with Us</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
