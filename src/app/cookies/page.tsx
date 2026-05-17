import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Cookie Policy | Enteropia",
  description: "Learn about how Enteropia uses cookies to improve your browsing experience.",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-8 text-gradient">
            Cookie Policy
          </h1>
          <p className="text-gray-400 mb-12 italic">Last updated: May 16, 2026</p>

          <div className="prose prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What are Cookies?</h2>
              <p className="text-gray-400 leading-relaxed">
                Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-400 leading-relaxed">
                Enteropia uses cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-4">
                <li>
                  <strong className="text-white">Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website.
                </li>
                <li>
                  <strong className="text-white">Performance Cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use.
                </li>
                <li>
                  <strong className="text-white">Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. How Can I Control Cookies?</h2>
              <p className="text-gray-400 leading-relaxed">
                You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
