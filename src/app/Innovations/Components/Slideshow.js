"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SlideleftSection from "./Slideleft";

const images = ["/assets/slideshow/slide1.jpg", "/assets/slideshow/slide2.jpg"];

export default function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] overflow-hidden">
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text Overlay */}
      <SlideleftSection>
        <div className="absolute inset-0 flex flex-col justify-center text-white z-20 px-4 sm:px-10 md:px-20 max-w-3xl space-y-4 md:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Scale Your Business with Enid Innovations
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-justify max-w-2xl">
            Enid Innovations is your trusted partner in digital transformation. From customer engagement
            to backend systems, we craft tailored BPO and IT strategies that fuel efficiency and long-term
            success. Let’s build better together.
          </p>
          <div>
            <Link href="/innovations/contactform">
              <button className="mt-2 sm:mt-4 bg-[#0b6a6b] py-2 sm:py-3 px-5 sm:px-8 rounded-xl sm:rounded-2xl border border-white text-sm sm:text-base font-medium hover:bg-[#bf202f] hover:border-[#0b6a6b] hover:text-white transition">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </SlideleftSection>
    </div>
  );
}
