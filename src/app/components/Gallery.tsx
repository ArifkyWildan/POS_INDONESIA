"use client";

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { SectionProps, GalleryImage } from '../types';

// --- 5. Gallery Component ---
const Gallery: FC<SectionProps> = ({ sectionRef }) => {
  const images: GalleryImage[] = [
    { src: "https://placehold.co/400x500/a3a3a3/ffffff?text=Seni+Bust+18", alt: "Seni Bust" },
    { src: "https://placehold.co/400x500/8b5cf6/ffffff?text=New+Art+Fest", alt: "New Art Fest" },
    { src: "https://placehold.co/400x500/f59e0b/ffffff?text=Poster+M", alt: "Poster M" },
    { src: "https://placehold.co/400x500/78350f/ffffff?text=The+Vilman", alt: "The Vilman" },
    { src: "https://placehold.co/400x500/ef4444/ffffff?text=Blr", alt: "Blurry Face Art" },
  ];

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-20 md:py-32 bg-white text-gray-800"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05, zIndex: 10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-80 object-cover" // Fixed height for poster-like look
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;