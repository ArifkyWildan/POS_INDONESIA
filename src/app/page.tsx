"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sejarah from "./components/Sejarah";
import Rebranding from "./components/Rebranding";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import JadwalMap from "./components/JadwalMap";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ChatbotButton from './components/ReusableChatbotButton';
import ChatbotWidget from './components/ChatbotWidget'; // Import widget chat
const ChatbotWidgetTyped = (ChatbotWidget as unknown) as React.FC<{ isOpen: boolean; onClose: () => void }>;

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isChatOpen, setIsChatOpen] = useState(false); // State untuk buka/tutup chat
  
  const handleOpenChat = () => {
    setIsChatOpen(true); // Buka chat widget
  };

  const handleCloseChat = () => {
    setIsChatOpen(false); // Tutup chat widget
  };

  const sections = {
    hero: useRef<HTMLDivElement | null>(null),
    sejarah: useRef<HTMLDivElement | null>(null),
    rebranding: useRef<HTMLDivElement | null>(null),
    gallery: useRef<HTMLDivElement | null>(null),
    testimonial: useRef<HTMLDivElement | null>(null),
    jadwal: useRef<HTMLDivElement | null>(null),
  };

  const handleNavigate = (id: string) => {
    const ref = sections[id as keyof typeof sections];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <main className="relative bg-indigo-900 text-white min-h-screen overflow-x-hidden">
      {/* Sidebar/Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header
      id="hero"
      ref={sections.hero}
      className="relative h-[600px] flex flex-col items-center justify-center text-center overflow-hidden lg:pl-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Pastikan path '/museum1.jpeg' ini benar dan
          // file-nya ada di folder 'public' Anda.
          backgroundImage: "url('/museum1.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // 'cover' akan menutupi area, mungkin memotong sedikit
                                 // tapi tidak akan 'ketarik' (distorsi).
                                 // Ini cara standar untuk background hero.
        }}
      >
        {/* Lapisan overlay gelap */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Konten di tengah */}
      <div className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-2xl p-8 md:p-12 backdrop-blur-sm">
        <h1 className="text-indigo-900 text-lg md:text-xl font-body mb-2 tracking-widest">
          Halo, Selamat Datang dii
        </h1>
        <h2 className="text-indigo-900 text-5xl md:text-7xl font-bold font-heading tracking-tight">
          MUSEUM POS INDONESIA
        </h2>
        <p className="mt-6 text-base md:text-lg text-indigo-900 font-body leading-relaxed max-w-3xl mx-auto">
          Museum Pos Indonesia, dahulu dikenal sebagai Gedung Museum PTT,
          adalah salah satu museum tertua di Bandung. Didirikan pada tahun
          1931, museum ini menyimpan koleksi bersejarah terkait perjalanan
          pos, telekomunikasi, dan telegraf di Indonesia sejak zaman kolonial
          Belanda.
        </p>
      </div>
    </header>

      {/* Content Container */}
      <div className="lg:pl-20">
        <section id="sejarah" ref={sections.sejarah}>
          <Sejarah />
        </section>

        <section id="rebranding" ref={sections.rebranding}>
          <Rebranding sectionRef={sections.rebranding} />
        </section>

        <section id="gallery" ref={sections.gallery}>
          <Gallery sectionRef={sections.gallery} />
        </section>

        <section id="testimonial" ref={sections.testimonial}>
          <Testimonial sectionRef={sections.testimonial} />
        </section>

        <section id="jadwal" ref={sections.jadwal}>
          <JadwalMap sectionRef={sections.jadwal} />
        </section>

        {/* Footer */}
        <footer className="relative bg-[#223E8A] text-white pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold uppercase tracking-wider text-white font-heading">
                Museum Pos Indonesia
              </h2>
              <p className="mt-4 text-base text-indigo-100 leading-relaxed font-body">
                MUSEUM POS INDONESIA telah hadir sejak masa Hindia Belanda
                dengan nama Museum PTT (Pos Telegrop dan Telepon), tepatnya pada
                tahun 1931 terletak dibagian sayap kanan bawah Gedung Kantor
                Pusat PTT Jalan Cilaki No.73 Bandung 40115.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Chatbot Widget - Muncul ketika isChatOpen = true */}
      <ChatbotWidgetTyped isOpen={isChatOpen} onClose={handleCloseChat} />
    </main>
  );
}