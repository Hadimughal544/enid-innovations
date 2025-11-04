"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function MobileHeader() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50  bg-[#e6e7e8] backdrop-blur-lg shadow-sm lg:hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div
          onClick={() => router.push("/Studio")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Image
            src="/assets/studio/Enid-Studio.png"
            alt="logo"
            width={120}
            height={28}
          />
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 space-y-3">
             <button
              onClick={() => {
                router.push("/Innovations");
                setMenuOpen(false);
              }}
              className="text-left text-gray-700 text-lg hover:text-[#00A86B] font-medium"
            >
              Innovations
            </button>
            <button
              onClick={() => {
                router.push("/Studio/Portfolio");
                setMenuOpen(false);
              }}
              className="text-left text-gray-700 text-lg hover:text-[#00A86B] font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => {
                router.push("/Studio/About");
                setMenuOpen(false);
              }}
              className="text-left text-gray-700 text-lg hover:text-[#C00021] font-medium"
            >
              About
            </button>
            <button
              onClick={() => {
                router.push("/Studio/Contact");
                setMenuOpen(false);
              }}
              className="text-left text-gray-700 text-lg hover:text-[#00A86B] font-medium"
            >
              Contact
            </button>
           
          </nav>
        </div>
      )}
    </header>
  );
}
