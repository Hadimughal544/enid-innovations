"use client";

import { motion } from "framer-motion";
import { HardHat, Clock, Wrench } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      {/* Animated Icon */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="mb-6"
      >
        <HardHat className="w-20 h-20 text-[#00A86B]" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Enid Innovations
      </motion.h1>

      {/* Sub Heading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-300 text-center mb-6"
      >
        Our website is currently under construction.
        <br />
        We’re working hard to bring something amazing soon.
      </motion.p>

      {/* Progress Bar Animation */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "80%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="h-1.5 bg-red-500 rounded-full w-3/4 max-w-md"
      />

      {/* Icons Row */}
      <motion.div
        className="flex gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Wrench className="w-6 h-6 text-gray-400 animate-spin-slow" />
        <Clock className="w-6 h-6 text-gray-400" />
        <HardHat className="w-6 h-6 text-gray-400" />
      </motion.div>

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Enid Innovations. All rights reserved.
      </p>

      {/* Custom slow spin animation */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
