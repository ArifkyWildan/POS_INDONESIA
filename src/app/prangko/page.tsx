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

// --- DATA STAMP ---
const STAMPS_DATA: Stamp[] = [
  {
    id: '1',
    title: 'Prangko Keberagaman Budaya Nusantara',
    year: 1950,
    artist: 'Keberagaman Budaya Nusantara',
    image: 'https://images.unsplash.com/photo-1523735969558-d2c9e96d9d2f?w=400',
    location: 'National Museum of Art, Jakarta',
    description: 'Prangko pertama yang dikeluarkan setelah pengakuan kedaulatan Indonesia...',
    color: '#172b60',
  },
  {
    id: '2',
    title: 'Prangko Flora dan Fauna',
    year: 1975,
    artist: 'Flora & Fauna',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    location: 'Museum Filateli Indonesia, Bandung',
    description: 'Bagian dari seri Warisan Budaya...',
    color: '#24459d',
  },
  {
    id: '3',
    title: 'Prangko Bersejarah',
    year: 1990,
    artist: 'Prangko Bersejarah',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400',
    location: 'Koleksi Pribadi, Jakarta',
    description: 'Dirilis untuk mempromosikan upaya konservasi...',
    color: '#172b60',
  },
  {
    id: '4',
    title: 'Prangko Peristiwa Bersejarah',
    year: 2005,
    artist: 'Peristiwa Besejarah',
    image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=400',
    location: 'Museum Pos Indonesia, Bandung',
    description: 'Seri prangko yang didedikasikan untuk seni pertunjukan...',
    color: '#24459d',
  },
  {
    id: '5',
    title: 'Prangko Para Tokoh Indonesia',
    year: 2015,
    artist: 'Para Tokoh Indonesia',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400',
    location: 'Museum Kearsipan Nasional',
    description: 'Prangko modern yang merayakan seni Batik...',
    color: '#172b60',
  },
  {
    id: '6',
    title: 'Prangko Prisma',
    year: 2020,
    artist: 'Andi Rahmat',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
    location: 'Kementerian Komunikasi dan Informatika',
    description: 'Dirilis untuk mendukung pariwisata bahari...',
    color: '#24459d',
  },
];

// --- COMPONENT KARTU PRANGKO ---
const StampCard: React.FC<StampCardProps> = ({ stamp, index, totalCards, onClick }) => {
  const { title, year, artist, image, color } = stamp;
  const middleIndex = (totalCards - 1) / 2;
  const offset = index - middleIndex;
  
  // Responsive adjustments
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

// --- LIST PRANGKO ---
const StampList: React.FC<StampListProps> = ({ onSelectStamp }) => {
  const totalCards = STAMPS_DATA.length;
  
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 px-3 sm:px-4 pt-3 sm:pt-4 md:pt-6 pb-6">
      {/* Header Museum Pos Indonesia */}
      <div className="w-full max-w-7xl mx-auto mb-4 sm:mb-6 md:mb-8">
        <div className="bg-gradient-to-r from-[#172b60] to-[#24459d] shadow-lg rounded-lg p-2.5 sm:p-3 md:p-4 flex items-center justify-between">
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.history.back();
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
          <div className="w-10 sm:w-16 md:w-20"></div>
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

      {/* Section Informasi Filateli */}
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {/* Kolom Kiri - Kalian Tau apa itu Filateli */}
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1523735969558-d2c9e96d9d2f?w=400" 
                  alt="Prangko" 
                  className="w-full h-full object-cover rounded-md sm:rounded-lg border-2 sm:border-4 border-dashed border-gray-200" 
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#172b60] mb-1.5 sm:mb-2">
                  Kalian Tau apa itu Filateli?
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  Filateli adalah studi, apresiasi, dan pengumpulan prangko dan benda-benda pos terkait <span className="font-semibold">(seperti amplop hari pertama, cap pos)</span>
                </p>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
              <img src="https://images.unsplash.com/photo-1523735969558-d2c9e96d9d2f?w=400" alt="Koleksi Prangko" className="w-full h-24 sm:h-32 object-cover rounded-lg" />
              <div className="mt-2 bg-blue-50 rounded-lg p-2 sm:p-3 text-right">
                <p className="text-[10px] sm:text-xs text-gray-600">Dapatkan Bintang Ini dengan cara</p>
                <p className="text-[10px] sm:text-xs text-blue-700 font-semibold">selesaikan tour pada halaman koleksi ini</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan - Apa Definisi dan Fungsi Prangko */}
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-24 h-32 sm:w-32 sm:h-40 flex-shrink-0 border-4 sm:border-8 border-gray-800 rounded-md sm:rounded-lg p-1 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1523735969558-d2c9e96d9d2f?w=400" 
                  alt="Prangko Indonesia" 
                  className="w-full h-full object-cover rounded" 
                />
              </div>
              <div className="flex-1 bg-blue-50 rounded-lg p-3 sm:p-4 min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#24459d] mb-2 sm:mb-3">
                  Apa Definisi dan Fungsi Prangko?
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold">Prangko</span> adalah secarik kertas kecil yang dikeluarkan dan dijual oleh otoritas pos suatu negara. Prangko berfungsi untuk melunasi biaya pengiriman surat atau paket pos
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#172b60] mb-2 sm:mb-3">
                Jenis Prangko Utama
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#172b60] text-white text-[10px] sm:text-sm font-semibold rounded-full">
                  Prangko Definitif (Biasa)
                </span>
                <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#24459d] text-white text-[10px] sm:text-sm font-semibold rounded-full">
                  Prangko Komemoratif (Peringatan)
                </span>
                <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#172b60] text-white text-[10px] sm:text-sm font-semibold rounded-full">
                  Prangko Udara
                </span>
                <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#24459d] text-white text-[10px] sm:text-sm font-semibold rounded-full">
                  Prangko Dinas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stamp Cards Container dengan padding yang cukup */}
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