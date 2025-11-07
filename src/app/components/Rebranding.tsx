"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { SectionProps, Logo } from "../types";

// --- Rebranding Component ---
const Rebranding: FC<SectionProps> = ({ sectionRef }) => {
  const logos: (Logo & { title: string; desc: string })[] = [
    {
      src: "/logopos1.jpeg",
      alt: "Logo PTT",
      title: "Logo PTT (1946)",
      desc: "Logo pertama milik Dinas Pos, Telegraf, dan Telepon (PTT) setelah kemerdekaan Indonesia.",
    },
    {
      src: "/logopos2.jpeg",
      alt: "Logo Pos dan Giro",
      title: "Logo Pos dan Giro (1965)",
      desc: "Menandakan transformasi dari PTT menjadi Direktorat Jenderal Pos dan Giro di bawah Departemen Perhubungan.",
    },
    {
      src: "/logopos3.jpeg",
      alt: "Logo Pos Indonesia 1995",
      title: "Logo Pos Indonesia (1995)",
      desc: "Perubahan menjadi perusahaan umum dengan simbol burung garuda terbang membawa surat.",
    },
    {
      src: "/logopos4.jpeg",
      alt: "Logo Pos Indonesia Modern",
      title: "Logo Pos Indonesia Modern",
      desc: "Identitas modern dengan konsep globalisasi dan kecepatan layanan digital Pos Indonesia.",
    },
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
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          Re-Branding Logo Pos IND
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="relative flex items-center justify-center p-8 bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.07,
                boxShadow:
                  "0 20px 30px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.05)",
              }}
            >
              {/* Gambar */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-52 w-auto transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay detail dengan blur glass effect */}
              <motion.div
                className="absolute inset-0 backdrop-blur-md bg-white/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-6 text-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3
                  className="text-lg md:text-xl font-semibold mb-2"
                  style={{ color: "#2E3192" }}
                >
                  {logo.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: "#2E3192" }}
                >
                  {logo.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rebranding;
