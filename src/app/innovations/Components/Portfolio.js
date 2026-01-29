"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://enid.pk/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const isValidUrl = (str) => {
    if (!str) return false;
    try {
      const url = new URL(str);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      // Check for common patterns like www.google.com
      const pattern = /^(www\.|https?:\/\/)/i;
      return pattern.test(str);
    }
  };

  const formatUrl = (str) => {
    if (!str.startsWith('http')) {
      return `https://${str}`;
    }
    return str;
  };

  return (
    <section className="bg-[#b5d2d2] py-10 px-4 sm:px-6 md:px-10 mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black inline-block relative mb-4">
            Our Portfolio
          </h2>

          <div className="flex justify-center items-center h-8 sm:h-10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="h-1 bg-black rounded-full w-full max-w-[200px] sm:max-w-[300px]"
            />
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="portfolio-swiper"
        >
          {projects.length > 0 ? (
            projects.map((project) => (
              <SwiperSlide key={project.id}>
                {isValidUrl(project.title) ? (
                  <a
                    href={formatUrl(project.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block group rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 h-full"
                  >
                    {/* Image */}
                    <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-65">
                      <Image
                        src={`https://enid.pk/api/uploads/${project.image}`}
                        alt="Project"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Hover overlay for links */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 p-4">
                      <h3 className="text-white text-lg sm:text-xl font-bold text-center">
                        Click Now
                      </h3>
                    </div>
                  </a>
                ) : (
                  <div className="relative group rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Image */}
                    <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-65">
                      <Image
                        src={`https://enid.pk/api/uploads/${project.image}`}
                        alt={project.title || "Project"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Hover overlay for text titles */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 p-4">
                      {project.title && (
                        <h3 className="text-white text-lg sm:text-xl font-bold text-center">
                          {project.title}
                        </h3>
                      )}
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))
          ) : (
            <p className="text-gray-700 text-center text-sm sm:text-base">
              No projects found.
            </p>
          )}
        </Swiper>
      </div>
    </section>
  );
}
