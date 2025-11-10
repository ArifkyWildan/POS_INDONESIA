"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

// --- (Asumsi) Tipe-tipe ini didefinisikan di '../types' ---
export interface SectionProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
}

export interface GalleryImage {
  src: string;
  alt: string;
}
// ---

const Gallery: FC<SectionProps> = ({ sectionRef }) => {
  const images: GalleryImage[] = [
    { src: "/gallery1.jpg", alt: "Tattooed body" },
    { src: "/gallery2.jpg", alt: "Tattooing process" },
    { src: "/gallery3.jpg", alt: "Tattooed neck" },
    { src: "/gallery4.jpg", alt: "Tattooed hand" },
    { src: "/gallery5.jpg", alt: "Tattooed back" },
  ];

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-20 md:py-10 bg-white text-indigo-900"
    >
      {/* Import langsung font BEBAS NEUE dari Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .font-bebas {
          font-family: 'Bebas Neue', sans-serif;
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-3xl md:text-5xl  text-center mb-16 uppercase font-bebas text-[#2E3192]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          Gallery
        </motion.h2>

        {/* Grid layout dengan efek hover */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden cursor-pointer relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.05,
                zIndex: 10,
                boxShadow:
                  '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-96 md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) =>
                  (e.currentTarget.src =
                    'https://placehold.co/400x500/ef4444/ffffff?text=Error')
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
