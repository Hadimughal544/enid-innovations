import Image from "next/image";
import React from "react";
import SlideUpSection from "../../Components/Slideleft";
import { Lightbulb, Star, Headphones } from "lucide-react";
import SliderightSection from "../../Components/Slideright";
import SlideleftSection from "../../Components/Slideleft";

export default function About() {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
        <Image
          src="/assets/about.jpg"
          alt="about"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            About Us
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
            At Enid Innovations, we deliver end-to-end digital solutions tailored
            to your unique goals. From concept to launch, our team ensures every
            project is clear, functional, and built for impact across web, app,
            marketing, and design.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-center md:text-lg leading-relaxed mb-8">
            At Enid Innovations, we’re more than a service provider we’re a
            forward-thinking collective built on creativity, collaboration, and
            clarity. Our journey began with a shared goal: to create a space
            where ideas thrive, connections grow, and businesses succeed. We
            bring together diverse talent and inclusive thinking to make a
            meaningful impact across the digital landscape.
          </p>
      </div>

      {/* About Intro + Mission & Vision Section */}
      <section className="max-w-6xl mx-auto px-6  grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <SliderightSection>
        <div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-[#0b6a6b]">
                Our Mission
              </h2>
              <p className="text-justify md:text-lg leading-relaxed">
                We deliver high-impact solutions across telesales marketing, web
                and app development, digital marketing, and graphic design. Our
                mission is to help businesses and individuals grow through smart,
                scalable services that simplify operations, boost visibility, and
                build lasting trust.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-[#0b6a6b]">
                Our Vision
              </h2>
              <p className="text-justify md:text-lg leading-relaxed">
                Enid Innovations envisions a connected, creative future where
                technology and communication work hand in hand to elevate
                businesses and communities. We strive to be a trusted name in
                digital excellence, known for our clarity, inclusivity, and
                results-driven approach. Guided by shared values, we aim to leave
                a lasting, positive mark on every project, partnership, and
                platform we touch.
              </p>
            </div>
          </div>
        </div>
        </SliderightSection>
        {/* Single Image */}
        <SlideleftSection>
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/mission.jpg"
            alt="Mission and Vision"
            fill
            className="object-cover"
          />
        </div>
        </SlideleftSection>
      </section>

    <section className=" py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0b6a6b] mb-4">
            Why Enid Innovations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We deliver consistent excellence and unmatched quality across every
            project setting the standard in digital innovation.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-8">
          {/* Smart Strategy */}
          <SliderightSection>
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-md hover:shadow-lg p-6 sm:p-10 border-l-4 border-[#0b6a6b] transform duration-100 hover:translate-y-2">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <div className="p-4 rounded-full bg-[#e6f6f6] flex items-center justify-center">
                <Lightbulb size={40} className="text-[#0b6a6b]" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Smart Strategy
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                Custom-built strategies designed to accelerate growth, boost
                engagement, and help you hit your goals with precision.
              </p>
            </div>
          </div>
          </SliderightSection>

          <SlideleftSection>
          {/* Premium Services */}
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-md hover:shadow-lg  p-6 sm:p-10 border-l-4 border-[#C00021] transform duration-100 hover:translate-y-2">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <div className="p-4 rounded-full bg-[#fde9ec] flex items-center justify-center">
                <Star size={40} className="text-[#C00021]" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Premium Services
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                High-impact solutions in telesales, IT, marketing, and design—
                crafted for results that speak for themselves.
              </p>
            </div>
          </div>
          </SlideleftSection>

          <SliderightSection>
          {/* Reliable Support */}
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-md hover:shadow-lg  p-6 sm:p-10 border-l-4 border-[#0b6a6b] transform duration-100 hover:translate-y-2">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <div className="p-4 rounded-full bg-[#e6f6f6] flex items-center justify-center">
                <Headphones size={40} className="text-[#0b6a6b]" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Reliable Support
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
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
