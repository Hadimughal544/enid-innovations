"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SlideUpSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
          viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
