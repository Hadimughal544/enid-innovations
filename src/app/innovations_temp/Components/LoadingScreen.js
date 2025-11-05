"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/assets/LogoEnid.png" // adjust your logo path
          alt="Enid Innovation Logo"
          width={180}
          height={100}
          priority
        />
      </motion.div>
      <motion.div
        className=""
        
      />
    </motion.div>
  );
}
