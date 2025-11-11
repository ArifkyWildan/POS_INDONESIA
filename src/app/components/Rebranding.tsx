"use client";

import React from "react";
import { Bebas_Neue } from "next/font/google";

// Import font dari Google Fonts (Next.js otomatis optimalkan)
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

// Asumsi 'motion' (Framer Motion) tersedia di lingkungan ini
// FIX: Filter out Framer Motion specific props (initial, whileInView, viewport, transition)
// to prevent warnings when passing them to native DOM elements (h2 and div).
const motion = {
  h2: ({ initial, whileInView, viewport, transition, ...props }: any) => (
    <h2 {...props}>{props.children}</h2>
  ),
  div: ({ initial, whileInView, viewport, transition, ...props }: any) => (
    <div {...props}>{props.children}</div>
  ),
};

// Define necessary types/interfaces inline for self-contained file
interface Logo {
  src: string;
  alt: string;
}

const App: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>(null);

  const logos: (Logo & { title: string; desc: string })[] = [
    {
      src: "/logopos1.jpeg",
      alt: "PN POSTEL 1956-1965",
      title: "Logo PTT (1946)",
      desc: "Tahun 1961, status Jawatan berubah menjadi PN POSTEL sesuai PP No. 240 Tahun 1961.",
    },
    {
      src: "/logopos2.jpeg",
      alt: "PN POSTEL 1956-1965",
      title: "Logo Pos dan Giro (1965)",
      desc: "PN POSTEL dipecah menjadi PN Pos & Giro dan PN Telekomunikasi melalui PP No. 29 & 30 Tahun 1965.",
    },
    {
      src: "/logopos3.jpeg",
      alt: "Logo PT Pos Indonesia (Persero) 1995",
      title: "Logo Pos Indonesia (1995)",
      desc: "Menampilkan burung merpati pos yang melambangkan kecepatan, kebebasan, dan jangkauan global.",
    },
    {
      src: "/logopos4.jpeg",
      alt: "Keputusan Direksi Nomor 95/Dirut/1112",
      title: "Logo Pos Indonesia Modern",
      desc: "Burung merpati terbang lurus ke depan melambangkan kecepatan, ketepatan, dan kepercayaan.",
    },
    {
      src: "/posind-logo.png",
      alt: "Keputusan Direksi Nomor 95/Dirut/1112",
      title: "Logo Pos Indonesia Modern",
      desc: "Burung merpati terbang lurus ke depan melambangkan kecepatan, ketepatan, dan kepercayaan.",
    },
  ];

  const animationProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <section
      ref={sectionRef}
      id="rebranding"
      className="py-20 md:pt-32 bg-white text-gray-800 min-h-screen flex items-start justify-center"
    >
      <style>{`
        .glass-overlay {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          background-color: rgba(255, 255, 255, 0.4);
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Judul utama menggunakan font Bebas Neue */}
        <motion.h2
          className={`${bebasNeue.className} text-3xl md:text-5xl font-bold text-center mb-16 uppercase text-[#2E3192] tracking-wide`}
          {...animationProps}
        >
          Re-Branding Logo Pos IND
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center justify-center h-60 p-6 bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer border border-gray-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-28 w-auto transition-transform duration-500 group-hover:scale-110 object-contain"
              />
              <p className="mt-4 text-sm font-medium text-gray-600 truncate max-w-full">
                {logo.title}
              </p>

              <div className="glass-overlay absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 text-center rounded-2xl">
                <h3
                  className="text-lg md:text-xl font-bold mb-2"
                  style={{ color: "#2E3192" }}
                >
                  {logo.title}
                </h3>
                <p
                  className="text-xs md:text-base leading-snug"
                  style={{ color: "#2E3192" }}
                >
                  {logo.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
