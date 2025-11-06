"use client";

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { SectionProps, Logo } from '../types';

// --- 4. Rebranding Component ---
const Rebranding: FC<SectionProps> = ({ sectionRef }) => {
  const logos: Logo[] = [
    { src: "https://placehold.co/150x150/fde68a/a16207?text=Logo+Lama+1", alt: "Logo PTT" },
    { src: "https://placehold.co/150x150/bfdbfe/1e3a8a?text=Logo+Lama+2", alt: "Logo Pos dan Giro" },
    { src: "https://placehold.co/150x150/fecaca/991b1b?text=Logo+Lama+3", alt: "Logo Pos Indonesia 1995" },
    { src: "https://placehold.co/150x150/fed7aa/f97316?text=Logo+Baru", alt: "Logo Pos Indonesia Modern" },
  ];

  return (
    <section
      ref={sectionRef}
      id="rebranding"
      className="py-20 md:py-32 bg-gray-50 text-gray-800"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          Re-Branding Logo Pos IND
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-24 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rebranding;