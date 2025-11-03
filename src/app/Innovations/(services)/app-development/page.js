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
          src="/assets/services/app-bg.jpg"
          alt="Telesales Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            App Development 
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            At Enid Innovations, we create custom mobile and web applications built around your business
             objectives. From initial strategy to final launch, our team ensures every app delivers intuitive
              design, seamless performance, and scalable growth.
          </p>
        </div>
      </div>

      {/* Intro Paragraph */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          At Enid Innovations, we build intuitive, high-performing mobile and web applications designed to drive
           engagement and business growth. Our expert developers and UX designers collaborate to deliver custom-built
            digital experiences that align with your goals and exceed expectations.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left Image */}
  <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
    <Image
      src="/assets/services/app2.jpg"
      alt="Digital Marketing"
      fill
      className="object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Right Content */}
  <div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#0b6a6b] mb-6">
      Our App Development Solutions
    </h2>

    <ul className="space-y-6 text-gray-700 text-base md:text-lg">
      {/* Custom Website Design*/}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">
          Custom App Design
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Bespoke UI Concepts</li>
          <li>Mobile-Responsive Interfaces</li>
          <li> Optimized User Experience (UX)</li>
        </ul>
      </li>

      {/* Website Development*/}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">
          App Development
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Front-End App Engineering</li>
          <li>Back-End Architecture</li>
          <li>Scalable E-commerce Integration</li>
        </ul>
      </li>

      {/* Social Media Marketing */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">Content & Data Management</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>API Integration</li>
          <li>Custom CMS for Apps</li>
          <li>Seamless Data Migration</li>
        </ul>
      </li>

      {/* Content Marketing */}
      <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
        <h3 className="font-semibold text-[#0b6a6b] mb-3">Maintenance & Support</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Regular Feature Updates</li>
          <li>Speed & Performance Tuning</li>
          <li>Dedicated Technical Assistance</li>
        </ul>
      </li>
    </ul>
  </div>
</section>


<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b6a6b] mb-10">
     Why Choose Enid Innovations for App Development?
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

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
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
