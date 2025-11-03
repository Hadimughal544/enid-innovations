import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import ContactCTA from "../../Components/Contact";
import SliderightSection from "../../Components/Slideright";
import SlideleftSection from "../../Components/Slideleft";
import SlideUpSection from "../../Components/Slideup";

export default function Telesales() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        <Image
          src="/assets/services/telesales.jpg"
          alt="Telesales Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Telesales Solutions
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            At Enid Innovations, we deliver end-to-end digital solutions tailored
            to your business goals. From concept to execution, our team ensures
            every project drives clarity, function, and measurable growth.
          </p>
        </div>
      </div>

      {/* Intro Paragraph */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          At Enid Innovations, we specialize in high-performance telesales
          marketing designed to boost conversions, strengthen customer
          engagement, and accelerate growth. Our experienced team delivers
          tailored strategies that deliver real results across industries and
          communication platforms.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left Image */}
  <SliderightSection>
  <div className="rounded-xl overflow-hidden shadow-lg md:col-span-1 flex justify-center">
  <Image
    src="/assets/services/telesales.jpg"
    alt="Telesales Solutions"
    width={600}
    height={400}
    className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
  />
</div>
</SliderightSection>

  {/* Right Content */}
  <SlideleftSection>
  <div className="md:col-span-1">
  <h2 className="text-3xl md:text-4xl font-bold text-[#0b6a6b] mb-6">
    Our Telesales Solutions
  </h2>

  <ul className="space-y-4  text-gray-700 text-base md:text-lg">
    <li className="flex items-center gap-3 bg-gray-50 hover:bg-[#0b6a6b]/10 rounded-lg py-3 px-4 shadow-sm transition-all duration-300">
      <span className="w-3 h-3 bg-[#0b6a6b] rounded-full flex-shrink-0"></span>
      <span className="font-medium">Outbound Campaigns</span>
    </li>

    <li className="flex items-center gap-3 bg-gray-50 hover:bg-[#0b6a6b]/10 rounded-lg py-3 px-4 shadow-sm transition-all duration-300">
      <span className="w-3 h-3 bg-[#0b6a6b] rounded-full flex-shrink-0"></span>
      <span className="font-medium">Inbound Response Handling</span>
    </li>

    <li className="flex items-center gap-3 bg-gray-50 hover:bg-[#0b6a6b]/10 rounded-lg py-3 px-4 shadow-sm transition-all duration-300">
      <span className="w-3 h-3 bg-[#0b6a6b] rounded-full flex-shrink-0"></span>
      <span className="font-medium">B2B Lead Generation</span>
    </li>

    <li className="flex items-center gap-3 bg-gray-50 hover:bg-[#0b6a6b]/10 rounded-lg py-3 px-4 shadow-sm transition-all duration-300">
      <span className="w-3 h-3 bg-[#0b6a6b] rounded-full flex-shrink-0"></span>
      <span className="font-medium">B2C Customer Engagement</span>
    </li>
  </ul>
</div>
</SlideleftSection>


</section>

<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b6a6b] mb-10">
    Why Choose Enid Innovations for Telesales Marketing?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <SliderightSection>
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Skilled Team</h3>
      <p className="text-gray-700 leading-relaxed">
        Our telesales professionals are trained across sectors to deliver
        impactful conversations and measurable results.
      </p>
    </div>
    </SliderightSection>

    
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Tailored Strategies</h3>
      <p className="text-gray-700 leading-relaxed">
        Every campaign is customized to match your business objectives and
        audience for maximum engagement and conversions.
      </p>
    </div>
    

    <SlideleftSection>
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology</h3>
      <p className="text-gray-700 leading-relaxed">
        We use advanced tools and software to optimize performance, accuracy,
        and reach.
      </p>
    </div>
    </SlideleftSection>

    <SlideUpSection>
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Reporting</h3>
      <p className="text-gray-700 leading-relaxed">
        Get detailed analytics and insights to track campaign success and ROI.
      </p>
    </div>
    </SlideUpSection>

    
    <SlideUpSection>
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality-Driven Approach</h3>
      <p className="text-gray-700 leading-relaxed">
        Every call is backed by strict quality checks to ensure professionalism,
        clarity, and compliance.
      </p>
    </div>
    </SlideUpSection>
  </div>
</section>

<ContactCTA/>
    </main>
  );
}
