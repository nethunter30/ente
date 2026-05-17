import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Blog as BlogSection } from "@/components/sections/Blog";
import { Search, Tag } from "lucide-react";

export const metadata = {
  title: "Blog & Insights | Enteropia",
  description: "Stay updated with the latest trends in IT, cloud computing, and cybersecurity.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Blog Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8">
              Industry <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore our latest articles, guides, and thoughts on the future of technology, security, and digital infrastructure.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-purple/10 blur-[120px] rounded-full pointer-events-none" />
        </section>

        {/* Search & Filter Bar */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-card p-4 border-white/5 flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                 {["All", "Security", "Cloud", "Development", "IT Support"].map((cat) => (
                   <button key={cat} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10 hover:border-accent-blue transition-all whitespace-nowrap">
                     {cat}
                   </button>
                 ))}
              </div>
            </div>
          </div>
        </section>

        <BlogSection />

        {/* Newsletter Section */}
        <section className="py-24">
           <div className="max-w-4xl mx-auto px-6">
              <div className="glass-card p-12 border-accent-cyan/30 bg-accent-cyan/5 text-center relative overflow-hidden">
                 <div className="relative z-10">
                    <h2 className="text-3xl font-heading font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">Get the latest insights, security alerts, and tech trends delivered directly to your inbox.</p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                       <input
                         type="email"
                         placeholder="Enter your email"
                         className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-6 focus:outline-none focus:border-accent-cyan transition-colors"
                       />
                       <button className="btn-primary">Subscribe</button>
                    </form>
                    <p className="mt-4 text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
                 </div>
                 <Tag className="absolute -bottom-10 -right-10 w-40 h-40 text-accent-cyan/5 -rotate-12" />
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
