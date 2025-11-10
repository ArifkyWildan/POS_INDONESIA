"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

// ─── Tipe Data ────────────────────────────────────────────────
interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface SectionProps {
 sectionRef?: React.RefObject<HTMLElement | null>;
}

// ─── Komponen Testimonial ─────────────────────────────────────
const Testimonial: FC<SectionProps> = ({ sectionRef }) => {
  const testimonials: TestimonialItem[] = [
    {
      quote:
        "Koleksi yang sangat lengkap! Belajar banyak soal sejarah filateli di sini. Sangat direkomendasikan untuk studi tur sekolah.",
      author: "Pengunjung A",
      role: "Peserta Studi Tur",
    },
    {
      quote:
        "Kunjungan ke Museum Pos sangat berkesan! Banyak belajar sejarah komunikasi di Indonesia yang belum pernah saya tahu sebelumnya. Koleksinya lengkap dan gedungnya sendiri sangat historis.",
      author: "Agan P.",
      role: "Pengunjung Museum",
    },
    {
      quote:
        "Arsitektur gedungnya 'heritage' sekali, sangat terawat dan megah. Spot foto favorit di Bandung!",
      author: "Pengunjung B",
      role: "Pengunjung",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="testimonial"
      className="py-20 md:py-32 bg-white text-indigo-900"
    >
      {/* Import font BEBAS NEUE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .font-bebas {
          font-family: 'Bebas Neue', sans-serif;
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Judul Section */}
        <motion.h2
          className="text-3xl md:text-5xl  text-center mb-4 uppercase font-bebas text-[#2E3192]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          Testimonial
        </motion.h2>

        {/* Deskripsi Singkat */}
        <motion.p
          className="text-base md:text-lg text-gray-600 text-center mb-5 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeInOut' }}
        >
          Apa kata mereka yang telah berkunjung ke Museum Pos Indonesia.
        </motion.p>

        {/* Grid Testimonial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col h-full bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeInOut',
              }}
            >
              {/* Isi Kutipan */}
              <div>
                <span className="text-6xl font-serif font-bold text-blue-100 leading-none">
                  “
                </span>
                <p className="text-base md:text-lg text-gray-700 italic mt-2 mb-6">
                  {testimonial.quote}
                </p>
              </div>

              {/* Nama & Peran Pengunjung */}
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-blue-700 font-medium">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
