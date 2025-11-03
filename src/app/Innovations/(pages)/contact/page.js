"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactCTA from "../../Components/Contact";
import SlideleftSection from "../../Components/Slideleft";
import SliderightSection from "../../Components/Slideright";


export default function Page() {
  return (
    <section>
      <main>
        {/* Hero Section */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
                <Image
                  src="/assets/contactus1.jpg"
                  alt="about"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/55 z-10"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                    Contact Us
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
                   {`Let’s bring your ideas to life. At Enid Innovations, we craft digital solutions that align with 
                   your goals from first concept to final launch. Whether it’s web, app, marketing, or design, our
                    team is here to build clear, functional, and impactful results. Reach out we’re ready when you are.`}
                  </p>
                </div>
              </div>

        {/* Content + Form Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Text */}
          <SliderightSection>
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Connect With Us
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
             Connect with our team today to schedule a free consultation and take the first step toward a digital
              solution that reflects your ambition and values
            </p>
            <p className="text-sm sm:text-base text-gray-700 text-justify leading-relaxed">
              {`At Enid Innovations, our expert developers, marketers, and designers are here to guide you through
               every phase from initial concept to final launch. Whether you're building a standout online presence, 
               launching a custom app, or scaling your telesales strategy, we’re ready to turn your ideas into lasting
                impact with clarity, care, and performance at the core.`}
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              Let’s shape something extraordinary your journey starts here.
            </p>

            <div className=" space-y-6">
               <div className="flex items-start">
              <div className="p-4 bg-[#e6f6f6] rounded-xl text-[#0b6a6b]">
                <MapPin size={24} />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Our Office</h4>
                <Link
                  href="https://maps.app.goo.gl/eL42e5STEWNy58QQ9"
                  target="_blank"
                >
                  <p className="text-sm sm:text-base">
                    307-B2, Johar Town, Lahore, 54782
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-4 bg-[#fde9ec] rounded-xl text-[#C00021]">
                <Phone size={24} />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <Link href="https://wa.me/924232332713" target="_blank">
                  <p className="text-sm sm:text-base">(+92) 423 2332713</p>
                </Link>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-4 bg-[#e6f6f6] rounded-xl text-[#0b6a6b]">
                <Mail size={24} />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Email</h4>
                <Link href="mailto:info@enid.pk">
                  <p className="text-sm sm:text-base">
                    info@enid.pk
                  </p>
                </Link>
              </div>
            </div>

            </div>
          </div>
          </SliderightSection>
          {/* Right Call-to-Action Box */}
          <SlideleftSection>
          <section className="w-full h-[550px] px-8 rounded-2xl ">
        <iframe
          title="Enid Innovations Location"
          
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2304602162667!2d74.2983632!3d31.462846000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901ba774dd033%3A0x8176417214b5fe10!2sEnid%20Studio!5e0!3m2!1sen!2s!4v1760451008938!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      </SlideleftSection>
        </div>

        <div>
          <ContactCTA/>
        </div>
      </main>
    </section>
  );
}
