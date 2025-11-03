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
          src="/assets/services/digital-bg.jpg"
          alt="Telesales Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
             Digital Marketing 
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            At Enid Innovations, we craft full-spectrum digital marketing strategies aligned with your
             business goals. From campaign planning to performance tracking, our team ensures every initiative 
             delivers clarity, engagement, and measurable growth.
          </p>
        </div>
      </div>

      {/* Intro Paragraph */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          At Enid Innovations, we offer end-to-end digital marketing solutions designed to amplify your brand’s 
          online presence and deliver measurable growth. Our expert team blends creative storytelling with data-driven 
          strategy to build campaigns that connect, convert, and scale.
        </p>
      </section>

   <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left Image */}
  <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
    <Image
      src="/assets/services/digital2.jpg"
      alt="Digital Marketing"
      fill
      className="object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Right Content */}
  <div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#0b6a6b] mb-6">
      Our Digital Marketing Expertise
    </h2>

    <ul className="space-y-6 text-gray-700 text-base md:text-lg">
      {/* SEO */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">
          Search Engine Optimization (SEO)
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>On-Page Optimization</li>
          <li>Off-Page Strategy</li>
          <li>Technical SEO Enhancements</li>
        </ul>
      </li>

      {/* PPC */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">
          Pay-Per-Click (PPC) Advertising
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Google Ads Management</li>
          <li>Social Media Ad Campaigns</li>
          <li>Display Ad Targeting</li>
        </ul>
      </li>

      {/* Social Media Marketing */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">Social Media Marketing</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Content Creation & Scheduling</li>
          <li>Community Engagement</li>
          <li>Influencer Collaborations</li>
        </ul>
      </li>

      {/* Content Marketing */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">Content Marketing</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Blog Strategy & Writing</li>
          <li>Video Production</li>
          <li>Email Campaigns & Automation</li>
        </ul>
      </li>
    </ul>
  </div>
</section>


<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b6a6b] mb-10">
    Why Choose Enid Innovations for Digital Marketing?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
      <p className="text-gray-700 leading-relaxed">
        Our digital marketers bring deep industry experience and creative insight to every campaign.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Tailored Strategies</h3>
      <p className="text-gray-700 leading-relaxed">
        Every plan is customized to meet your business goals and audience needs.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance-Driven</h3>
      <p className="text-gray-700 leading-relaxed">
       We use advanced analytics to monitor, refine, and maximize campaign results.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">- Forward-Thinking</h3>
      <p className="text-gray-700 leading-relaxed">
        Our team stays ahead of trends to deliver innovative, high-impact solutions.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Clear Reporting</h3>
      <p className="text-gray-700 leading-relaxed">
         You’ll receive transparent, easy-to-understand reports that track progress and ROI.
      </p>
    </div>
  </div>
</section>

<ContactCTA/>
    </main>
  );
}
