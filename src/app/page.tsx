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
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenChat = () => setIsChatOpen(true);
  const handleCloseChat = () => setIsChatOpen(false);
  const handleOpenLogin = () => setIsLoginOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);

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

      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={handleOpenLogin}
          className="
            px-5 py-2
            rounded-full
            bg-indigo-900/80 backdrop-blur
            border border-indigo-300/30
            text-white text-sm font-semibold
            hover:bg-indigo-800
            transition-all duration-300
          "
        >
          Login
        </button>
      </div>


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

      {/* Login Modal */}
      {isLoginOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={handleCloseLogin}
        >
          <div 
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl w-full max-w-md p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLogin}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-2xl p-4 shadow-md">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Sign in with email
            </h2>
            <p className="text-gray-500 text-center text-sm mb-8">
              Make a new doc to bring your words, data,<br />
              and teams together. For free
            </p>

            {/* Form */}
            <form className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 bg-white/60 border-0 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-3 bg-white/60 border-0 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Get Started
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">Or sign in with</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-white py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button className="flex-1 bg-white py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="flex-1 bg-white py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}