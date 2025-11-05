import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import ContactCTA from "../../Components/Contact";

export default function Telesales() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        <Image
          src="/assets/services/graphic-bg.jpg"
          alt="Telesales Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
             Graphic Designing
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            At Enid Innovations, we create impactful graphic design solutions that reflect your brand and business 
            goals. From concept development to final delivery, our team ensures every visual communicates with clarity,
             engages your audience, and drives measurable results.
          </p>
        </div>
      </div>

      {/* Intro Paragraph */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
         At Enid Innovations, we deliver end-to-end graphic design solutions that align with your brand
             identity and business goals. From concept to final delivery, our team ensures every design 
             communicates clearly, engages your audience, and drives measurable impact.
        </p>
      </section>

   <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left Image */}
  <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
    <Image
      src="/assets/services/graphic.jpg"
      alt="Digital Marketing"
      fill
      className="object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Right Content */}
  <div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#0b6a6b] mb-6">
      Our Graphic Design Expertise
    </h2>

    <ul className="space-y-6 text-gray-700 text-base md:text-lg">
      {/* SEO */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">
          Brand Identity Design
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Logo Design & Brand Marks</li>
          <li>Typography & Color Systems</li>
          <li>Brand Guidelines & Visual Language
</li>
        </ul>
      </li>

      {/* PPC */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">
          Marketing & Advertising Design
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Social Media Creatives</li>
          <li>Digital Ads & Banners</li>
          <li>Print Collateral (Flyers, Brochures, Posters)</li>
        </ul>
      </li>

      {/* Social Media Marketing */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">Web & UI Design</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li> Website Layouts & Wireframes</li>
          <li>Landing Page Design</li>
          <li>App Interface Design</li>
        </ul>
      </li>

      {/* Content Marketing */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">Content & Presentation Design</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li> Infographics & Data Visuals</li>
          <li>Pitch Decks & Business Presentations</li>
          <li>Email & Newsletter Templates</li>
        </ul>
      </li>
    </ul>
  </div>
</section>


<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b6a6b] mb-10">
     Why Choose Enid Innovations for Graphic Design?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Expertise</h3>
      <p className="text-gray-700 leading-relaxed">
        Our designers bring a sharp eye for detail and years of experience across industries and formats.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3"> Tailored Visuals</h3>
      <p className="text-gray-700 leading-relaxed">
        Every design is crafted to reflect your brand’s voice, values, and audience expectations.
        </p>
    </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Design Thinking</h3>
      <p className="text-gray-700 leading-relaxed">
      We combine aesthetics with purpose ensuring every visual element supports your business goals.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Trend-Aware & Future-Ready</h3>
      <p className="text-gray-700 leading-relaxed">
        We stay ahead of design trends and tools to deliver fresh, modern, and effective visuals.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Clear Communication</h3>
      <p className="text-gray-700 leading-relaxed">
         We keep you involved throughout the process with transparent updates and collaborative feedback loops.
      </p>
    </div>
  </div>
</section>

<ContactCTA/>
    </main>
  );
}
