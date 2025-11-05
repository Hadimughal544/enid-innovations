"use client";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0b6a6b] text-white border-t border-white">
    <div className="w-full py-6 pt-10 space-y-8">

        
        {/* ===== Section 1 ===== */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-40  items-start ml-10 px-20">
          
          {/* Column 1 - Logo */}
           <div className="flex flex-col items-start justify-center md:items-start">
            <Image
              src="/assets/LogoEnid-white.png"
              alt="Enid Innovations Logo"
              width={140}
              height={70}
              className="mb-4"
            />
            <div>
            <p className="text-white">
              We deliver strategic telesales marketing and IT services that simplify operations, scale support, and build lasting trust through clarity and efficiency.
            </p>
          </div>
          </div>
          {/* Column 2 - Get in Touch */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <MdOutlineContactMail className="text-white text-4xl" />
              <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
            </div>
            <p className="text-white mb-4">
              Have questions? Reach out anytime.
            </p>
            <div className="flex gap-4 mt-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://wattsapp.com"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaWhatsapp />
            </Link>
          </div>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="font-semibold text-2xl text-white mb-2">Contact Info</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-white" />
                <Link href="tel:04232332713" target="blank">
                0423-2332713
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-white" />
                <Link href="mailto:info@enid.pk" target="blank">
                info@enid.pk
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-white" />
                <Link
                  href="https://maps.app.goo.gl/PFdFsS9WZpDPqmXZ7"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="hover-underline"
                  >
                   <p>307-B2, Johar Town, Lahore, 54782</p>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <div className="border-b border-white "></div>

        {/* ===== Section 2 ===== */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-40  ml-10 px-20">
          
          {/* Column 1 */}
          


          {/* Column 2 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/" className=" hover-underline">Home</Link></li>
              <li><Link href="/studio" className="hover-underline">Enid Studio</Link></li>
              <li><Link href="/innovations#services" className="hover-underline">Services</Link></li>
              <li><Link href="/innovations/about" className="hover-underline">About Us</Link></li>
              <li><Link href="/innovations/contact" className="hover-underline">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/innovations/telesales-marketing" className="hover-underline">Telesales Marketing</Link></li>
              <li><Link href="/innovations/web-development" className="hover-underline">Web Design & Development</Link></li>
              <li><Link href="/innovations/app-development" className="hover-underline">App Development</Link></li>
              <li><Link href="/innovations/digital-marketing" className="hover-underline">Digital Marketing</Link></li>
              <li><Link href="/innovations/graphic-designing" className="hover-underline">Graphic Designing</Link></li>
            </ul>
          </div>

        <div className="w-full max-w-md">
  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
    Stay Updated
  </h3>
  <p className="text-sm sm:text-base text-gray-200 mb-4">
    Get the latest updates and insights from Enid Innovations.
  </p>

  <form className="flex flex-col sm:flex-row gap-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="p-2 sm:p-3 bg-white text-gray-800 rounded-xl focus:outline-none flex-1 w-full"
    />
    <button
      type="submit"
      className="bg-white text-black hover:bg-[#bf202f] hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition w-full sm:w-auto"
    >
      Subscribe
    </button>
  </form>
</div>

        </section>
         <div className="border-b border-white "></div>

        {/* ===== Section 3 ===== */}
        <section className="text-center text-md text-gray-300 ">
          © 2025 Enid Innovations. All rights reserved.
        </section>
      </div>
    </footer>
  );
}
