"use client";

import React, { useState, useRef, RefObject, useEffect } from "react";
import Navbar from "./components/Navbar";
import  Sejarah  from "./components/Sejarah";
import  Rebranding  from "./components/Rebranding";
import  Gallery  from "./components/Gallery";
import  Testimonial  from "./components/Testimonial";
import  JadwalMap  from "./components/JadwalMap";
import  ScrollToTopButton  from "./components/ScrollToTopButton";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  // Refs tiap section untuk scroll
  const sections = {
    hero: useRef<HTMLDivElement>(null),
    sejarah: useRef<HTMLDivElement>(null),
    rebranding: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    testimonial: useRef<HTMLDivElement>(null),
    jadwal: useRef<HTMLDivElement>(null),
  };

  // Scroll halus ke section
  const handleNavigate = (id: string) => {
    const ref = sections[id as keyof typeof sections];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active section saat scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.4 }
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sections).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <main className="relative bg-white text-gray-900">
       <header
      id="hero"
      className="relative h-[600px] flex items-center justify-center text-center overflow-hidden"
    >
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/museum.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-2xl p-8 md:p-12 items-center justify-center">
        <h1 className="text-gray-700 text-lg md:text-xl font-body mb-2 tracking-widest">
          Halo, Selamat Datang di
        </h1>
        <h2 className="text-gray-900 text-5xl md:text-7xl font-heading tracking-tight">
          MUSEUM POS INDONESIA
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-700 font-body leading-relaxed max-w-3xl mx-auto">
          Museum Pos Indonesia, dahulu dikenal sebagai Gedung Museum PTT, adalah
          salah satu museum tertua di Bandung. Didirikan pada tahun 1931,
          museum ini menyimpan koleksi bersejarah terkait perjalanan pos,
          telekomunikasi, dan telegraf di Indonesia sejak zaman kolonial
          Belanda.
        </p>
      </div>
    </header>

      {/* Sidebar/Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Content Container */}
      <div className="md:ml-24">


        {/* Sejarah */}
        <section id="sejarah" ref={sections.sejarah}>
          <Sejarah />
        </section>

        {/* Rebranding */}
        <section id="rebranding" ref={sections.rebranding}>
          <Rebranding />
        </section>

        {/* Gallery */}
        <section id="gallery" ref={sections.gallery}>
          <Gallery />
        </section>

        {/* Testimonial */}
        <section id="testimonial" ref={sections.testimonial}>
          <Testimonial />
        </section>

        {/* Jadwal dan Map */}
        <section id="jadwal" ref={sections.jadwal}>
          <JadwalMap />
        </section>

        {/* 👑 Footer tetap di page.tsx */}
        <footer className="bg-[#223E8A] text-white py-8 text-center">
          <p className="text-lg font-semibold tracking-wide">
            © {new Date().getFullYear()} Museum Pos Indonesia. All rights reserved.
          </p>
          <p className="text-sm opacity-80 mt-2">
            Designed & Developed by <span className="font-bold">King W</span> 👑
          </p>
        </footer>
      </div>

      {/* Tombol Scroll ke atas */}
      <ScrollToTopButton />
    </main>
  );
}