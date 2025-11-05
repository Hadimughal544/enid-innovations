"use client";
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
import StudioSlideUpSection from "./Studioslideup";

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
          Our Services
        </h2>
        <div className="w-20 h-[3px] bg-black mx-auto mb-10 sm:mb-14"></div>

        <StudioSlideUpSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-xl transition-all rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center border border-gray-100 hover:border-gray-200"
              >
                <div className="text-4xl sm:text-5xl text-white mb-5 p-5 sm:p-6 bg-black rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </StudioSlideUpSection>
      </div>
    </section>
  );
}

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
