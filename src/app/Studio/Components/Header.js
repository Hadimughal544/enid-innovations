"use client";
import Link from "next/link";
import { LuUndo2 } from "react-icons/lu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed hidden md:hidden lg:block top-8 left-0 w-full z-50">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto bg-[#e6e7e8]/55 backdrop-blur-2xl shadow-sm rounded-2xl px-10 py-6 flex items-center justify-between ">
        
        {/* Logo / Brand */}
        <div
          onClick={() => router.push("/Studio")}
          className="text-2xl font-bold cursor-pointer flex items-center space-x-1"
        >
            <Image
            src={"/assets/studio/Enid-Studio.png"}
            alt="mainlogo"
            width={140}
            height={30}
            />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-black flex justify-center hover:text-[#C00021] font-medium transition-colors"
          >
           <LuUndo2 size={25}/>
          </Link>
          <div
            onClick={() => router.push("/Innovations")}
            className="cursor-pointer text-black hover:text-[#00A86B] font-bold text-lg transition-colors"
          >Innnovations
          </div>

          <div
            onClick={() => router.push("/Studio/Portfolio")}
            className="cursor-pointer text-black hover:text-[#C00021] font-bold text-lg transition-colors"
          >Portfolio
          </div>
          
          <div
            onClick={() => router.push("/Studio/About")}
            className="cursor-pointer text-black hover:text-[#C00021] font-bold text-lg transition-colors"
          >
            About
          </div>
          <div
            onClick={() => router.push("/Studio/Contact")}
            className="cursor-pointer text-black hover:text-[#C00021] font-bold text-lg transition-colors"
          >
            Contact
          </div>
        </div>

     
      </div>

    </header>
  );
}
