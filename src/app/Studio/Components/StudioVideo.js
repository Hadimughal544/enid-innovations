"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StudioVideoBackground() {
  return (
    <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/studio/video1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4 sm:px-8 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-3 sm:mb-5">
          Ready to Elevate Your Brand?
        </h1>

        {/* Decorative line */}
        <div className="h-[3px] bg-white w-20 sm:w-28 md:w-36 mb-5 sm:mb-8"></div>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mb-6 sm:mb-8 px-2">
          We specialize in high-impact photography that elevates your brand and
          showcases your products with clarity, style, and purpose. Whether you
          are launching a new line or refreshing your visual identity, our shoots
          are designed to make your business stand out.
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
