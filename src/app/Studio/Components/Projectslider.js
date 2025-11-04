"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projectsslider() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/studioprojects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-6" id="studio-projects">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black inline-block relative mb-4">
            Portfolio
          </h2>

          <div className="flex justify-center items-center h-10">
           <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="h-1 bg-black rounded-full w-full max-w-50"
            />
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
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
          className="studio-swiper"
        >
          {projects.length > 0 ? (
            projects.map((project) => (
              <SwiperSlide key={project.id}>
                <Link
                  href={`/studio/studioprojects/${project.id}`}
                  className="relative group rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 block"
                >
                  {/* Image */}
                  <div className="relative w-full h-76 md:h-95 lg:h-95">
                    <Image
                      src={`http://localhost:4000/uploads/${project.headerImage}`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 p-4">
                    <h3 className="text-white text-lg sm:text-xl font-semibold text-center leading-snug px-4">
                      {project.title}
                    </h3>
                  </div>
                </Link>
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
