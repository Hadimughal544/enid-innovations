"use client";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { motion } from "framer-motion";
import React from "react";

export default function Ourprocess() {
  // helper function for reusable motion block
  const renderCard = (icon, title, description) => (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-1 text-center text-black p-6 sm:p-8 nav-link2 rounded-2xl shadow-lg transform duration-300 hover:-translate-y-2 bg-white"
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center mb-4 sm:mb-6">
          <div className="bg-white text-[#0b6a6b] p-4 sm:p-5 rounded-full shadow-md">
            {icon}
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
        <p className="text-xs sm:text-sm md:text-base text-center leading-relaxed max-w-xs sm:max-w-sm mx-auto">
          {description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="flex flex-col items-center pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-20 mt-10">
      {/* Heading */}
      <div className="text-center max-w-3xl mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          Core Services. Real Impact.
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          We deliver smart, scalable solutions that drive business growth and efficiency.
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-8 max-w-7xl w-full">
        {renderCard(
          <FaPhoneVolume size={40} />,
          "Telesales & Marketing",
          "We help businesses connect, convert, and grow through strategic telesales and bilingual marketing campaigns. Our team delivers clear, persuasive messaging that builds trust and drives results locally and globally."
        )}
        {renderCard(
          <FaLaptopCode size={40} />,
          "Agile IT Services",
          "From web development to system integration, our IT solutions adapt to your needs. We simplify tech complexity so you can focus on growth with reliable support every step of the way."
        )}
        {renderCard(
          <FaBoltLightning size={40} />,
          "Efficiency & Innovation",
          "At Enid Innovations, we believe in smarter workflows. Our automation tools and data-driven insights help you streamline operations, boost performance, and stay ahead in a fast-moving world."
        )}
      </div>
    </section>
  );
}
