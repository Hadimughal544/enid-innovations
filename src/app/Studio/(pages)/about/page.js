"use client";
import { motion } from "framer-motion";
import Image from 'next/image'
import { FaBullseye } from "react-icons/fa6";
import React from 'react'
import Whychoose from "../../Components/Whychoose";
import { FaHandshake } from "react-icons/fa";
import Techequipment from "../../Components/Techequipment";
import StudioSlideleftSection from "../../Components/Studioslideleft";
import StudioSliderightSection from "../../Components/Studioslideright";

export default function About() {
  return (
    <main>
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
              <Image
                src="/assets/studio/about-us.jpg"
                alt="about"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/55 z-10"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                  About Us
                </h1>
                <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
                  {`From concept to final edit, our team ensures every shoot is clear, creative, and built for
                   impact across fashion, product, and social media content. Whether you're building a brand
                    or launching a campaign, we craft visuals that connect and perform.`}
                </p>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-10">
                <p className="text-justify md:text-lg leading-relaxed mb-2">
                     Welcome to Enid Studio Lahore’s creative space for brands, designers, and entrepreneurs who
                   want to stand out. We specialize in fashion photography, product shoots, fashion videography,
                    and social media content, delivering visuals that are crisp, compelling, and built for impact.
                    Our studio is designed for clarity, comfort, and creative flow. Whether you are launching a product, 
            building a portfolio, or refreshing your online presence, we help you tell your story through high-quality
             visuals that resonate.
          </p>
            
      </div>
     <section className="max-w-7xl mx-auto px-6 pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white text-black">
  {/* Left Image Section */}
  <StudioSliderightSection>
  <div className="relative rounded-xl overflow-hidden shadow-lg md:col-span-1 flex justify-center order-1 md:order-none" >
  <Image
    src="/assets/studio/tech2.jpg"
    alt="Our Mission - Enid Studio"
    width={600}
    height={200}
    className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
  />
</div>
</StudioSliderightSection>

  {/* Right Text Section */}
  <StudioSlideleftSection>
  <div className="md:col-span-1" >
    <div className="flex items-center text-4xl md:text-5xl font-bold mb-8 tracking-tight gap-4">
      <FaBullseye />
      <h2>Our Mission</h2>
    </div>

    <h3 className="text-xl font-semibold mb-6 text-black">
      Clarity. Collaboration. Craft.
    </h3>

    <p className="text-gray-700 text-justify leading-relaxed mb-6">
      {`At Enid Studio, we believe that powerful visuals begin with meaningful
      conversations. Clarity means we take time to understand your goals—
      whether you're launching a product, building a fashion portfolio, or
      creating content for social media. We avoid jargon, ask the right
      questions, and ensure every step is transparent and purposeful.`}
    </p>

    <p className="text-gray-700 text-justify leading-relaxed">
      <span className="font-medium">Collaboration</span> is at the heart of
      everything we do. We don’t just take photos—we co-create with you. From
      mood boards to shoot day, we work side by side to shape visuals that
      reflect your brand’s personality and values. Your input matters, and your
      vision drives the process.
    </p>
  </div>
  </StudioSlideleftSection>
</section>


    <Whychoose/>

    <section className="bg-black max-w-5xl mx-auto my-10 rounded-2xl text-white py-10 px-6 md:px-10 lg:px-20">
      <div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="bg-white text-black p-4 rounded-full shadow-md">
            <FaHandshake className="text-2xl md:text-3xl" />
          </div>
          <h2 className="text-4xl md:text-3xl font-bold tracking-tight">
            Our Commitment
          </h2>
        </div>

        {/* Text */}
        <div className="space-y-3 text-gray-300 text-center  text-md md:text-md">
          <p>
            We’re committed to creating a safe, respectful, and collaborative
            environment for every client who walks through our doors. At Enid
            Studio, your comfort, confidence, and creative vision come first.
          </p>

          <p>
            From the moment you reach out to the final delivery of your images,
            we prioritize clear communication, thoughtful planning, and
            professional execution. We understand that every project is unique,
            and we take the time to listen, adapt, and guide you through each
            step so you always feel supported and in control.
          </p>
        </div>

        {/* Decorative underline */}
        <div className="mt-6 mx-auto w-54 h-[3px] bg-white/60 rounded-full"></div>
      </div>
    </section>
    <Techequipment/>
    </main>
  )
}
