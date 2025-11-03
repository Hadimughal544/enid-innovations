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

export default function Telesales() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        <Image
          src="/assets/services/web-bg.jpg"
          alt="Telesales Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Web Development 
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            At Enid Innovations, we build custom web solutions designed around your business goals. From 
            initial planning to final deployment, our team ensures every site delivers clarity, performance, 
            and scalable growth.
          </p>
        </div>
      </div>

      {/* Intro Paragraph */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          At Enid Innovations, we craft visually engaging, high-performing websites built to drive interaction
           and business growth. Our expert designers and developers collaborate to deliver tailored digital
            experiences that meet your goals and exceed expectations.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left Image */}
  <SliderightSection>
  <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
    <Image
      src="/assets/services/web1.jpg"
      alt="Digital Marketing"
      fill
      className="object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>
  </SliderightSection>

  {/* Right Content */}
  <SlideleftSection>
  <div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#0b6a6b] mb-6">
      Our Web Design & Development Solutions
    </h2>

    <ul className="space-y-6 text-gray-700 text-base md:text-lg">
      {/* Custom Website Design*/}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">
          Custom Website Design
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Bespoke Visual Concepts</li>
          <li>Mobile-Responsive Layouts</li>
          <li>Optimized User Experience (UX)</li>
        </ul>
      </li>

      {/* Website Development*/}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">
          Website Development
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Front-End Development</li>
          <li>Back-End Development</li>
          <li>Scalable E-commerce Platforms</li>
        </ul>
      </li>

      {/* Social Media Marketing */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">Content Management Systems (CMS)</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>WordPress Development</li>
          <li>Custom CMS Builds</li>
          <li>Seamless CMS Migration</li>
        </ul>
      </li>

      {/* Content Marketing */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">Maintenance & Support</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Regular Updates & Enhancements</li>
          <li>Speed & Performance Optimization</li>
          <li>Dedicated Technical Assistance</li>
        </ul>
      </li>
    </ul>
  </div>
  </SlideleftSection>
</section>


<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b6a6b] mb-10">
    Why Choose Enid Innovations for Web Design & Development?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">- Experienced Professionals</h3>
      <p className="text-gray-700 leading-relaxed">
         Our team brings deep expertise and creative insight to every project.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">- Tailored Solutions</h3>
      <p className="text-gray-700 leading-relaxed">
       We design and develop with your unique business needs in mind.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">- Innovative Execution </h3>
      <p className="text-gray-700 leading-relaxed">
        We use the latest technologies and trends to deliver future-ready websites.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">- Transparent Communication</h3>
      <p className="text-gray-700 leading-relaxed">
        We keep you informed with clear updates and open dialogue throughout the project.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md  hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">- Collaborative Process </h3>
      <p className="text-gray-700 leading-relaxed">
        Your goals guide our work we stay aligned every step of the way.
      </p>
    </div>
  </div>
</section>

<ContactCTA/>
    </main>
  );
}
