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
import ChatbotWidget from './components/ChatbotWidget';
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

// --- Import Ikon dari react-icons/fa ---
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaXTwitter // Untuk ikon X (Twitter)
} from 'react-icons/fa6'; // Menggunakan fa6 (Font Awesome 6) yang memiliki FaXTwitter



const ChatbotWidgetTyped = (ChatbotWidget as unknown) as React.FC<{ isOpen: boolean; onClose: () => void }>;

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => setIsChatOpen(true);
  const handleCloseChat = () => setIsChatOpen(false);

  // Change all refs to HTMLElement instead of HTMLDivElement
  const sections = {
    hero: useRef<HTMLElement | null>(null),
    sejarah: useRef<HTMLElement | null>(null),
    rebranding: useRef<HTMLElement | null>(null),
    gallery: useRef<HTMLElement | null>(null),
    testimonial: useRef<HTMLElement | null>(null),
    jadwal: useRef<HTMLElement | null>(null),
  };

  const handleNavigate = (id: string) => {
    const ref = sections[id as keyof typeof sections];
    if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
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
            backgroundImage: "url('/museumm.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Konten Tengah */}
        <div className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-2xl p-8 md:p-12 backdrop-blur-sm">
          <h1 className="text-indigo-900 text-lg md:text-xl font-body mb-2 tracking-widest">
            Halo, Selamat Datang di
          </h1>
          <h2
            className={`${bebasNeue.className} text-indigo-900 text-5xl md:text-8xl md:mt-8 font-bold tracking-tight`}
          >
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

      {/* Content */}
      <div className="lg:pl-20">
        <section id="sejarah" ref={sections.sejarah}>
          <Sejarah />
        </section>
        <section id="rebranding" ref={sections.rebranding}>
          <Rebranding />
        </section>
        <section id="gallery" ref={sections.gallery}>
          <Gallery />
        </section>
        <section id="testimonial" ref={sections.testimonial}>
          <Testimonial />
        </section>
        <section id="jadwal" ref={sections.jadwal}>
          <JadwalMap />
        </section>

        <footer className="relative bg-[#223E8A] text-white pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold uppercase tracking-wider text-white font-heading">
                Museum Pos Indonesia
              </h2>
              <p className="mt-4 text-base text-indigo-100 leading-relaxed font-body">
                Cilaki St No.73, Citarum, Bandung Wetan, 
                Bandung City, West Java 40115
              </p>

              {/* Bagian Ikon Media Sosial Baru dengan React Icons */}
              <div className="mt-8 flex space-x-6">
                <a
                  href="https://www.instagram.com/museumposindonesia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white hover:text-indigo-300 transition-colors"
                >
                  {/* Penggunaan FaInstagram */}
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/posindonesia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white hover:text-indigo-300 transition-colors"
                >
                  {/* Penggunaan FaFacebookF */}
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@posindonesia_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-white hover:text-indigo-300 transition-colors"
                >
                  {/* Penggunaan FaTiktok */}
                  <FaTiktok className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/posindonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="text-white hover:text-indigo-300 transition-colors"
                >
                  {/* Penggunaan FaXTwitter */}
                  <FaXTwitter className="h-6 w-6" />
                </a>
                <a
                  href="https://www.youtube.com/c/PosIndonesiajuara"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-white hover:text-indigo-300 transition-colors"
                >
                  {/* Penggunaan FaYoutube */}
                  <FaYoutube className="h-6 w-6" />
                </a>
              </div>
              {/* Akhir Bagian Ikon Media Sosial */}
            </div>
          </div>
        </footer>
      </div>

      {/* Chatbot Widget */}
      <ChatbotWidgetTyped isOpen={isChatOpen} onClose={handleCloseChat} />
    </main>
  );
}