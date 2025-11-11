"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

// --- DATA MOCKUP PRANGKO ---
interface Stamp {
  id: number;
  title: string;
  category: "Flora" | "Fauna" | "Keduanya";
  denomination: number;
  year: number;
  description: string;
  image: string;
}

const initialStamps: Stamp[] = [
  {
    id: 1,
    title: "Bunga Anggrek Bulan",
    category: "Flora",
    denomination: 3000,
    year: 1993,
    description:
      "Anggrek Bulan (Phalaenopsis amabilis) adalah salah satu bunga nasional Indonesia. Prangko ini diterbitkan dalam seri konservasi alam.",
    image: "https://placehold.co/400x500/A0DE99/333?text=Anggrek+Bulan",
  },
  {
    id: 2,
    title: "Komodo (Varanus komodoensis)",
    category: "Fauna",
    denomination: 2500,
    year: 1993,
    description:
      "Reptil purba endemik Pulau Komodo dan pulau sekitarnya. Prangko seri ini menekankan perlindungan satwa langka Indonesia.",
    image: "https://placehold.co/400x500/77A19E/333?text=Komodo",
  },
  {
    id: 3,
    title: "Burung Cendrawasih",
    category: "Fauna",
    denomination: 3000,
    year: 1995,
    description:
      "Burung dari surga (Paradiseidae) yang berasal dari Papua. Dikenal karena keindahan bulunya yang luar biasa.",
    image: "https://placehold.co/400x500/E59C7D/333?text=Cendrawasih",
  },
  {
    id: 4,
    title: "Pohon Meranti (Shorea)",
    category: "Flora",
    denomination: 5000,
    year: 1998,
    description:
      "Salah satu jenis kayu komersial utama di hutan tropis Indonesia. Prangko ini menyoroti kekayaan flora hutan.",
    image: "https://placehold.co/400x500/808A4D/fff?text=Pohon+Meranti",
  },
  {
    id: 5,
    title: "Badak Jawa (Rhinoceros sondaicus)",
    category: "Fauna",
    denomination: 3000,
    year: 2005,
    description:
      "Salah satu spesies badak yang paling terancam punah. Hidup di Taman Nasional Ujung Kulon.",
    image: "https://placehold.co/400x500/C5D8B4/333?text=Badak+Jawa",
  },
];

// --- ICON COMPONENTS ---
const ArrowRightIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ArrowLeftIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

// --- TAG COMPONENT ---
const Tag: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "bg-gray-700",
}) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium text-white ${className}`}
  >
    {children}
  </span>
);

// --- STAMP CARD COMPONENT ---
const StampCard: React.FC<{ stamp: Stamp; isLarge: boolean }> = ({
  stamp,
  isLarge,
}) => {
  const bgColors = isLarge
    ? "bg-[#F0F4F8]"
    : stamp.category === "Flora"
    ? "bg-[#E3E8EC]"
    : "bg-[#D6DBDF]";
  const textColor = "text-gray-900";
  const accentColor = "text-[#24459d]";

  return (
    <div
      className={`relative p-5 rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1 ${bgColors} ${
        isLarge ? "h-full md:col-span-1 row-span-2" : "h-[300px] md:h-[350px]"
      }`}
    >
      <div
        className={`flex-shrink-0 ${
          isLarge ? "h-64" : "h-32"
        } w-full rounded-xl mb-4 overflow-hidden shadow-lg`}
      >
        <img
          src={stamp.image}
          alt={stamp.title}
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Tag className="bg-[#172b60] text-white">
            {stamp.category.toUpperCase()}
          </Tag>
          <Tag className="bg-[#24459d] text-white">{stamp.year}</Tag>
        </div>

        <h3 className={`font-serif text-3xl font-bold mb-2 ${textColor}`}>
          {stamp.title}
        </h3>
        <p className={`text-sm font-medium mb-4 ${textColor}`}>
          Nilai Nominal:{" "}
          <span className="font-extrabold text-[#172b60]">
            Rp {stamp.denomination.toLocaleString("id-ID")}
          </span>
        </p>

        {isLarge && (
          <p className="text-sm italic mb-4 flex-grow text-gray-700">
            {stamp.description}
          </p>
        )}
      </div>

      <a
        href="#"
        className={`group flex items-center justify-between text-sm font-semibold mt-4 py-2 border-t border-gray-400 ${accentColor} hover:text-[#172b60] transition duration-150`}
      >
        LIHAT DETAIL
        <ArrowRightIcon />
      </a>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function App() {
  const router = useRouter();
  const [filter, setFilter] = useState<"Semua" | "Flora" | "Fauna">("Semua");

  const title = "Koleksi Prangko Indonesia";
  const subtitle = "Seri Flora & Fauna";

  const filteredStamps = useMemo(() => {
    let list = initialStamps;
    if (filter !== "Semua") {
      list = list.filter((stamp) => stamp.category === filter);
    }
    list.sort((a, b) => b.year - a.year);
    return list;
  }, [filter]);

  const mainStamp = filteredStamps[0] || null;
  const secondaryStamps = filteredStamps.slice(1);

  const handleBackToPrangko = () => {
    router.push("/prangko");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        .font-serif { font-family: 'Georgia', serif; }
        .bg-gradient-header {
          background-image: linear-gradient(135deg, #172b60 0%, #24459d 100%);
        }
        .filter-button.active {
          background-color: #24459d;
          color: #fff;
          font-weight: 700;
        }
      `}</style>

      {/* --- TOP NAVIGATION BAR --- */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBackToPrangko}
            className="flex items-center text-[#172b60] hover:text-[#24459d] font-medium transition-colors duration-200"
          >
            <ArrowLeftIcon />
            Kembali
          </button>
          
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
              <span className="text-[#172b60]">POS</span>
              <span className="text-red-600"> IND</span>
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* --- HEADER --- */}
          <header className="mb-8 p-6 rounded-3xl shadow-xl bg-gradient-header text-white relative">
            <p className="text-sm font-light uppercase tracking-widest opacity-80 mb-1">
              {title}
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-extrabold leading-tight">
              {subtitle}
            </h1>

            {/* Filter Buttons */}
            <div className="mt-6 flex justify-start">
              <div className="flex space-x-2 p-1 bg-white/20 rounded-xl">
                {(["Semua", "Flora", "Fauna"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`filter-button px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ${
                      filter === cat
                        ? "active"
                        : "text-white/80 hover:bg-white/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </header>

          {/* --- GRID CONTENT --- */}
          {filteredStamps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
              {mainStamp && (
                <div className="md:col-span-1 md:row-span-2">
                  <StampCard stamp={mainStamp} isLarge={true} />
                </div>
              )}
              {secondaryStamps.map((stamp) => (
                <StampCard key={stamp.id} stamp={stamp} isLarge={false} />
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-white rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-700">
                Prangko Tidak Ditemukan
              </h2>
              <p className="text-gray-500 mt-2">Coba ganti filter Anda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}