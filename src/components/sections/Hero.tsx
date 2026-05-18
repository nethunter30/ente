"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const initHLS = async () => {
      const video = videoRef.current;
      if (!video) return;

      // Sample HLS stream (Big Buck Bunny)
      const videoSrc = "/back-video.mp4";

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari natively supports HLS
        video.src = videoSrc;
        video.addEventListener("loadedmetadata", () => {
          video.play().catch(console.error);
        });
      } else {
        // Dynamically import hls.js to avoid SSR issues and avoid missing dependency errors if not yet installed
        try {
          const Hls = (await import("hls.js")).default;
          if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
              video.play().catch(console.error);
            });
          }
        } catch (error) {
          console.warn("hls.js is not installed. Video playback will fallback or fail. Run `npm install hls.js`");
        }
      }
    };

    initHLS();
  }, []);

  return (
    <section className="relative h-screen w-full flex items-end pb-20 sm:pb-32 justify-start overflow-hidden bg-black">
      {/* HLS Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-20">
        {/* Text Content in Bottom-Left */}
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 shadow-2xl">
              <Shield className="w-4 h-4 text-accent-blue" />
              Enterprise-Grade Security
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-2xl">
              Secure Your <span className="text-accent-blue bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-blue-400">Digital</span> <br />
              Future
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed drop-shadow-md">
              Enteropia delivers hyper-secure cloud infrastructure and AI-driven cybersecurity solutions designed for the modern enterprise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 pt-4"
          >
            <Link href="/contact" className="bg-accent-blue text-white hover:bg-blue-600 transition-colors rounded-xl font-medium group px-8 py-4 text-lg w-full sm:w-auto flex items-center justify-center shadow-lg shadow-blue-500/20">
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all rounded-xl font-medium px-8 py-4 text-lg w-full sm:w-auto flex items-center justify-center">
              View Solutions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
