"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StudioSlideUpSection from "./Studioslideup";

export default function StudioProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/studioprojects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-6" id="studio-projects ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black inline-block relative">
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

        <StudioSlideUpSection>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/studio/studioprojects/${project.id}`}
                  className="group relative block rounded-xl overflow-hidden shadow-md "
                >
                  <div className="relative h-84 w-full">
                    <Image
                      src={`http://localhost:4000/uploads/${project.headerImage}`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                      <h2 className="text-white text-xl font-semibold text-center px-4">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center">No projects found.</p>
          )}
        </StudioSlideUpSection>
      </div>
    </section>
  );
}
