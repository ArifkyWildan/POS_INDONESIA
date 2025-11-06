"use client";
import React from "react";

export function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-[500px] md:h-[600px] flex items-center justify-center text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/museum.jpg')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-2xl p-6 sm:p-8 md:p-12">
        <h1 className="text-gray-700 text-base sm:text-lg md:text-xl font-body mb-2 tracking-widest">
          Halo, Selamat Datang di
        </h1>
        <h2 className="text-gray-900 text-4xl sm:text-5xl md:text-7xl font-heading tracking-tight leading-tight">
          MUSEUM POS INDONESIA
        </h2>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-700 font-body leading-relaxed max-w-3xl mx-auto">
          Museum Pos Indonesia, dahulu dikenal sebagai Gedung Museum PTT, adalah salah satu museum tertua di Bandung. 
          Didirikan pada tahun 1931, museum ini menyimpan koleksi bersejarah terkait perjalanan pos, telekomunikasi, 
          dan telegraf di Indonesia sejak zaman kolonial Belanda.
        </p>
      </div>
    </header>
  );
}
