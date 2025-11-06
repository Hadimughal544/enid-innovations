"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";


export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });

  const [defaultCountry, setDefaultCountry] = useState("PK");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country) setDefaultCountry(data.country);
      })
      .catch(() => {});
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("https://enid.pk/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: formData.name,
        email: formData.email,
        phonenumber: formData.phone,
        service: formData.service,
        details: formData.details,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    await response.json();
    toast.success("Form Submitted Successfully");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      details: "",
    });
  } catch (error) {
    toast.error("Something went wrong. Try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <main>
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-10 py-10 md:py-16">
        <Image
          src="/assets/form-bg.jpg"
          alt="Form Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-20 w-full max-w-xl md:max-w-2xl bg-white shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Ready to connect?
          </h1>

          <p className="text-center text-gray-600 mb-8 sm:mb-10">
            Have a project or question? Fill out the form below and our team
            will get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0b6a6b] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0b6a6b] outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <PhoneInput
                international
                defaultCountry={defaultCountry}
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-[#0b6a6b] outline-none"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Service
              </label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-[#0b6a6b] outline-none"
              >
                <option value="">Choose a service</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Telesales">Telesales</option>
              </select>
            </div>

            {/* Details */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Project Details
              </label>
              <textarea
                name="details"
                required
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows="5"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0b6a6b] outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
  whileHover={{ scale: loading ? 1 : 1.03 }}
  whileTap={{ scale: loading ? 1 : 0.97 }}
  type="submit"
  disabled={loading}
  className={`w-full flex items-center justify-center cursor-pointer bg-[#0b6a6b] hover:bg-[#095455] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md ${
    loading ? "opacity-70 cursor-not-allowed" : ""
  }`}
>
  {loading ? (
    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  ) : (
    "Submit"
  )}
</motion.button>
          </form>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              We respect your privacy. Your information will remain
              confidential.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
