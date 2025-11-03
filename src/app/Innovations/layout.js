"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "./Components/Header";
import Ourprocess from "./Components/Ourservice";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import LoadingScreen from "./Components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function InnovationsLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // simulate brief load
    return () => clearTimeout(timeout);
  }, [pathname]);
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {loading && <LoadingScreen/>}
      <Header />
      <main className="pt-25">{children}</main>
      <Ourprocess />
      <Portfolio/>
      <Footer />
    </div>
  );
}
