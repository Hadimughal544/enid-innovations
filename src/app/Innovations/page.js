"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slideshow from "./Components/Slideshow";
import { FaPhoneVolume, FaLaptopCode, FaCode, FaChartLine, FaPencilRuler } from "react-icons/fa";

export default function Innovations() {
  return (
    <div>
      <Slideshow />

      {/* Services Section */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10" id="services">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-base sm:text-lg text-center text-gray-900 mb-8 max-w-4xl mx-auto px-2 sm:px-6">
          At Enid Innovations, we offer smart, scalable solutions to help your business grow.
          From telesales and marketing to web and app development, digital campaigns, and graphic design,
          we deliver clarity, creativity, and results that matter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceLink
            href="/innovations/telesales-marketing"
            title="Telesales & Marketing"
            desc="We help businesses connect and convert through strategic telesales campaigns and bilingual marketing outreach."
            Icon={FaPhoneVolume}
            image="/assets/services/telemarketing.jpg"
          />
          <ServiceLink
            href="/innovations/web-development"
            title="Web Design & Development"
            desc="We design and build responsive, secure, and scalable web solutions tailored to your goals."
            Icon={FaLaptopCode}
            image="/assets/services/web.jpg"
          />
          <ServiceLink
            href="/innovations/app-development"
            title="App Development"
            desc="We create mobile apps that are fast, intuitive, and built to scale for Android, iOS, or both."
            Icon={FaCode}
            image="/assets/services/app.jpg"
          />
          <ServiceLink
            href="/innovations/digital-marketing"
            title="Digital Marketing"
            desc="Boost your online presence with SEO, social media campaigns, and performance-driven strategies."
            Icon={FaChartLine}
            image="/assets/services/digital.jpg"
          />
          <ServiceLink
            href="/innovations/graphic-designing"
            title="Graphic Designing"
            desc="From logos and banners to social media creatives, our visuals build your brand identity."
            Icon={FaPencilRuler}
            image="/assets/services/graphic.jpg"
          />
        </div>
      </div>
    </div>
  );
}

function ServiceLink({ href, title, desc, Icon, image }) {
  return (
    <Link href={href}>
      <div className="relative group w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-md shadow-lg cursor-pointer">
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Bottom Strip */}
        <div className="absolute bg-[#bf202f]/85 w-full h-10 bottom-10 left-0 z-10 group-hover:opacity-0 transition-opacity"></div>

        {/* Title Overlay */}
        <div className="absolute bottom-12 left-4 z-20 transition duration-500 group-hover:opacity-0">
          <h3 className="text-white text-lg font-semibold drop-shadow-md">{title}</h3>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center text-center justify-center p-4 sm:p-6">
          <div className="bg-orange-100 text-[#0b6a6b] p-3 sm:p-4 rounded-full mb-4 sm:mb-6 group-hover:bg-[#0b6a6b] group-hover:text-white transition-colors">
            <Icon size={28} className="sm:size-36" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{title}</h3>
          <p className="text-white text-sm sm:text-base">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
