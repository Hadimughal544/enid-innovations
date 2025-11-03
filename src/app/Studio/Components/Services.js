'use client'
import React from "react";
import { motion } from "framer-motion";
import {
  FaBusinessTime,
  FaLightbulb,
  FaRegFileAlt,
  FaCamera,
  FaVideo,
  FaBullhorn,
  FaShareAlt,
  FaNetworkWired,
} from "react-icons/fa";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 text-center mt-10">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
         <div className="flex justify-center items-center h-10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="h-1 bg-black rounded-full w-full max-w-50"
            />
          </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Business Development */}
        {service(<FaBusinessTime />, "Business Development")}
        {service(<FaLightbulb />, "Creative Consultancy")}
        {service(<FaRegFileAlt />, "Creative Writing, Concepts & Copy")}
        {service(<FaCamera />, "Photography & Videography")}

        {/* Marketing */}
        {service(<FaVideo />, "DVC/TVC Ads")}
        {service(<FaBullhorn />, "Sales-based Content (video ads)")}
        {service(<FaShareAlt />, "Social Media Content (video ads)")}
        {service(<FaNetworkWired />, "Unique, Digital & Traditional Marketing")}
        {service(<FaBullhorn />, "Digital Media Management")}
      </div>
    </div>
  );

  function service(icon, title) {
    return (
      <div className="py-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow nav-link2 flex flex-col items-center text-center">
        <div className="text-6xl text-black mb-3">{icon}</div>
        <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
      </div>
    );
  }
}
