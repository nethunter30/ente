import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | Enteropia",
  description: "Read the terms and conditions for using Enteropia's services and website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-8 text-gradient">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-12 italic">Last updated: May 16, 2026</p>

          <div className="prose prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing or using Enteropia's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-gray-400 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on Enteropia's website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p className="text-gray-400 leading-relaxed">
                The materials on Enteropia's website are provided on an 'as is' basis. Enteropia makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p className="text-gray-400 leading-relaxed">
                In no event shall Enteropia or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Enteropia's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
              <p className="text-gray-400 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Enteropia operates and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
