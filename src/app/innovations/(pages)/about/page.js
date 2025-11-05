"use client";
import Image from "next/image";
import React from "react";
import { Lightbulb, Star, Headphones } from "lucide-react";
import SliderightSection from "../../Components/Slideright";
import SlideleftSection from "../../Components/Slideleft";

export default function About() {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px]">
        <Image
          src="/assets/about.jpg"
          alt="about"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 z-20">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-5">
            About Us
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            At Enid Innovations, we deliver end-to-end digital solutions tailored
            to your unique goals. From concept to launch, our team ensures every
            project is clear, functional, and built for impact across web, app,
            marketing, and design.
          </p>
        </div>
      </div>

      {/* Intro Paragraph */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16">
        <p className="text-center text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          At Enid Innovations, we’re more than a service provider — we’re a
          forward-thinking collective built on creativity, collaboration, and
          clarity. Our journey began with a shared goal: to create a space
          where ideas thrive, connections grow, and businesses succeed. We bring
          together diverse talent and inclusive thinking to make a meaningful
          impact across the digital landscape.
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <SliderightSection>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#0b6a6b]">
                Our Mission
              </h2>
              <p className="text-justify text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                We deliver high-impact solutions across telesales marketing, web
                and app development, digital marketing, and graphic design. Our
                mission is to help businesses and individuals grow through smart,
                scalable services that simplify operations, boost visibility, and
                build lasting trust.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#0b6a6b]">
                Our Vision
              </h2>
              <p className="text-justify text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                Enid Innovations envisions a connected, creative future where
                technology and communication work hand in hand to elevate
                businesses and communities. We strive to be a trusted name in
                digital excellence, known for our clarity, inclusivity, and
                results-driven approach.
              </p>
            </div>
          </div>
        </SliderightSection>

        <SlideleftSection>
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/mission.jpg"
              alt="Mission and Vision"
              fill
              className="object-cover"
            />
          </div>
        </SlideleftSection>
      </section>

      {/* Why Enid Innovations */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b6a6b] mb-3">
              Why Enid Innovations
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              We deliver consistent excellence and unmatched quality across every
              project, setting the standard in digital innovation.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-8">
            {/* Smart Strategy */}
            <SliderightSection>
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-md hover:shadow-lg p-5 sm:p-8 border-l-4 border-[#0b6a6b] transition-transform duration-200 hover:-translate-y-1">
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <div className="p-4 rounded-full bg-[#e6f6f6] flex items-center justify-center">
                    <Lightbulb size={36} className="text-[#0b6a6b]" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
                    Smart Strategy
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                    Custom-built strategies designed to accelerate growth, boost
                    engagement, and help you hit your goals with precision.
                  </p>
                </div>
              </div>
            </SliderightSection>

            {/* Premium Services */}
            <SlideleftSection>
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-md hover:shadow-lg p-5 sm:p-8 border-l-4 border-[#C00021] transition-transform duration-200 hover:-translate-y-1">
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <div className="p-4 rounded-full bg-[#fde9ec] flex items-center justify-center">
                    <Star size={36} className="text-[#C00021]" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
                    Premium Services
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                    High-impact solutions in telesales, IT, marketing, and design—
                    crafted for results that speak for themselves.
                  </p>
                </div>
              </div>
            </SlideleftSection>

            {/* Reliable Support */}
            <SliderightSection>
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-md hover:shadow-lg p-5 sm:p-8 border-l-4 border-[#0b6a6b] transition-transform duration-200 hover:-translate-y-1">
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <div className="p-4 rounded-full bg-[#e6f6f6] flex items-center justify-center">
                    <Headphones size={36} className="text-[#0b6a6b]" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
                    Reliable Support
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                    Our friendly support team is always ready with fast, helpful
                    assistance—whenever you need it.
                  </p>
                </div>
              </div>
            </SliderightSection>
          </div>
        </div>
      </section>
    </main>
  );
}
