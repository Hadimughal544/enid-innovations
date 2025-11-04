"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function StudioVideoBackground() {
  const videos = [
    "/assets/studio/video1-1.mp4",
    "/assets/studio/video4.mp4",
    "/assets/studio/video5.mp4",
    "/assets/studio/video6.mp4",
    "/assets/studio/video8.mp4",
    "/assets/studio/video9.mp4",
    "/assets/studio/video10.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000); // change every 5 seconds

    return () => clearInterval(timer);
  }, [videos.length]);

  return (
    <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
      {/* Smooth transition between videos */}
      <AnimatePresence mode="wait">
        <motion.video
          key={currentVideo}
          src={videos[currentVideo]}
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4 sm:px-8 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-3 sm:mb-5">
          Ready to Elevate Your Brand?
        </h1>

        <div className="h-[3px] bg-white w-20 sm:w-28 md:w-36 mb-5 sm:mb-8" />

        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mb-6 sm:mb-8 px-2">
          We specialize in high-impact photography that elevates your brand and
          showcases your products with clarity, style, and purpose. Whether you’re
          launching a new line or refreshing your visual identity, our shoots are
          designed to make your business stand out.
        </p>

        <Link href="/studio/contactform">
          <button className="bg-white text-black py-2.5 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-2xl border-2 border-black hover:bg-black hover:border-white hover:text-white transition-all duration-300 text-sm sm:text-base md:text-lg font-medium">
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
