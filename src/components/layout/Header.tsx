"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 pt-4 sm:pt-6 transition-all duration-300 pointer-events-none">
      <header
        className={cn(
          "max-w-7xl mx-auto rounded-2xl transition-all duration-300 border pointer-events-auto",
          scrolled 
            ? "bg-white/10 backdrop-blur-xl border-white/20 py-3 px-6 shadow-2xl" 
            : "bg-black/20 backdrop-blur-md border-white/10 py-4 px-6"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/20 backdrop-blur-md border border-accent-blue/30 flex items-center justify-center transition-transform group-hover:scale-105">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-heading font-bold tracking-tight text-white drop-shadow-md">
              ENTERO<span className="text-accent-blue">PIA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all hover:text-white hover:drop-shadow-md",
                  pathname === link.href ? "text-white drop-shadow-md" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all py-2 px-6 rounded-lg text-sm font-medium">
              Get Consultation
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-6 pb-2 border-t border-white/10 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-lg font-medium text-gray-200 hover:text-white"
                  >
                    {link.name}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-accent-blue text-white text-center mt-4 py-3 rounded-lg font-medium"
                >
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};
