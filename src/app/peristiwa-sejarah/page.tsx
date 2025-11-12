"use client";

import React, { FC } from "react";
import Link from "next/link";

// Warna yang diminta oleh user
const DARK_BLUE = "#172b60"; // Warna Utama, seperti teks dan border
const BRIGHT_BLUE = "#24459d"; // Warna Aksen, seperti hover dan highlight

// Data konten diambil dari gambar kedua yang diunggah
const historicalData = [
  {
    title: "UUD 1945",
    description:
      "Berbagai penerbitan prangko sebagai media komunikasi, terutama pada masa perjuangan kemerdekaan, telah digunakan untuk menunjukkan keunggulan untuk penanaman bangsa terhadap pemerahan. Prangko seri Proklamasi (1945) adalah seri pertama yang dikeluarkan oleh pemerintah Indonesia. Meskipun prangko ini berfungsi sebagai lambang negara, kualitasnya turut mencitrakan prangko perjuangan yang dikeluarkan oleh negara yang baru merdeka ini.",
    stamps: [
      "/peristiwa1.webp",
      "/peristiwa2.webp",
      "/peristiwa3.webp",
      "/peristiwa4.webp",
    ],
  },
  {
    title: "PRANGKO BERNAFASKAN PERJUANGAN",
    description:
      "Di tengah demokrasi parlementer, awal tahun 1957 muncul pelukisan tokoh-tokotoh yang telah tiada di antara yang pertama. Pemerintah mengeluarkan prangko untuk melukiskan perjuangan dan kontrol percetakan di Haarlem, Belanda (pada 1952). Selain itu, prangko seri Penjajahan yang dikeluarkan pada tahun 1968 dilukiskan oleh G. K. P. R. S. H. S. A.",
    stamps: [
      "/peristiwa5.webp",
      "/peristiwa6.webp",
      "/peristiwa7.webp",
    ],
  },
  {
    title: "KONFERENSI ASIA-AFRIKA",
    description:
      "Konferensi Asia-Afrika diselenggarakan pada tanggal 18-24 April 1955. Penggabungan blok-blok negara, yang secara keseluruhan terjadi berkat inisiatif para pemimpin Burma (Myanmar), India, Indonesia, Pakistan dan Sri Lanka (Ceylon). Perangko yang bertemakan Konferensi Asia-Afrika dan Timur Tengah. Prinsip-prinsip utama Konferensi Asia-Afrika, yang disebut 'Dasasila Bandung', di dalamnya termuat komitmen terhadap perdamaian dunia, kerjasama, dan hak asasi manusia. Prangko seri Konferensi Asia-Afrika 1955, merupakan seri pertama dengan tema event penting yang juga diserta desain original yang menarik perhatian.",
    stamps: [
      "/peristiwa8.webp",
      "/peristiwa9.webp",
    ],
  },
];

// Komponen item prangko
interface StampItemProps {
  title: string;
  description: string;
  stamps: string[];
  reverse?: boolean;
}

const StampItem: FC<StampItemProps> = ({
  title,
  description,
  stamps,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-8 py-10 border-b border-gray-400/50 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Kolom Kiri */}
      <div className="md:w-1/2 flex flex-col justify-start">
        <h2
          className={`font-serif text-3xl md:text-4xl leading-tight mb-4 ${
            reverse ? "md:text-right" : ""
          }`}
          style={{ color: DARK_BLUE }}
        >
          {title}
        </h2>
        <p
          className={`font-sans text-gray-700 text-sm md:text-base tracking-wide ${
            reverse ? "md:text-right" : ""
          }`}
        >
          {description}
        </p>
      </div>

      {/* Kolom Kanan */}
      <div className="md:w-1/2 flex justify-center items-center p-4 bg-gray-50/70 rounded-lg shadow-inner">
        <div className="flex flex-wrap justify-center gap-3">
          {stamps.map((src, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={src}
                alt={`Prangko ${title} - ${index + 1}`}
                className="w-24 h-32 md:w-28 md:h-36 object-cover border-4 border-white shadow-lg rotate-1 transition transform hover:scale-105 hover:rotate-0"
                style={{
                  filter: "saturate(0.9) brightness(1.05)",
                  borderRadius: "2px",
                }}
              />
              <span className="text-xs mt-1 text-gray-500 font-sans italic">
                Seri {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Komponen Utama
const App: FC = () => {
  return (
    <div
      className="min-h-screen font-serif text-gray-800"
      style={{
        background: `
          linear-gradient(135deg, #e3eeff 0%, #f8fafc 40%, #dbeafe 100%),
          url('https://www.transparenttextures.com/patterns/paper-fibers.png')
        `,
        backgroundBlendMode: "overlay",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Top Navigation Bar */}
      <div 
        className="w-full py-4 px-6 shadow-md"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <Link
            href="/prangko"
            className="flex items-center gap-2 text-sm font-sans font-semibold transition duration-150"
            style={{ color: DARK_BLUE }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.color = BRIGHT_BLUE;
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.color = DARK_BLUE;
            }}
          >
            <span className="text-2xl">&larr;</span>
            <span>Kembali</span>
          </Link>
          
          <div className="text-center">
            <h1 className="font-bold tracking-wider" style={{ fontSize: '28px' }}>
              <span style={{ color: DARK_BLUE }}>POS</span>{' '}
              <span style={{ color: '#ef4444' }}>IND</span>
            </h1>
          </div>
          
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl py-10">
        {/* Header */}
        <header className="mb-10 pt-4 relative">
          <h1
            className="text-center font-serif text-5xl md:text-7xl font-bold tracking-wider uppercase pt-8 pb-3"
            style={{
              color: DARK_BLUE,
              borderBottom: `2px solid ${DARK_BLUE}`,
            }}
          >

            Peristiwa Bersejarah
          </h1>
        </header>

        {/* Pendahuluan */}
        <section
          className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-gray-50 border-4 shadow-xl rounded-lg"
          style={{ borderColor: `${DARK_BLUE}20` }}
        >
          <div
            className="md:col-span-1 pr-4"
            style={{ borderRight: `1px solid ${DARK_BLUE}50` }}
          >
            <h3
              className="font-sans text-xs uppercase tracking-widest mb-3 font-semibold"
              style={{ color: BRIGHT_BLUE }}
            >
              Koleksi Khusus
            </h3>
            <p className="text-sm font-sans text-gray-700 italic">
              Prangko sebagai medium visual sejarah bangsa.
            </p>
            <div
              className="mt-4 p-3 rounded-lg"
              style={{ backgroundColor: `${BRIGHT_BLUE}10` }}
            >
              <p
                className="text-xs font-sans font-medium"
                style={{ color: DARK_BLUE }}
              >
                "Prangko adalah duta kecil yang tak pernah bicara, namun
                menceritakan seluruh sejarah."
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-serif text-6xl md:text-8xl leading-none font-extrabold text-gray-900 mb-2">
              Warisan
            </p>
            <p
              className="font-serif text-3xl md:text-5xl leading-tight italic"
              style={{ color: BRIGHT_BLUE }}
            >
              Seri Pertama Republik
            </p>
            <p className="text-sm font-sans text-gray-700 mt-3">
              Sebuah ulasan mendalam mengenai prangko-prangko yang merekam
              momen-momen kunci dalam pembentukan negara Republik Indonesia,
              dari Proklamasi hingga Konferensi Asia-Afrika.
            </p>
          </div>
        </section>

        {/* Konten Utama */}
        <main className="divide-y divide-gray-300/50">
          {historicalData.map((item, index) => (
            <StampItem
              key={index}
              title={item.title}
              description={item.description}
              stamps={item.stamps}
              reverse={index % 2 !== 0}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;
