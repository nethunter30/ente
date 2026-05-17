import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Services as ServicesSection } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Technologies } from "@/components/sections/Technologies";

export const metadata = {
  title: "Our Services | Enteropia",
  description: "Explore Enteropia's range of IT, cloud, cybersecurity, and development services.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Services Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8">
              Enterprise <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We offer a wide range of specialized services designed to help modern businesses stay ahead in a rapidly evolving digital landscape.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none" />
        </section>

        <ServicesSection />
        <Technologies />
        <WhyChooseUs />
        
        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="glass-card p-12 border-accent-blue/30 bg-accent-blue/5 text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Our experts are ready to design a bespoke infrastructure and security plan that perfectly aligns with your business objectives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn-primary">Get Custom Quote</a>
                <a href="/contact" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 font-semibold transition-all">Talk to an Expert</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
