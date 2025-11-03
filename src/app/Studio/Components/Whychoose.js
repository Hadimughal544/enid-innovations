'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import SliderightSection from '@/app/innovations/Components/Slideright';
import SlideleftSection from '@/app/innovations/Components/Slideleft';

export default function Whychoose() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* left Content */}
        <SliderightSection>
        <div>
        <div className="md:col-span-1">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Why Choose Enid Studio?
        </h2>
      
        <ul className="space-y-4  text-black text-base md:text-lg">
          <li className="flex items-center gap-3 bg-gray-50 hover:bg-[#0b6a6b]/10 rounded-lg py-3 px-4 shadow-sm transition-all duration-300">
            <span className="w-3 h-3 bg-black rounded-full flex-shrink-0"></span>
            <span className="font-medium">Professional lighting and setup</span>
          </li>
      
          <li className="flex items-center gap-3 bg-gray-50 hover:bg-[#0b6a6b]/10 rounded-lg py-3 px-4 shadow-sm transition-all duration-300">
            <span className="w-3 h-3 bg-black rounded-full flex-shrink-0"></span>
            <span className="font-medium">Creative direction tailored to your brand</span>
          </li>
      
          <li className="flex items-center gap-3 bg-gray-50 hover:bg-[#0b6a6b]/10 rounded-lg py-3 px-4 shadow-sm transition-all duration-300">
            <span className="w-3 h-3 bg-black rounded-full flex-shrink-0"></span>
            <span className="font-medium">Fast turnaround and high-resolution delivery</span>
          </li>
      
          <li className="flex items-center gap-3 bg-gray-50 hover:bg-[#0b6a6b]/10 rounded-lg py-3 px-4 shadow-sm transition-all duration-300">
            <span className="w-3 h-3 bg-black rounded-full flex-shrink-0"></span>
            <span className="font-medium">Friendly, collaborative environment</span>
          </li>
        </ul>
      </div>
      </div>
      </SliderightSection>
      {/* right Image */}
      <SlideleftSection>
      <div    className="md:col-span-1"  >
      <div className="rounded-xl overflow-hidden shadow-lg md:col-span-1 flex justify-center">
        <Image
          src="/assets/studio/camera2.jpg"
          alt="Telesales Solutions"
          width={600}
          height={200}
          className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </div>
      </div>
      </SlideleftSection>
      </section>
  )
}
