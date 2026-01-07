"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Layers } from 'lucide-react';

// --- INTERFACE (Tipe Data) ---
interface Stamp {
  id: string;
  title: string;
  year: number;
  artist: string;
  image: string;
  location: string;
  description: string;
  color: string;
}

interface StampCardProps {
  stamp: Stamp;
  index: number;
  totalCards: number;
  onClick: (id: string) => void;
}

interface StampListProps {
  onSelectStamp: (id: string) => void;
}

interface StampTypeInfo {
  title: string;
  description: string;
}

// --- DATA STAMP ---
const STAMPS_DATA: Stamp[] = [
  {
    id: '1',
    title: 'Prangko Keberagaman Budaya Nusantara',
    year: 1950,
    artist: 'Keberagaman Budaya Nusantara',
    image: '/budaya.webp',
    location: 'National Museum of Art, Jakarta',
    description: 'Prangko pertama yang dikeluarkan setelah pengakuan kedaulatan Indonesia...',
    color: '#172b60',
  },
  {
    id: '2',
    title: 'Prangko Flora dan Fauna',
    year: 1975,
    artist: 'Flora & Fauna',
    image: '/hewan.webp',
    location: 'Museum Filateli Indonesia, Bandung',
    description: 'Bagian dari seri Warisan Budaya...',
    color: '#24459d',
  },
  {
    id: '3',
    title: 'Prangko Bersejarah',
    year: 1990,
    artist: 'Prangko Bersejarah',
    image: '/bersejarah.webp',
    location: 'Koleksi Pribadi, Jakarta',
    description: 'Dirilis untuk mempromosikan upaya konservasi...',
    color: '#172b60',
  },
  {
    id: '4',
    title: 'Prangko Peristiwa Bersejarah',
    year: 2005,
    artist: 'Peristiwa Besejarah',
    image: '/peristiwa.webp',
    location: 'Museum Pos Indonesia, Bandung',
    description: 'Seri prangko yang didedikasikan untuk seni pertunjukan...',
    color: '#24459d',
  },
  {
    id: '5',
    title: 'Prangko Para Tokoh Indonesia',
    year: 2015,
    artist: 'Para Tokoh Indonesia',
    image: '/tokoh.webp',
    location: 'Museum Kearsipan Nasional',
    description: 'Prangko modern yang merayakan seni Batik...',
    color: '#172b60',
  },
  {
    id: '6',
    title: 'Prangko Prisma',
    year: 2020,
    artist: 'Andi Rahmat',
    image: '/prisma.jpg',
    location: 'Kementerian Komunikasi dan Informatika',
    description: 'Dirilis untuk mendukung pariwisata bahari...',
    color: '#24459d',
  },
];

// --- DATA JENIS PRANGKO ---
const STAMP_TYPES: Record<string, StampTypeInfo> = {
  definitif: {
    title: 'Prangko Definitif (Biasa)',
    description: 'Diterbitkan dalam jumlah besar, desainnya cenderung sama selama bertahun-tahun, digunakan untuk tarif pos sehari-hari. (Contoh: Seri Alat Musik Tradisional 1967)',
  },
  komemoratif: {
    title: 'Prangko Komemoratif (Peringatan)',
    description: 'Diterbitkan untuk memperingati suatu peristiwa, tokoh, atau ulang tahun penting. Hanya dicetak dalam waktu terbatas.',
  },
  udara: {
    title: 'Prangko Udara',
    description: 'Dikhususkan untuk pengiriman via pos udara (walaupun kini jarang dibedakan).',
  },
  dinas: {
    title: 'Prangko Dinas',
    description: 'Digunakan untuk surat-menyurat resmi antar instansi pemerintah, biasanya tidak dijual untuk umum.',
  },
};

// --- COMPONENT KARTU PRANGKO ---
const StampCard: React.FC<StampCardProps> = ({ stamp, index, totalCards, onClick }) => {
  const { title, year, artist, image, color } = stamp;
  const middleIndex = (totalCards - 1) / 2;
  const offset = index - middleIndex;
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024;
  
  const rotation = isMobile ? offset * 2.5 : offset * 4;
  const shiftX = isMobile ? offset * 45 : isTablet ? offset * 70 : offset * 110;
  const cardScale = 1 - Math.abs(offset) * (isMobile ? 0.05 : 0.03);
  const zIndex = 100 - Math.floor(Math.abs(offset));

  return (
    <motion.div
      className="absolute cursor-pointer w-32 h-48 xs:w-40 xs:h-56 sm:w-48 sm:h-64 md:w-56 md:h-80 lg:w-64 lg:h-96 rounded-lg sm:rounded-xl overflow-hidden shadow-2xl bg-white transform-gpu origin-bottom"
      style={{
        zIndex,
        x: shiftX,
        rotate: rotation,
        scale: cardScale,
        boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 6px 0 ${color}50`,
      }}
      whileHover={{
        scale: isMobile ? 1.03 : 1.05,
        zIndex: 200,
        y: isMobile ? -5 : -10,
        boxShadow: `0 30px 60px -15px rgba(0, 0, 0, 0.5), 0 0 15px 0 ${color}80`,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      onClick={() => onClick(stamp.id)}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3 md:p-4 flex flex-col justify-end text-white">
        <p className="text-[9px] xs:text-[10px] sm:text-xs font-light opacity-70 mb-0.5 sm:mb-1">{artist} / {year}</p>
        <h3 className="text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl font-bold leading-tight line-clamp-2">{title}</h3>
      </div>
    </motion.div>
  );
};

// --- COMPONENT POPUP MODAL ---
const StampTypeModal: React.FC<{ type: StampTypeInfo; onClose: () => void }> = ({ type, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-gradient-to-br from-[#172b60] to-[#24459d] rounded-3xl p-1 max-w-md w-full"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div className="bg-white rounded-[22px] p-6 relative">
          {/* Stamp Perforations */}
          <div className="absolute -top-2 left-0 right-0 flex justify-between px-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={`top-${i}`} className="w-3 h-3 rounded-full bg-gradient-to-br from-[#172b60] to-[#24459d]" />
            ))}
          </div>
          <div className="absolute -bottom-2 left-0 right-0 flex justify-between px-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={`bottom-${i}`} className="w-3 h-3 rounded-full bg-gradient-to-br from-[#172b60] to-[#24459d]" />
            ))}
          </div>
          <div className="absolute -left-2 top-0 bottom-0 flex flex-col justify-between py-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`left-${i}`} className="w-3 h-3 rounded-full bg-gradient-to-br from-[#172b60] to-[#24459d]" />
            ))}
          </div>
          <div className="absolute -right-2 top-0 bottom-0 flex flex-col justify-between py-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`right-${i}`} className="w-3 h-3 rounded-full bg-gradient-to-br from-[#172b60] to-[#24459d]" />
            ))}
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-[#172b60] text-white rounded-full flex items-center justify-center hover:bg-[#24459d] transition-colors z-10"
          >
            ✕
          </button>

          <div className="pt-8 pb-4">
            <h3 className="text-2xl font-bold text-center text-[#172b60] mb-6">
              {type.title}
            </h3>
            
            <p className="text-gray-700 text-sm leading-relaxed text-justify mb-6">
              {type.description}
            </p>

            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-[#172b60] to-[#24459d] px-4 py-2 rounded">
                <span className="text-white font-black text-xl tracking-tight">POS</span>
                <span className="text-white font-black text-xl tracking-tight">IND</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StampList: React.FC<StampListProps> = ({ onSelectStamp }) => {
  const totalCards = STAMPS_DATA.length;
  const [selectedStampType, setSelectedStampType] = useState<string | null>(null);
  
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 px-3 sm:px-4 pt-3 sm:pt-4 md:pt-6 pb-6">
      {/* Modal Popup */}
      <AnimatePresence>
        {selectedStampType && (
          <StampTypeModal
            type={STAMP_TYPES[selectedStampType]}
            onClose={() => setSelectedStampType(null)}
          />
        )}
      </AnimatePresence>

      {/* Header Museum Pos Indonesia */}
      <div className="w-full max-w-7xl mx-auto mb-4 sm:mb-6 md:mb-8">
        <div className="bg-gradient-to-r from-[#172b60] to-[#24459d] shadow-lg rounded-lg p-2.5 sm:p-3 md:p-4 flex items-center justify-between">
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/';
              }
            }}
            className="flex items-center space-x-1 sm:space-x-2 text-white hover:text-blue-100 transition-colors duration-200 font-semibold text-xs sm:text-sm md:text-base"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span>Kembali</span>
          </button>
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
            <span className="text-xs xs:text-sm sm:text-lg md:text-2xl lg:text-4xl font-black text-white tracking-wide sm:tracking-wider">
              MUSEUM POS INDONESIA
            </span>
          </div>
          <div className="flex items-center justify-center bg-white rounded px-2 sm:px-3 py-1 sm:py-1.5">
            <span className="text-[#172b60] font-black text-base sm:text-xl md:text-2xl tracking-tight">POS</span>
            <span className="text-[#172b60] font-black text-base sm:text-xl md:text-2xl tracking-tight">IND</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-6 md:mb-10 px-3 sm:px-4">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#172b60] via-[#24459d] to-[#172b60] mb-2 sm:mb-3 md:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Koleksi Filateli
        </motion.h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 mt-2 sm:mt-4">
          Jelajahi koleksi prangko bersejarah Indonesia.
        </p>
      </div>

      {/* Section Informasi Filateli - 3 Kolom */}
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 border-4 border-dashed border-gray-300 rounded-md p-1 bg-gray-50">
              <img src="1.png" alt="Prangko" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#172b60] mb-2">
                Kalian Tau apa itu Filateli?
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Filateli adalah studi, apresiasi, dan pengumpulan prangko dan benda-benda pos terkait <span className="font-semibold">(seperti amplop hari pertama, cap pos)</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-5 shadow-lg border-2 border-gray-200 flex flex-col items-center justify-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#172b60] mb-3 text-center">
              SHP
            </h3>
            <img src="3.png" alt="Koleksi Prangko Museum" className="w-full h-auto object-cover rounded-lg mb-3" />
            <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 text-center">
              Sampulan Hari Pertama
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 sm:p-5 shadow-lg border-2 border-blue-200">
            <div className="text-center mb-4">
              <p className="text-sm sm:text-base text-gray-700 font-medium mb-2">
                Dapatkan Bintang ini dengan cara
              </p>
              <p className="text-xs sm:text-sm text-blue-700 font-semibold">
                selesaikan tour pada halaman koleksi ini
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                  <polygon points="50,5 61,35 92,35 67,55 78,85 50,65 22,85 33,55 8,35 39,35" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                </svg>
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" style={{ clipPath: 'inset(0 0 90% 0)' }}>
                  <polygon points="50,5 61,35 92,35 67,55 78,85 50,65 22,85 33,55 8,35 39,35" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2" />
                </svg>
              </div>
              
              <div className="w-full">
                <div className="flex justify-between text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  <span>Progress</span>
                  <span>5/50 Poin</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full transition-all duration-500" style={{ width: '10%' }}></div>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-2">
                  Setiap bagian yang diselesaikan = 5 poin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Definisi dan Fungsi Prangko dengan 4 BUTTON POPUP */}
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4 w-full">
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border-2 border-gray-200">
          <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
            <div className="w-full md:w-48 lg:w-56 flex-shrink-0 border-8 border-gray-800 rounded-lg p-2 bg-white mx-auto md:mx-0">
              <img src="2.png" alt="Prangko Indonesia" className="w-full h-auto object-cover rounded" />
            </div>
            
            <div className="flex-1">
              <div className="bg-blue-50 rounded-lg p-4 sm:p-5 mb-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#24459d] mb-3">
                  Apa Definisi dan Fungsi Prangko?
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold">Prangko</span> adalah secarik kertas kecil yang dikeluarkan dan dijual oleh otoritas pos suatu negara. Prangko berfungsi untuk melunasi biaya pengiriman surat atau paket pos
                </p>
              </div>
              
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#172b60] mb-3">
                  Jenis Prangko Utama
                </h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedStampType('definitif')}
                    className="px-4 py-2 bg-[#172b60] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#24459d] transition-colors cursor-pointer"
                  >
                    Prangko Definitif (Biasa)
                  </button>
                  <button
                    onClick={() => setSelectedStampType('komemoratif')}
                    className="px-4 py-2 bg-[#24459d] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#172b60] transition-colors cursor-pointer"
                  >
                    Prangko Komemoratif (Peringatan)
                  </button>
                  <button
                    onClick={() => setSelectedStampType('udara')}
                    className="px-4 py-2 bg-[#172b60] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#24459d] transition-colors cursor-pointer"
                  >
                    Prangko Udara
                  </button>
                  <button
                    onClick={() => setSelectedStampType('dinas')}
                    className="px-4 py-2 bg-[#24459d] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#172b60] transition-colors cursor-pointer"
                  >
                    Prangko Dinas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Anatomi Prangko */}
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4 w-full">
        <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
          {/* Header dengan Prangko Kecil dan Jenis Prangko */}
          

          {/* Judul Anatomi Prangko */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172b60] text-center mb-8 sm:mb-10">
            ANATOMI PRANGKO
          </h2>

          {/* Layout Utama - 3 Kolom */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Kolom Kiri - Penjelasan Nilai Nominal & Nama Negara */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#172b60] mb-2">
                  Nilai Nominal (Harga)
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Angka yang menunjukkan biaya pos yang telah dibayar
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#172b60] mb-2">
                  Nama Negara
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Identitas negara penerbit (misalnya, INDONESIA, Rep. Indonesia).
                </p>
              </div>
            </div>

            {/* Kolom Tengah - Dua Prangko dengan Panah Anotasi */}
            <div className="lg:col-span-6 flex justify-center items-start">
              <div className="relative inline-block">
                {/* Container Dua Prangko */}
                <div className="flex gap-4 sm:gap-6">
                  {/* Prangko Kiri dengan Border Dashed */}
                  <div className="relative border-4 border-dashed border-blue-400 rounded-lg p-3 bg-white">
                    <img 
                      src="jokowi1.png" 
                    
                      className="w-32 sm:w-40 md:w-48 h-auto object-cover rounded shadow-lg"
                    />
                    
                    {/* Panah ke Nilai Nominal */}
                    <div className="absolute -left-20 top-8 hidden lg:block">
                      <svg width="80" height="2" className="stroke-[#172b60]">
                        <line x1="0" y1="1" x2="70" y2="1" strokeWidth="2" markerEnd="url(#arrowleft)" />
                        <defs>
                          <marker id="arrowleft" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#172b60" />
                          </marker>
                        </defs>
                      </svg>
                    </div>

                    {/* Panah ke Nama Negara */}
                    <div className="absolute -left-20 bottom-20 hidden lg:block">
                      <svg width="80" height="2" className="stroke-[#172b60]">
                        <line x1="0" y1="1" x2="70" y2="1" strokeWidth="2" markerEnd="url(#arrowleft2)" />
                        <defs>
                          <marker id="arrowleft2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#172b60" />
                          </marker>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Prangko Kanan dengan Border Dashed */}
                  <div className="relative border-4 border-dashed border-blue-400 rounded-lg p-3 bg-white">
                    <img 
                      src="hatta1.png" 
                      alt="Prangko 5000" 
                      className="w-32 sm:w-40 md:w-48 h-auto object-cover rounded shadow-lg"
                    />

                    {/* Panah ke Tahun Penerbitan */}
                    <div className="absolute -right-20 top-4 hidden lg:block">
                      <svg width="80" height="2" className="stroke-[#24459d]">
                        <line x1="10" y1="1" x2="80" y2="1" strokeWidth="2" markerStart="url(#arrowright1)" />
                        <defs>
                          <marker id="arrowright1" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M9,0 L9,6 L0,3 z" fill="#24459d" />
                          </marker>
                        </defs>
                      </svg>
                    </div>

                    {/* Panah ke Perforasi */}
                    <div className="absolute -right-20 top-1/2 hidden lg:block">
                      <svg width="80" height="2" className="stroke-[#24459d]">
                        <line x1="10" y1="1" x2="80" y2="1" strokeWidth="2" markerStart="url(#arrowright2)" />
                        <defs>
                          <marker id="arrowright2" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M9,0 L9,6 L0,3 z" fill="#24459d" />
                          </marker>
                        </defs>
                      </svg>
                    </div>

                    {/* Panah ke Gambar/Desain */}
                    <div className="absolute -right-20 bottom-8 hidden lg:block">
                      <svg width="80" height="2" className="stroke-[#24459d]">
                        <line x1="10" y1="1" x2="80" y2="1" strokeWidth="2" markerStart="url(#arrowright3)" />
                        <defs>
                          <marker id="arrowright3" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M9,0 L9,6 L0,3 z" fill="#24459d" />
                          </marker>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan - Penjelasan Tahun, Perforasi, Gambar */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#24459d] mb-2">
                  Tahun Penerbitan
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Biasanya tertera samar atau diketahui melalui katalog) menunjukkan kapan prangko tersebut sah digunakan.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#24459d] mb-2">
                  Perforasi (Gigi-gigi)
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Lubang-lubang kecil di tepi prangko yang memudahkannya untuk disobek dari lembar/blok prangko.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#24459d] mb-2">
                  Gambar/Desain
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Ilustrasi atau foto yang biasanya menjadi daya tarik utama dan tema prangko.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stamp Cards Container */}
      <div className="relative h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[550px] w-full max-w-7xl mx-auto flex justify-center items-center mb-12 sm:mb-20 md:mb-40 overflow-visible px-2 sm:px-4">
        <AnimatePresence>
          {STAMPS_DATA.map((stamp, index) => (
            <StampCard
              key={stamp.id}
              stamp={stamp}
              index={index}
              totalCards={totalCards}
              onClick={onSelectStamp}
            />
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        className="text-center mt-auto p-3 sm:p-4 text-gray-500 text-xs sm:text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Layers className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 mb-1" />
        Klik salah satu kartu untuk melihat detail.
      </motion.div>
    </div>
  );
};

// --- MAIN APP ---
const App: React.FC = () => {
  const [selectedStampId, setSelectedStampId] = useState<string | null>(null);

  const selectedStamp = useMemo(() => {
    return STAMPS_DATA.find(s => s.id === selectedStampId);
  }, [selectedStampId]);

  const handleSelectStamp = (id: string) => {
    if (typeof window === 'undefined') return;
    
    const routes: Record<string, string> = {
      '1': '/prangko-budaya',
      '2': '/flora-fauna',
      '3': '/bersejah',
      '4': '/peristiwa-sejarah',
      '5': '/tokoh-indonesia',
      '6': '/prisma',
    };

    if (routes[id]) {
      window.location.href = routes[id];
    } else {
      setSelectedStampId(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setSelectedStampId(null);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentView: 'list' | 'detail' = selectedStamp ? 'detail' : 'list';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 font-sans antialiased">
      <AnimatePresence mode="wait">
        {currentView === 'list' && (
          <motion.div 
            key="list" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <StampList onSelectStamp={handleSelectStamp} />
          </motion.div>
        )}
        {currentView === 'detail' && selectedStamp && (
          <motion.div 
            key="detail" 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            <div className="min-h-screen p-4 sm:p-6 md:p-8">
              <button 
                onClick={handleBack}
                className="mb-4 px-3 sm:px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors"
              >
                ← Kembali
              </button>
              <h2 className="text-2xl sm:text-3xl font-bold">{selectedStamp.title}</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;