"use client";

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { SectionProps, TestimonialItem } from '../types';

// --- 6. Testimonial Component ---
const Testimonial: FC<SectionProps> = ({ sectionRef }) => {
  const testimonials: TestimonialItem[] = [
    {
      quote: "Koleksi yang sangat lengkap! Belajar banyak soal sejarah filateli di sini. Sangat direkomendasikan untuk studi tur sekolah.",
      author: "- Pengunjung A"
    },
    {
      quote: "Kunjungan ke Museum Pos sangat berkesan! Banyak belajar sejarah komunikasi di Indonesia yang belum pernah saya tahu sebelumnya. Koleksinya lengkap dan gedungnya sendiri sangat historis.",
      author: "- Agan P. / Pengunjung Museum"
    },
    {
      quote: "Arsitektur gedungnya 'heritage' sekali, sangat terawat dan megah. Spot foto favorit di Bandung!",
      author: "- Pengunjung B"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="testimonial"
      className="py-20 md:py-32 bg-gray-50 text-gray-800"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          Testimonial
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-lg text-center ${
                index === 1
                ? 'shadow-xl transform md:scale-105 z-10'
                : 'md:scale-95 opacity-90'
              }`} // Middle one is prominent
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut' }}
            >
              <p className="text-base italic text-gray-700 leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <p className="font-semibold text-sm text-blue-800">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;