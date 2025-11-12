"use client";

import React, { useState, useMemo } from "react";

// --- DATA MOCKUP PRANGKO ---
// Tipe data untuk kategori filter
type StampCategory = "Flora" | "Fauna" | "Keduanya";
type FilterOption = "Semua" | StampCategory;

interface Stamp {
  id: number;
  title: string;
  category: StampCategory;
  denomination: number;
  year: number;
  description: string;
  image: string;
}

const initialStamps: Stamp[] = [
  {
    id: 1,
    title: "Anggrek Bulan (Phalaenopsis)",
    category: "Flora",
    denomination: 3000,
    year: 1993,
    description:
      "Diterbitkan dalam seri Flora Nasional, Anggrek Bulan adalah representasi keindahan alam Indonesia. Seri ini mendukung gerakan perlindungan dan pembangunan lingkungan hidup berkelanjutan, seperti yang dicanangkan sejak tahun 1993.",
    image: "https://placehold.co/400x500/A0DE99/333?text=Anggrek+Bulan",
  },
  {
    id: 2,
    title: "Badak Jawa (Rhinoceros sondaicus)",
    category: "Fauna",
    denomination: 3000,
    year: 2005,
    description:
      "Salah satu spesies badak paling terancam di dunia. Prangko ini diterbitkan untuk menyuarakan upaya konservasi di Taman Nasional Ujung Kulon, fokus pada perlindungan satwa langka Indonesia.",
    image: "https://placehold.co/400x500/C5D8B4/333?text=Badak+Jawa",
  },
  {
    id: 3,
    title: "Burung Cendrawasih (Paradiseidae)",
    category: "Fauna",
    denomination: 3000,
    year: 1995,
    description:
      "Burung dari surga asal Papua, dikenal karena bulunya yang eksotis. Prangko seri ini bagian dari upaya promosi keragaman hayati Indonesia yang disebarluaskan ke 26 provinsi.",
    image: "https://placehold.co/400x500/E59C7D/333?text=Cendrawasih",
  },
  {
    id: 4,
    title: "Penyu Lekang (Lepidochelys olivacea)",
    category: "Fauna",
    denomination: 1500,
    year: 2008,
    description:
      "Bagian dari 'Seri Kehidupan Bawah Laut', prangko ini menampilkan Penyu Lekang, salah satu jenis penyu yang dilindungi. Diterbitkan untuk meningkatkan kesadaran konservasi laut.",
    image: "https://placehold.co/400x500/7DB9DE/fff?text=Penyu+Lekang",
  },
  {
    id: 5,
    title: "Hari Prangko Ecophila 1998",
    category: "Flora", // Menggunakan 'Flora' sebagai kategori umum untuk tema alam (river/air)
    denomination: 700,
    year: 1998,
    description:
      "Seri peringatan Hari Lingkungan Hidup Sedunia (5 Juni 1998). Prangko ini mengangkat isu 'Ecophila' (Cinta Lingkungan) untuk menumbuhkan kesadaran perlindungan ekosistem yang berkelanjutan.",
    image: "https://placehold.co/400x500/6A9D78/fff?text=Ecophila+1998",
  },
];

type ViewState = 'COLLECTION' | 'STAMP_DETAIL';

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
const StampCard: React.FC<{ stamp: Stamp; isLarge: boolean; onSelectStamp: (id: number) => void }> = ({
  stamp,
  isLarge,
  onSelectStamp,
}) => {
  const bgColors: string = isLarge
    ? "bg-[#F0F4F8]"
    : stamp.category === "Flora"
    ? "bg-[#E3E8EC]"
    : "bg-[#D6DBDF]";
  const textColor: string = "text-gray-900";
  const accentColor: string = "text-[#24459d]";

  return (
    <div
      className={`relative p-5 rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1 ${bgColors} ${
        isLarge ? "h-full md:col-span-1 row-span-2" : "h-[300px] md:h-[350px]"
      } cursor-pointer`}
      onClick={() => onSelectStamp(stamp.id)} // Make the whole card clickable
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
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = `https://placehold.co/400x500/CC5500/fff?text=Error`;
          }}
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Tag className="bg-[#172b60] text-white">
            {stamp.category.toUpperCase()}
          </Tag>
          <Tag className="bg-[#24459d] text-white">{stamp.year}</Tag>
        </div>

        <h3 className={`font-serif text-2xl md:text-3xl font-bold mb-2 ${textColor} truncate`}>
          {stamp.title}
        </h3>
        <p className={`text-sm font-medium mb-4 ${textColor}`}>
          Nominal:{" "}
          <span className="font-extrabold text-[#172b60]">
            Rp {stamp.denomination.toLocaleString("id-ID")}
          </span>
        </p>

        {isLarge && (
          <p className="text-sm italic mb-4 flex-grow text-gray-700 line-clamp-3">
            {stamp.description}
          </p>
        )}
      </div>

      {/* Changed <a> to <button> and added primary click handler */}
      <button
        onClick={(e) => { e.stopPropagation(); onSelectStamp(stamp.id); }}
        className={`group flex items-center justify-between text-sm font-semibold mt-4 py-2 border-t border-gray-400 ${accentColor} hover:text-[#172b60] transition duration-150`}
      >
        LIHAT DETAIL
        <ArrowRightIcon />
      </button>
    </div>
  );
};

// --- STAMP DETAIL VIEW COMPONENT ---
const StampDetailView: React.FC<{ stamp: Stamp }> = ({ stamp }) => {
    return (
        <div className="p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100 min-h-[70vh]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                <div className="lg:col-span-1">
                    <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
                        <img
                            src={stamp.image}
                            alt={stamp.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).onerror = null;
                                (e.target as HTMLImageElement).src = `https://placehold.co/400x500/CC5500/fff?text=Error`;
                            }}
                        />
                    </div>
                    <div className="mt-6 p-4 border rounded-xl bg-gray-50">
                        <p className="text-sm text-gray-600 mb-2">Diterbitkan pada</p>
                        <Tag className="bg-[#24459d] text-white text-lg py-1 px-4">{stamp.year}</Tag>
                        <div className="mt-4 border-t pt-3">
                            <p className="text-sm text-gray-600 mb-1">Kategori</p>
                            <Tag className="bg-[#172b60] text-white text-lg py-1 px-4">{stamp.category.toUpperCase()}</Tag>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#172b60] mb-4 leading-tight">
                        {stamp.title}
                    </h1>
                    
                    <p className="text-xl font-semibold text-gray-700 mb-6">
                        Nilai Nominal:{" "}
                        <span className="font-extrabold text-red-600 text-3xl">
                            Rp {stamp.denomination.toLocaleString("id-ID")}
                        </span>
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4 mt-8">
                        Latar Belakang dan Konteks
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed indent-6">
                        {stamp.description}
                    </p>
                    
                    <div className="mt-10 p-6 bg-[#E3E8EC] rounded-xl border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Tentang Seri</h3>
                        <p className="text-sm text-gray-600">
                            Prangko ini adalah bagian dari seri khusus yang menekankan pada konservasi alam Indonesia. Koleksi ini diharapkan dapat menumbuhkan kesadaran kolektor dan masyarakat akan pentingnya pelestarian **Flora** dan **Fauna** nasional.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- MAIN COMPONENT ---
const filterOptions: FilterOption[] = ["Semua", "Flora", "Fauna"];

export default function App() {
  const [filter, setFilter] = useState<FilterOption>("Semua");
  const [view, setView] = useState<ViewState>('COLLECTION');
  const [selectedStampId, setSelectedStampId] = useState<number | null>(null);

  const title: string = "Koleksi Prangko Indonesia";
  const subtitle: string = "Seri Flora & Fauna";

  const filteredStamps: Stamp[] = useMemo(() => {
    let list = initialStamps;
    if (filter !== "Semua") {
      list = list.filter((stamp) => stamp.category === (filter as StampCategory));
    }
    list.sort((a, b) => b.year - a.year);
    return list;
  }, [filter]);

  const mainStamp: Stamp | null = filteredStamps[0] || null;
  const secondaryStamps: Stamp[] = filteredStamps.slice(1);

  const selectedStamp: Stamp | null = useMemo(() => {
    return initialStamps.find(s => s.id === selectedStampId) || null;
  }, [selectedStampId]);

  const handleSelectStamp = (id: number): void => {
      setSelectedStampId(id);
      setView('STAMP_DETAIL');
  };

  // Diubah: handleBack hanya menangani transisi state internal (dari detail ke koleksi)
  const handleBack = (): void => {
    if (view === 'STAMP_DETAIL') {
      setView('COLLECTION');
      setSelectedStampId(null);
    }
  };

  // Tentukan teks tombol kembali berdasarkan tampilan
  const backButtonText = view === 'STAMP_DETAIL' ? 'Kembali ke Koleksi' : 'Kembali';

  // --- RENDER DETAIL VIEW (Menggunakan <button> dan handleBack) ---
  if (view === 'STAMP_DETAIL' && selectedStamp) {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <script src="https://cdn.tailwindcss.com"></script>
            <style>{`
                body { font-family: 'Inter', sans-serif; }
                .font-serif { font-family: 'Georgia', serif; }
                .bg-gradient-header {
                  background-image: linear-gradient(135deg, #172b60 0%, #24459d 100%);
                }
            `}</style>
            
            {/* --- TOP NAVIGATION BAR --- */}
            <div className="bg-white border-b border-gray-200 py-4 px-4 md:px-8 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button // Menggunakan BUTTON untuk fungsi internal (Kembali ke Koleksi)
                        onClick={handleBack}
                        className="flex items-center text-[#172b60] hover:text-[#24459d] font-semibold transition-colors duration-200"
                    >
                        <ArrowLeftIcon />
                        {backButtonText}
                    </button>
                    
                    <div className="flex items-center">
                        <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
                            <span className="text-[#172b60]">POS</span>
                            <span className="text-red-600"> IND</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-4 md:p-8 max-w-7xl mx-auto">
                <StampDetailView stamp={selectedStamp} />
            </div>
        </div>
    );
  }

  // --- RENDER COLLECTION VIEW (Menggunakan <a> dan href) ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        /* Setting 'Inter' as the default font as per core principles */
        body { font-family: 'Inter', sans-serif; }
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
      <div className="bg-white border-b border-gray-200 py-4 px-4 md:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a // Menggunakan A tag dan HREF untuk navigasi eksternal
            href="/prangko"
            className="flex items-center text-[#172b60] hover:text-[#24459d] font-medium transition-colors duration-200"
          >
            <ArrowLeftIcon />
            {backButtonText}
          </a>
          
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
                {filterOptions.map((cat: FilterOption) => (
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
                  <StampCard 
                    stamp={mainStamp} 
                    isLarge={true} 
                    onSelectStamp={handleSelectStamp} 
                  />
                </div>
              )}
              {secondaryStamps.map((stamp) => (
                <StampCard 
                  key={stamp.id} 
                  stamp={stamp} 
                  isLarge={false} 
                  onSelectStamp={handleSelectStamp} 
                />
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