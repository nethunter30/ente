import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { About as AboutSection } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Target, Users, Shield, Award } from "lucide-react";

export const metadata = {
  title: "About Us | Enteropia",
  description: "Learn more about Enteropia's mission, vision, and the team behind our modern IT solutions.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* About Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8">
              We Build the <span className="text-gradient">Future of IT</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Enteropia was founded with a single mission: to empower businesses with secure, scalable, and cutting-edge technology solutions that drive growth.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-secondary-bg/30">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-12 border-white/5">
              <Target className="w-12 h-12 text-accent-cyan mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To be the global leader in providing innovative and secure digital infrastructure that enables businesses of all sizes to thrive in the modern era.
              </p>
            </div>
            <div className="glass-card p-12 border-white/5">
              <Shield className="w-12 h-12 text-accent-purple mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To deliver enterprise-grade IT, cloud, and cybersecurity services that are accessible, reliable, and tailored to the unique needs of our clients.
              </p>
            </div>
          </div>
        </section>

        <AboutSection />
        
        {/* Core Pillars */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-heading font-bold mb-16 text-center">Our Core Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: "Uncompromising Security", desc: "Security is baked into everything we build, from the ground up." },
                { icon: Award, title: "Excellence", desc: "We strive for perfection in every deployment and support ticket." },
                { icon: Users, title: "Client First", desc: "Your success is our success. We partner with you for the long haul." },
                { icon: Target, title: "Innovation", desc: "We stay ahead of the curve with the latest tech and methodologies." },
              ].map((pillar, i) => (
                <div key={i} className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
