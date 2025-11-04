"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineSmartphone, MdOutlineContactMail } from "react-icons/md";
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
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-transform duration-700 ease-in-out ${
        showTopBar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#0b6a6b] text-white px-4 sm:px-8 md:px-16 lg:px-20 py-2 gap-2 sm:gap-0">
        {/* Left side: Contact details */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5 text-sm sm:text-base">
          <div className=" hidden md:flex items-center gap-2 border-r border-white/30 pr-3">
            <FaPhoneAlt />
            <Link href="tel:04232332713" target="_blank" className="hover:underline">
              0423-2332713
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2 border-r border-white/30 pr-3">
            <FaEnvelope />
            <Link href="mailto:info@enid.pk" target="_blank" className="hover:underline">
              info@enid.pk
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <FaMapMarkerAlt />
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

        {/* Right side: Social icons */}
        <div className="flex gap-4 items-center ">
          <div className="flex gap-2 sm:gap-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaLinkedinIn size={14} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaInstagram size={14} />
            </Link>
            <Link
              href="https://wa.me/923001234567"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaWhatsapp size={14} />
            </Link>
          </div>
          <Link href="/Innovations/Contactform">
            <button className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-white text-[#0b6a6b] hover:bg-[#bf202f] hover:text-white transition">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-20 bg-white py-3 sm:py-5">
        <Link href="/Innovations">
          <Image src="/assets/LogoEnid.png" alt="logo" width={110} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 xl:gap-10 text-base xl:text-lg">
          <Link
            href="/"
            className="text-gray-700 flex justify-center hover:text-[#00A86B] font-medium transition-colors"
          >
            <LuUndo2 size={24} />
          </Link>
          <Link
            href="/Studio"
            className="text-gray-700 hover:text-[#C00021] font-medium transition-colors"
          >
            Studio
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-[#00A86B] font-medium transition-colors">
              Services
              <IoIosArrowDown className="transition-transform group-hover:rotate-180" />
            </button>
            <ul className="absolute left-0 top-full mt-2 bg-[#ecf3f3] border border-gray-200 shadow-lg rounded-lg w-56 text-gray-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {[
                { name: "Telesales Marketing", path: "/Innovations/Telesales-marketing" },
                { name: "Web Development", path: "/Innovations/Web-development" },
                { name: "App Development", path: "/Innovations/App-development" },
                { name: "Digital Marketing", path: "/Innovations/Digital-marketing" },
                { name: "Graphic Designing", path: "/Innovations/Graphic-designing" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="block px-4 py-2 hover:bg-[#b5d2d2]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/Innovations/About"
            className="text-gray-700 hover:text-[#00A86B] font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/Innovations/Contact"
            className="text-gray-700 hover:text-[#00A86B] font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <ul className="flex flex-col text-gray-700 font-medium text-base px-6 py-4 space-y-4">
              <li>
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Studio" onClick={() => setMobileMenuOpen(false)}>
                  Studio
                </Link>
              </li>
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
                          href={`/Innovations/${service
                            .toLowerCase()
                            .replace(/ /g, '-')}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  href="/Innovations/About"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Innovations/Contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>

              <li className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-[#0b6a6b]">
                  <MdOutlineSmartphone size={20} />
                  <Link href="tel:04232332713">0423-2332713</Link>
                </div>
                <Link href="/Innovations/Contactform">
                <button className="mt-4 w-full bg-[#0b6a6b] text-white py-2 rounded-lg font-medium">
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
