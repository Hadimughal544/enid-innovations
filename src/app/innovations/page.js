"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slideshow from "./Components/Slideshow";
import { FaRobot } from "react-icons/fa6";
import {
  FaPhoneVolume,
  FaLaptopCode,
  FaCode,
  FaChartLine,
  FaPencilRuler,
} from "react-icons/fa";
import { icons } from "lucide-react";

export default function Innovations() {
  return (
    <div>
      <Slideshow />

      {/* Services Section */}
      <section className=" px-4 sm:px-6 md:px-10 lg:px-30 py-12 sm:py-16 bg-white" id="services">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
            At Enid Innovations, we offer smart, scalable solutions to help your business grow.
            From telesales and marketing to web and app development, digital campaigns, and
            graphic design — we deliver clarity, creativity, and results that matter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <ServiceLink
            href="/innovations/telesales-marketing"
            title="Telesales & Marketing"
            desc="We help businesses connect through strategic telesales campaigns marketing outreach."
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
            desc="Boost your online presence with SEO, social media and performance-driven strategies."
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
          <ServiceLink
            href="/innovations/ai-automation"
            title="AI Automation"
            desc="From backend logic to bots, our automations make your systems smarter and faster."
            Icon={FaRobot}
            image="/assets/services/ai.jpg"
          />
        </div>
      </section>
    </div>
  );
}

function ServiceLink({ href, title, desc, Icon, image }) {
  return (
    <Link href={href}>
      <div className="relative group w-full h-65  sm:h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer">
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Bottom Overlay (half visible by default) */}
        <div
          className="absolute bottom-[-53%] sm:bottom-[-37%] left-0 w-full bg-[#C00021] group-hover:bg-white/93 
    rounded-l-3xl shadow-md p-5 pt-2 flex flex-col items-center justify-center 
    transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:rounded-none"
        >
          <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:flex-col-reverse">
            <h3 className="text-white group-hover:text-black font-semibold text-lg sm:text-xl mb-1 sm:mb-2 text-center">
              {title}
            </h3>
            <div className="w-16 h-16 rounded-full flex items-center justify-center border border-gray-300 mb-3 text-2xl text-[#0b6a6b]">
              <Icon />
            </div>
          </div>

          <p className="text-gray-600 text-sm sm:text-base text-center leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {desc}
          </p>
        </div>

      </div>
    </Link>
  );
}
