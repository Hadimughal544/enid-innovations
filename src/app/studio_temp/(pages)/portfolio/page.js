"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StudioProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/studioprojects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section>
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
                      <Image
                        src="/assets/studio/portfolio1.jpg"
                        alt="about"
                        fill
                        priority
                        className="object-cover"  
                      />
                      <div className="absolute inset-0 bg-black/55 z-10"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                          Portfolio
                        </h1>
                      </div>
                    </div>
      <div className="max-w-6xl mx-auto py-10">

        
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/Studio/studioprojects/${project.id}`}
                  className="group relative block rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative h-94 w-full">
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
       
      </div>
    </section>
  );
}
