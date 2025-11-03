"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function StudioProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:4000/studioprojects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.error("Error fetching project:", err));
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading project...</p>
      </div>
    );
  }

  const openGallery = (index) => {
    setCurrentIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const total = project.detailImages.length;
      if (newDirection === 1) {
        return prev === total - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? total - 1 : prev - 1;
      }
    });
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6 mt-20 ">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-10">
          {/* Left Side — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-left"
          >
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Right Side — Header Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex-1 w-full h-80 md:h-136 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={`http://localhost:4000/uploads/${project.headerImage}`}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Detail Images */}
        {project.detailImages && project.detailImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.detailImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => openGallery(i)}
                  className="relative h-90 rounded-lg overflow-hidden shadow cursor-pointer group"
                >
                  <Image
                    src={`http://localhost:4000/uploads/${img}`}
                    alt={`Detail ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <p className="text-white text-sm font-medium">
                      Click to view
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          >
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-white text-3xl hover:text-gray-400"
            >
              <IoClose />
            </button>

            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 sm:left-10 text-white text-4xl hover:text-gray-300"
            >
              <IoChevronBack />
            </button>

            <button
              onClick={() => paginate(1)}
              className="absolute right-4 sm:right-10 text-white text-4xl hover:text-gray-300"
            >
              <IoChevronForward />
            </button>

            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
              transition={{ duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="relative w-[90%] max-w-4xl h-[80vh] cursor-grab active:cursor-grabbing"
            >
              <Image
                src={`http://localhost:4000/uploads/${project.detailImages[currentIndex]}`}
                alt={`Gallery ${currentIndex + 1}`}
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
