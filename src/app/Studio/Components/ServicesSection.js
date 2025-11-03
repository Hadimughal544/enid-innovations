"use client";
import SlideUpSection from "@/app/innovations/Components/Slideup";
import React from "react";
import {
  FaCameraRetro,
  FaVideo,
  FaBoxOpen,
  FaShareAlt,
  FaLightbulb,
  FaChartLine,
  FaPenFancy,
  FaBullhorn,
} from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 bg-white" id="services">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-5">
          Our Services
        </h2>
        <div className="w-20 h-[3px] bg-black mx-auto mb-10"></div>

        <SlideUpSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Service Card */}
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-xl nav-link2 transition-shadow rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center"
              >
                <div className="text-4xl text-white mb-4 p-5 bg-black rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-black text-sm sm:text-base leading-relaxed text-left sm:text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </SlideUpSection>
      </div>
    </section>
  );
}

// Service data array
const services = [
  {
    icon: <FaChartLine />,
    title: "Business Development",
    description:
      "We help brands grow through strategy, partnerships, and smart positioning. From ideation to execution, we focus on sustainable business expansion.",
  },
  {
    icon: <FaVideo />,
    title: "DVC / TVC Ads",
    description:
      "High-impact video campaigns that tell your brand story and captivate audiences across digital and broadcast platforms.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative Consultancy",
    description:
      "We guide brands to think differently. From creative direction to campaign ideas, we help you craft strategies that connect and inspire.",
  },
  {
    icon: <FaBullhorn />,
    title: "Unique, Digital & Traditional Marketing",
    description:
      "From digital ads to traditional campaigns, we blend creativity and data to deliver marketing that makes an impact.",
  },
  {
    icon: <FaVideo />,
    title: "Sales-Based Content (Video Ads)",
    description:
      "We produce performance-driven video ads designed to convert viewers into customers with compelling visuals and storytelling.",
  },
  {
    icon: <FaShareAlt />,
    title: "Social Media Content (Video Ads)",
    description:
      "Eye-catching videos tailored for social platforms that keep your brand top of mind and drive real engagement.",
  },
  {
    icon: <FaCameraRetro />,
    title: "Photography & Videography",
    description:
      "From commercial shoots to brand visuals, we capture and craft content that reflects your brand’s story with precision.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Media Management",
    description:
      "We manage your brand’s online presence across all digital platforms ensuring consistency, creativity, and measurable growth.",
  },
  {
    icon: <FaPenFancy />,
    title: "Creative Writing, Concepts & Copy",
    description:
      "Words that work. We craft brand stories, ad copies, and creative concepts that resonate and convert.",
  },
];
