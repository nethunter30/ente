import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Process as ProcessSection } from "@/components/sections/Process";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Clock, CheckCircle2, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "Our Process | Enteropia",
  description: "Learn about Enteropia's systematic approach to delivering high-quality IT and cybersecurity solutions.",
};

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Process Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8">
              How We <span className="text-gradient">Deliver</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our systematic approach ensures every project is delivered on time, within budget, and to the highest standards of security and performance.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-purple/10 blur-[120px] rounded-full pointer-events-none" />
        </section>

        <ProcessSection />
        
        {/* Quality Assurance */}
        <section className="py-24 bg-secondary-bg/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6">Our Commitment to <span className="text-gradient">Quality</span></h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We don't just deploy and leave. Every step of our process is backed by rigorous quality assurance and testing protocols to ensure your systems are robust and reliable.
                </p>
                <div className="space-y-4">
                  {[
                    "Standardized testing methodologies",
                    "Continuous security monitoring",
                    "Performance benchmarking and optimization",
                    "Detailed documentation and training",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-teal" />
                      <span className="text-gray-300 font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                 {[
                   { icon: Shield, title: "Secure", value: "100%" },
                   { icon: Zap, title: "Faster", value: "2x" },
                   { icon: Clock, title: "Support", value: "24/7" },
                   { icon: CheckCircle2, title: "Quality", value: "A+" },
                 ].map((stat, i) => (
                   <div key={i} className="glass-card p-8 border-white/5 text-center group hover:border-accent-blue/30 transition-all">
                      <stat.icon className="w-8 h-8 text-accent-cyan mx-auto mb-4" />
                      <div className="text-3xl font-heading font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.title}</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
