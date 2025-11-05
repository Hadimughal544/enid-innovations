"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Projectsslider from "../../Components/Projectslider";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });
  const [defaultCountry, setDefaultCountry] = useState("PK");
  const [imageHeight, setImageHeight] = useState(0);
  const formRef = useRef(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country) setDefaultCountry(data.country);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (formRef.current) {
      setImageHeight(formRef.current.offsetHeight);
    }
  }, [formData]); // recalculate when form changes (for consistent sizing)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/studioform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: formData.name,
          email: formData.email,
          phonenumber: formData.phone,
          service: formData.service,
          details: formData.details,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      const result = await response.json();
      console.log("Form successfully submitted:", result);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        details: "",
      });

      toast.success("Form Submitted Successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main>
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
                  <Image
                    src="/assets/studio/about-us.jpg"
                    alt="about"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/55 z-10"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                      Book Your Shoot
                    </h1>
                    <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
                        Whether you are ready to book a shoot, have a question about our services, or just
                         want to explore ideas we’re here to help. Fill out the form below and we’ll get
                          back to you as soon as possible.
                    </p>
                  </div>
                </div>
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
  {/* Outer Box */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col md:flex-row items-stretch justify-between w-full max-w-7xl rounded-3xl nav-link2 overflow-hidden bg-white"
  >
    {/* Left Image */}
    <div className="w-full md:w-1/2 h-72 md:h-auto">
      <Image
        src="/assets/studio/tech4.jpg" // <-- your image path
        alt="Contact illustration"
        width={600}
        height={600}
        className="object-cover w-full h-full"
        priority
      />
    </div>

    {/* Right Form */}
    <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center text-black bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Ready to connect?
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-500 bg-transparent rounded-xl px-2 py-2 focus:ring-2 focus:ring-black outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full border border-gray-500 bg-transparent rounded-xl px-2 py-2 focus:ring-2 focus:ring-black outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <PhoneInput
            international
            defaultCountry={defaultCountry}
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            className="w-full border border-gray-500 bg-transparent rounded-xl px-2 py-2 focus:ring-2 focus:ring-black outline-none"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block font-medium mb-1">Select Service</label>
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-gray-500 bg-white rounded-xl px-2 py-2 focus:ring-2 focus:ring-black outline-none"
          >
            <option value="">Choose a service</option>
            <option value="Fashion Photography">Fashion Photography</option>
            <option value="Fashion Videography">Fashion Videography</option>
            <option value="Product Photography">Product Photography</option>
            <option value="Social Media Content">Social Media Content</option>
          </select>
        </div>

        {/* Details */}
        <div>
          <label className="block font-medium mb-1">Project Details</label>
          <textarea
            name="details"
            required
            value={formData.details}
            onChange={handleChange}
            placeholder="Tell us a bit..."
            rows="3"
            className="w-full border border-gray-500 bg-transparent rounded-xl px-2 py-2 focus:ring-2 focus:ring-black outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-black hover:bg-teal-500 text-white hover:text-white font-semibold py-3 rounded-xl cursor-pointer transition-all duration-300 shadow-md"
        >
          Submit
        </motion.button>
      </form>
    </div>
  </motion.div>
</div>
<Projectsslider/>
    </main>
  );
}
