"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    title: "Gustaaf Willem Baron van Imhoff (1746)",
    description:
      "Pada masa Gubernur Jenderal Gustaaf Willem Baron van Imhoff, sistem pos di Hindia Belanda mulai diperkenalkan untuk menghubungkan Batavia dengan daerah lain.",
  },
  {
    image: "museum3.jpeg",
    title: "Kantor Pos Bandung (1906)",
    description:
      "Bangunan megah Kantor Pos Bandung yang kini menjadi Museum Pos Indonesia berdiri pada tahun 1906 sebagai pusat aktivitas pos dan telegraf.",
  },
  {
    image: "museum4.jpeg",
    title: "Perkembangan Modern",
    description:
      "Memasuki era digital, Pos Indonesia terus berinovasi dengan layanan berbasis teknologi untuk menjawab kebutuhan komunikasi masa kini.",
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
    <section className="bg-white text-gray-900 py-20 px-5 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide uppercase">
          SEJARAH POS INDONESIA
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {sejarahData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md p-4"
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
            <div className="w-full h-64 rounded-lg overflow-hidden">
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
