"use client";

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';

// --- 3. Sejarah Component ---
const Sejarah: FC<SectionProps> = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id="sejarah"
      className="py-20 md:py-32 bg-white text-gray-800"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          Sejarah Pos Indonesia
        </motion.h2>

        {/* Image Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          {/* Image 1 (Left) */}
          <motion.div
            className="w-full md:w-1/4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
          >
            <img
              src="https://placehold.co/300x450/d1d5db/6b7280?text=Ukiran+Sejarah"
              alt="Ukiran Sejarah Pos"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </motion.div>

          {/* Image 2 (Center) */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.03, zIndex: 10 }}
          >
            <img
              src="https://placehold.co/600x400/9ca3af/ffffff?text=Gedung+Kantor+Pos+Bandung"
              alt="Gedung Kantor Pos Bandung"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Image 3 (Right) */}
          <motion.div
            className="w-full md:w-1/4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
          >
            <img
              src="https://placehold.co/300x450/d1d5db/6b7280?text=Detail+Arsitektur"
              alt="Detail Arsitektur"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </motion.div>
        </div>

        {/* Text Section - UPDATED to match screenshot layout */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-semibold uppercase">Gustaaf Willem Baron Van Imhoff</h3>
            <p className="text-lg md:text-xl font-light text-gray-600 mb-4">(1746–1750)</p>
          </div>
          {/* UPDATED Text grid */}
          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600 text-center md:text-left px-4 md:px-0">
            <p>Didirikan di Batavia (kini Jakarta) pada 26 Agustus 1746 oleh Gubernur Jenderal G.W. Baron van Imhoff.</p>
            <p>Tujuannya adalah untuk menjamin kelancaran surat-menyurat bagi para pedagang dan pejabat, terutama dari dan ke Belanda.</p>
            <p>Empat tahun kemudian, kantor pos lain didirikan di Semarang untuk menghubungkan jalur dagang utama.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sejarah;