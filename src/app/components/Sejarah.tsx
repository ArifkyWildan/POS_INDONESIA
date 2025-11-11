"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

// Import font Bebas Neue dari Google Fonts via Next.js (auto optimized)
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

// --- Tipe data item sejarah ---
interface SejarahItem {
  image: string;
  title: string;
  description: string;
}

// --- Data sejarah ---
const sejarahData: SejarahItem[] = [
  {
    image: "/museum2.jpeg",
    title: "Gustaaf Willem Baron van Imhoff (1705 - 1750)",
    description:
      "Gustaaf Willem Baron van Imhoff adalah Gubernur Jenderal VOC yang berperan besar dalam perkembangan awal sistem pos di Indonesia. Ia lahir di Leer, Jerman, pada 8 Agustus 1705, dan meninggal dunia di Batavia pada 1 November 1750. Sebagai pemimpin pemerintahan, ia dikenal memiliki pandangan maju dan menyadari pentingnya sistem komunikasi yang efisien. Atas inisiatifnya, kantor pos pertama di Batavia resmi dibuka — menjadi awal mula layanan pos di Indonesia.",
  },
  {
    image: "/museum3.jpeg",
    title: "KANTOR POS PERTAMA di Indonesia (26 agustus 1946)",
    description:
      "Kantor pos pertama ini didirikan pada 26 Agustus 1746. Tujuannya adalah untuk menjamin keamanan surat-surat yang dikirim, terutama bagi mereka yang bepergian ke atau dari negeri Belanda. Dalam operasionalnya, kantor pos tersebut dikelola oleh dua orang Postmeester, dibantu oleh dua orang Kerani (klerk) serta beberapa pengantar pos. Mereka bertugas melayani masyarakat dan memastikan setiap surat sampai dengan aman ke tujuannya.",
  },
  {
    image: "/museum4.jpeg",
    title: "Asal usul istilah kantor pos",
    description:
      "Dari sisi bahasa, istilah “kantor” berasal dari kata Belanda “Comptoir”, yang kemudian berkembang menjadi “Kantoor” dan diserap ke dalam Bahasa Indonesia. Sementara kata “pos” berakar dari bahasa Latin “Ponere”, yang berarti “menempatkan”. Istilah ini mengalami perubahan bentuk menjadi “Posta” dalam Bahasa Italia, “Poste” dalam Bahasa Prancis, dan “Post” dalam Bahasa Inggris, Belanda, serta Jerman. Pada masa pemerintahan Gubernur Jenderal Daendels, istilah “Post Comptoir” mulai digunakan untuk menyebut lembaga pengiriman surat. Seiring waktu, sebutan ini berubah menjadi “Postkantoor”, yang dalam Bahasa Indonesia dikenal hingga kini sebagai “Kantor Pos”.",
  },
];

// --- Ikon panah ---
const ArrowIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M5 12h14"></path>
    <path d="M12 5l7 7-7 7"></path>
  </svg>
);

// --- Komponen utama ---
const Sejarah: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<SejarahItem | null>(null);

  return (
    <section className="bg-white text-indigo-900 py-20 px-5 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-12">
        {/* ✅ Judul menggunakan font Bebas Neue */}
        <h2
          className={`${bebasNeue.className} text-3xl md:text-5xl font-bold tracking-wide uppercase text-[#2E3192]`}
        >
          SEJARAH POS INDONESIA
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {sejarahData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-gray-100 border border-gray-200 rounded-2xl p-4 px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center min-h-[4rem]">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <button
                onClick={() => setSelectedItem(item)}
                className="text-gray-700 hover:text-orange-500 transition-colors flex-shrink-0 ml-4"
                aria-label="Lihat detail"
              >
                <ArrowIcon />
              </button>
            </div>

            {/* Garis */}
            <div className="border-b border-gray-300 mt-3 mb-5"></div>

            {/* Gambar */}
            <div className="w-full h-54 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://placehold.co/400x300/e0e0e0/333333?text=Image+Error";
                }}
              />
            </div>

            <div className="border-b border-gray-300 mt-5 mb-4"></div>

            {/* Deskripsi singkat */}
            <div className="text-left">
              <p className="text-gray-700 leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal detail */}
      {selectedItem && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/40"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-lg w-full p-6 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-3 text-[#2E3192]">
              {selectedItem.title}
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {selectedItem.description}
            </p>
            <button
              onClick={() => setSelectedItem(null)}
              className="mt-6 bg-[#2E3192] hover:bg-[#24276B] transition-colors px-5 py-2 rounded-xl font-semibold text-white"
            >
              Tutup
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Sejarah;
