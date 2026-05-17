import React from "react";
import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Globe, Cpu, Code, ArrowRight } from "lucide-react";

const footerLinks = {
  Services: [
    { name: "IT Infrastructure", href: "/services/it-infrastructure" },
    { name: "Cloud Migration", href: "/services/cloud-migration" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "App Development", href: "/services/web-development" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-secondary-bg pt-24 pb-12 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-accent-blue flex items-center justify-center">
                <Shield className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-heading font-extrabold tracking-tight text-primary-dark">
                ENTERO<span className="text-accent-blue">PIA</span>
              </span>
            </Link>
            <p className="text-gray-500 max-w-xs leading-relaxed font-medium">
              Secure. Scale. Transform. Providing modern IT, cloud, and cybersecurity solutions for the next generation of businesses.
            </p>
            <div className="flex gap-4">
              {[Globe, Cpu, Code].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all text-gray-400">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-lg font-heading font-extrabold text-primary-dark">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-500 hover:text-accent-blue font-medium transition-colors flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent-blue" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-extrabold text-primary-dark">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-500 font-medium">
                <Mail className="w-5 h-5 text-accent-blue shrink-0 mt-1" />
                <span>contact@enteropia.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-500 font-medium">
                <Phone className="w-5 h-5 text-accent-blue shrink-0 mt-1" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-gray-500 font-medium">
                <MapPin className="w-5 h-5 text-accent-blue shrink-0 mt-1" />
                <span>123 Tech Avenue, Silicon Valley, CA 94025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Enteropia. All rights reserved.</p>
          <div className="flex gap-8 font-medium">
            <Link href="/privacy" className="hover:text-accent-blue transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent-blue transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
