"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import StudioHeader from "./Components/Header";
import StudioFooter from "./Components/Footer";
import StudioLoadingScreen from "./Components/Loadingscreen";
import MobileHeader from "./Components/Mobileheader";
import StudioFloatingbutton from "./Components/Studiowattsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function StudioLayout({ children }) {
  const [loading, setLoading] = useState(false);
    const pathname = usePathname();
  
    useEffect(() => {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 1000); // simulate brief load
      return () => clearTimeout(timeout);
    }, [pathname]);
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {loading && <StudioLoadingScreen/>}
      <StudioFloatingbutton/>
        <StudioHeader />
        <MobileHeader/>
      <main className=" mt-10 md:mt-0" >{children}</main>
      <StudioFooter/>
    </div>
  );
}
