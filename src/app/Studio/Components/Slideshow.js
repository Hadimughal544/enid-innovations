"use client";
import SlideleftSection from "@/app/innovations/Components/Slideleft";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const images = [
  "/assets/studioslideshow/slide1.jpg",
  "/assets/studioslideshow/slide2.jpg",
];

export default function StudioSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  h-[400px] md:h-[450px] lg:h-[600px] overflow-hidden">
      {/* Background slideshow */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index}`}
          fill
          priority={index === currentImage}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100 animate-zoom" : "opacity-0"
          }`}
        />
      ))}

      {/* Black transparent overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white gap-6 sm:gap-8 md:gap-10 z-20 px-4 sm:px-10 md:px-20 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          Ready to Elevate Your Brand?
        </h1>

        {/* Decorative line */}
        <div className="border-t-2 border-white w-24 sm:w-32 md:w-40"></div>

        <p className="text-sm sm:text-base md:text-lg text-center leading-relaxed max-w-3xl">
          We specialize in high-impact photography that elevates your brand and
          showcases your products with clarity, style, and purpose. Whether you
          are launching a new line or refreshing your visual identity, our shoots
          are designed to make your business stand out.
        </p>

        <Link href="/studio/contactform">
          <button className="bg-white text-black py-3 px-6 sm:py-4 sm:px-8 rounded-2xl border-2 border-black hover:bg-black hover:border-white hover:text-white transition-all duration-300 cursor-pointer text-sm sm:text-base font-medium">
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
