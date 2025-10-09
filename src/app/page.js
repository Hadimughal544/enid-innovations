"use client";

import { motion } from "framer-motion";
import { Clock, Wrench } from "lucide-react";
import { FaGear } from "react-icons/fa6";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      {/* Animated Gears (centered and aligned) */}
      <div className="relative flex items-center justify-center mb-10 h-24 w-24">
        {/* Big Gear */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute"
        >
          <FaGear className="w-16 h-16  text-[#00A86B]" />
        </motion.div>

        {/* Small Gear (offset and rotating opposite) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute right-20 top-11"
        >
          <FaGear className="w-10 h-10 text-red-500" />
        </motion.div>
      </div>

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
        className="h-1.5 bg-[linear-gradient(to_right,#ef4444,#00A86B)]  rounded-full w-3/4 max-w-md"
      />

      {/* Icons Row */}
      <motion.div
        className="flex gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Wrench className="w-6 h-6 text-gray-400" />
        <Clock className="w-6 h-6 text-gray-400" />
        <FaGear className="w-6 h-6 text-gray-400" />
      </motion.div>

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Enid Innovations. All rights reserved.
      </p>
    </div>
  );
}
