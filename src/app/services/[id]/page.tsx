import React from "react";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, ArrowRight, Shield, Globe, Zap, Clock } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Enteropia`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-lg`}>
                {service.title}
              </span>
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
                Scale Your Business with <br />
                <span className="text-gradient">Professional {service.title}</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {service.description} We provide comprehensive solutions tailored to your unique business needs, ensuring high performance and security.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary">
                  Start Your Project
                </Link>
                <Link href="/services" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 font-semibold transition-all">
                  Back to Services
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 blur-[100px] rounded-full`} />
              <div className="glass-card p-12 relative z-10 aspect-square flex items-center justify-center border-white/20">
                <service.icon className="w-48 h-48 text-white animate-pulse" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-24">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.features.map((feature, i) => (
                <div key={i} className="glass-card p-8 border-white/5 hover:border-accent-blue/30 transition-all">
                  <CheckCircle2 className="w-8 h-8 text-accent-teal mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature}</h3>
                  <p className="text-gray-400 text-sm">Enterprise-grade {feature.toLowerCase()} tailored for your growth.</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline / Process */}
          <div className="mb-24 bg-secondary-bg/30 rounded-3xl p-12 border border-white/5">
             <h2 className="text-3xl font-heading font-bold mb-12 text-center">Our Approach</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { title: "Analysis", desc: "We analyze your requirements and current setup." },
                  { title: "Implementation", desc: "Our team deploys the solution with precision." },
                  { title: "Optimization", desc: "We fine-tune everything for peak performance." },
                ].map((step, i) => (
                  <div key={i} className="relative text-center">
                    <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-cyan border border-accent-blue/20">
                      {i + 1}
                    </div>
                    <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                    <p className="text-gray-400">{step.desc}</p>
                    {i < 2 && (
                      <div className="hidden lg:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-px bg-white/10" />
                    )}
                  </div>
                ))}
             </div>
          </div>

          {/* FAQ / CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-bold">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "How long does the setup take?", a: "Typically, setup takes between 2-4 weeks depending on the complexity." },
                  { q: "Do you offer 24/7 support?", a: "Yes, all our enterprise packages include 24/7 monitoring and priority support." },
                  { q: "Is this solution scalable?", a: "Absolutely. Our infrastructure is built to scale seamlessly with your user base." },
                ].map((item, i) => (
                  <details key={i} className="glass-card p-6 border-white/5 group cursor-pointer">
                    <summary className="font-bold flex justify-between items-center list-none">
                      {item.q}
                      <ArrowRight className="w-5 h-5 text-accent-cyan transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-4 text-gray-400 text-sm leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-12 border-accent-blue/30 bg-accent-blue/5 flex flex-col items-center text-center justify-center">
              <Zap className="w-16 h-16 text-accent-cyan mb-6" />
              <h3 className="text-3xl font-heading font-bold mb-4">Ready to get started?</h3>
              <p className="text-gray-400 mb-8 max-w-sm">
                Join 500+ businesses that trust Enteropia for their digital infrastructure.
              </p>
              <Link href="/contact" className="btn-primary w-full md:w-auto">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
