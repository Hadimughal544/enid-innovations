"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function StudioFooter() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="mx-auto px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">

        {/* Logo & Description */}
        <div c>
          <Image
            src="/assets/studio/Enid-Studio-White.png"
            alt="Enid Logo"
            width={160}
            height={60}
            className="mb-4"
          />
          <p className="text-sm  leading-relaxed text-gray-200">
            Enid Studio captures moments that matter offering professional photography tailored to your story, your style, your space.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-2xl mb-4">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/studio/portfolio" className="hover:text-gray-300 transition hover-underline">Portfolio</Link>
            </li>
            <li>
              <Link href="/studio#services" className="hover:text-gray-300 transition hover-underline">Our Services</Link>
            </li>
            <li>
              <Link href="/studio/about" className="hover:text-gray-300 transition hover-underline">About Us</Link>
            </li>
            <li>
              <Link href="/studio/contact" className="hover:text-gray-300 transition hover-underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-2xl mb-4">Contact Info</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 ">
              <FaPhoneAlt size={14} />
              <Link href="tel:+923234464400" target="_blank" className="hover-underline">+92 323 4464400</Link>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope size={14} />
              <Link href="mailto:info@enid.pk" target="_blank" className="hover-underline">info@enidstudio.pk</Link>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt size={14} className="mt-1" />
              <Link
                href="https://maps.app.goo.gl/PFdFsS9WZpDPqmXZ7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 hover-underline"
              >
                307-B2, Johar Town, Lahore, 54782
              </Link>
            </div>
          </div>
        </div>

        {/* Socials + CTA */}
        <div>
          <h3 className="font-bold text-2xl mb-4">Connect With Us</h3>
          <div className="flex gap-3 mb-5">
            <Link href="https://www.facebook.com/share/16tSo85uRy/?mibextid=wwXIfr" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaFacebookF size={16} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaLinkedinIn size={16} />
            </Link>
            <Link href="https://www.instagram.com/aestheticstan.pk" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaInstagram size={16} />
            </Link>
            <Link href="https://wa.me/+923234464400" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaWhatsapp size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-10 pt-5 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Enid Studio. All rights reserved.
      </div>
    </footer>
  );
}
