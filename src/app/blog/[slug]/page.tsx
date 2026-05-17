import React from "react";
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Enteropia Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent-cyan font-bold mb-8 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-lg bg-accent-blue/10 text-accent-cyan text-sm font-bold mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-cyan" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-accent-cyan" />
                {post.author}
              </span>
            </div>
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <div className="space-y-6 text-gray-400 leading-relaxed">
               <p>
                 In the rapidly evolving world of technology, staying ahead of the curve is not just an advantage—it's a necessity. At Enteropia, we believe that understanding the core principles of digital transformation is key to long-term success.
               </p>
               <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Importance of Security</h2>
               <p>
                 Security is the foundation of any digital infrastructure. Without robust protection, even the most advanced systems are vulnerable to threats that can jeopardize business continuity and data integrity.
               </p>
               <h2 className="text-2xl font-bold text-white mt-12 mb-4">Scalability and Growth</h2>
               <p>
                 As your business grows, your technology must scale with it. Cloud-native solutions provide the flexibility and efficiency needed to handle increased demand without compromising performance.
               </p>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="flex flex-wrap gap-4">
               {["Tech", "Security", "Cloud", "Infrastructure"].map((tag) => (
                 <span key={tag} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                    <Tag className="w-3 h-3" />
                    {tag}
                 </span>
               ))}
            </div>
          </div>

          {/* Next Post CTA */}
          <div className="mt-24 p-12 glass-card border-accent-blue/30 bg-accent-blue/5 text-center">
             <h3 className="text-2xl font-bold mb-4">Ready to implement these strategies?</h3>
             <p className="text-gray-400 mb-8 max-w-md mx-auto">Our experts can help you design and deploy the perfect solution for your business.</p>
             <Link href="/contact" className="btn-primary">Talk to Our Team</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
