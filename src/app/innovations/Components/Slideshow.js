"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";



export default function Slideshow() {
  const videos = [
  "/assets/slideshow/E1.mp4",
  "/assets/slideshow/E2.mp4",
  "/assets/slideshow/E3.mp4",
  "/assets/slideshow/E4.mp4",
  "/assets/slideshow/E5.mp4",
];
  const [currentVideo, setCurrentVideo] = useState(0);

 useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 4000); // change every 5 seconds

    return () => clearInterval(timer);
  }, [videos.length]);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.video
          key={currentVideo}
          src={videos[currentVideo]}
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 1.2, ease: "easeInOut" }}

        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 z-10"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center text-white z-20 px-5 sm:px-10 md:px-16 max-w-2xl space-y-3 sm:space-y-5">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight">
          Scale Your Business with Enid Innovations
        </h1>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-justify">
          Enid Innovations is your trusted partner in digital transformation.
          From customer engagement to backend systems, we craft tailored BPO
          and IT strategies that fuel efficiency and long-term success.
          Let’s build better together.
        </p>

        <div>
          <Link href="/innovations/contactform">
            <button className="mt-2 sm:mt-4 bg-[#0b6a6b] py-2 sm:py-3 px-5 sm:px-8 rounded-lg sm:rounded-xl border border-white text-xs sm:text-base font-medium hover:bg-[#bf202f] hover:border-[#0b6a6b] transition">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
