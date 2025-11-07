"use client";

import React, { FC } from 'react';
import { motion } from 'framer-motion';

// --- (Asumsi) Tipe-tipe ini didefinisikan di '../types' ---
export interface SectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export interface GalleryImage {
  src: string;
  alt: string;
}
// ---

// --- 5. Gallery Component ---
const Gallery: FC<SectionProps> = ({ sectionRef }) => {
  // Menggunakan gambar dari Unsplash yang lebih sesuai dengan tema & orientasi
  // MODIFIKASI: Meminta resolusi (w=600) & kualitas (q=90) lebih tinggi
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

        {/* MODIFIKASI: 
          - Mengganti 'grid' responsif dengan 'grid-cols-5' yang kaku untuk 5 gambar.
          - Menambah 'gap-2' (jarak kecil) antar gambar.
        */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden cursor-pointer relative" // Hapus 'rounded-lg' & 'shadow-lg'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut' }} // Delay dibuat berurutan
              whileHover={{ 
                scale: 1.05, 
                zIndex: 10, 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' // Shadow hanya saat hover
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-96 md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-300" // Efek grayscale
                onError={(e) => (e.currentTarget.src = `https://placehold.co/400x500/ef4444/ffffff?text=Error`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;