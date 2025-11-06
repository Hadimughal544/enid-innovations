"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineSmartphone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { LuUndo2 } from "react-icons/lu";

export default function Header() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={` md:fixed md:top-0 md:left-0 md:w-full z-50 bg-white shadow-sm transition-transform duration-700 ease-in-out ${
        showTopBar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#0b6a6b] text-white px-4 sm:px-8 md:px-12 lg:px-20 py-2 gap-3 sm:gap-0 text-sm sm:text-base">
        {/* Contact info */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5 text-center">
          <div className=" hidden md:flex items-center gap-2">
            <FaPhoneAlt className="text-xs sm:text-sm" />
            <Link href="tel:04232332713" className="hover:underline">
              0423-2332713
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <FaEnvelope className="text-xs sm:text-sm" />
            <Link href="mailto:info@enid.pk" className="hover:underline">
              info@enid.pk
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <FaMapMarkerAlt className="text-xs sm:text-sm" />
            <Link
              href="https://maps.app.goo.gl/PFdFsS9WZpDPqmXZ7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              307-B2, Johar Town, Lahore
            </Link>
          </div>
        </div>

        {/* Social + Quote */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
          <div className="flex gap-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaLinkedinIn size={14} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaInstagram size={14} />
            </Link>
            <Link
              href="https://wa.me/923001234567"
              target="_blank"
              className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaWhatsapp size={14} />
            </Link>
          </div>
          <Link href="/innovations/contactform">
            <button className="px-3 py-1.5 hidden md:block cursor-pointer  rounded-md text-xs sm:text-sm font-medium bg-white text-[#0b6a6b] hover:bg-[#bf202f] hover:text-white transition">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 py-3 sm:py-5 bg-white">
        <Link href="/innovations">
          <Image
            src="/assets/LogoEnid.png"
            alt="logo"
            width={120}
            height={50}
            className="object-contain w-[100px] sm:w-[120px] md:w-[140px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 xl:gap-10 text-base xl:text-lg font-medium">
          <Link href="/" className="text-gray-700 hover:text-[#00A86B]">
            <LuUndo2 size={22} />
          </Link>
          <Link href="/studio" className="text-gray-700 hover:text-[#C00021]">
            Studio
          </Link>

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-[#00A86B]">
              Services
              <IoIosArrowDown className="transition-transform group-hover:rotate-180" />
            </button>
            <ul className="absolute left-0 top-full mt-2 bg-[#ecf3f3] border border-gray-200 shadow-lg rounded-lg w-56 text-gray-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {[
                { name: "Telesales Marketing", path: "/innovations/telesales-marketing" },
                { name: "Web Development", path: "/innovations/web-development" },
                { name: "App Development", path: "/innovations/app-development" },
                { name: "Digital Marketing", path: "/innovations/digital-marketing" },
                { name: "Graphic Designing", path: "/innovations/graphic-designing" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="block px-4 py-2 hover:bg-[#b5d2d2]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/innovations/about" className="text-gray-700 hover:text-[#00A86B]">
            About
          </Link>
          <Link href="/innovations/contact" className="text-gray-700 hover:text-[#00A86B]">
            Contact
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-md"
          >
             <ul className="flex flex-col text-gray-700 font-medium text-base px-6 py-4 space-y-4">
      {["Home", "Studio", "About", "Contact"].map((page) => (
        <li key={page}>
          <Link
            href={
              page === "Home"
                ? "/"
                : page === "Studio"
                ? "/studio"
                : `/innovations/${page.toLowerCase()}`
            }
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            {page === "Home" ? (
              <LuUndo2 size={22} className="text-[#0b6a6b]" />
            ) : (
              page
            )}
          </Link>
        </li>
      ))}

      <li>
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer">
            Services
            <IoIosArrowDown className="transition-transform group-open:rotate-180" />
          </summary>
          <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
            {[
              "Telesales Marketing",
              "Web Development",
              "App Development",
              "Digital Marketing",
              "Graphic Designing",
            ].map((service, idx) => (
              <li key={idx}>
                <Link
                  href={`/innovations/${service
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>

      <li className="pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-[#0b6a6b]">
          <MdOutlineSmartphone size={20} />
          <Link href="tel:04232332713">0423-2332713</Link>
        </div>
        <Link href="/innovations/contactform">
          <button className="mt-4 w-full bg-[#0b6a6b] text-white py-2 rounded-md font-medium">
            Get a Quote
          </button>
        </Link>
      </li>
    </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
