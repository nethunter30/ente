import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | Enteropia",
  description: "Learn how Enteropia collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-8 text-gradient">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-12 italic">Last updated: May 16, 2026</p>

          <div className="prose prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                Welcome to Enteropia. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-gray-400 leading-relaxed">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                <li>Name and Contact Data (email address, phone number, etc.)</li>
                <li>Credentials (passwords and similar security information)</li>
                <li>Payment Data (processed via secure third-party gateways)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-400 leading-relaxed">
                We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
              <p className="text-gray-400 leading-relaxed">
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have questions or comments about this policy, you may email us at privacy@enteropia.com or by post to our physical address.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
