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
    image: '/pranko-prisma.jpg',
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
  const rotation = offset * 4;
  const shiftX = offset * 110;
  const cardScale = 1 - Math.abs(offset) * 0.03;
  const zIndex = 100 - Math.floor(Math.abs(offset));

  return (
    <motion.div
      className="absolute cursor-pointer w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96 rounded-xl overflow-hidden shadow-2xl bg-white transform-gpu origin-bottom"
      style={{
        zIndex,
        x: shiftX,
        rotate: rotation,
        scale: cardScale,
        boxShadow: `0 15px 30px -5px rgba(0, 0, 0, 0.3), 0 0 8px 0 ${color}50`,
      }}
      whileHover={{
        scale: 1.05,
        zIndex: 200,
        y: -10,
        boxShadow: `0 40px 80px -15px rgba(0, 0, 0, 0.5), 0 0 20px 0 ${color}80`,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      onClick={() => onClick(stamp.id)}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4 flex flex-col justify-end text-white">
        <p className="text-xs font-light opacity-70 mb-1">{artist} / {year}</p>
        <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight">{title}</h3>
      </div>
    </motion.div>
  );
};

// --- LIST PRANGKO ---
const StampList: React.FC<StampListProps> = ({ onSelectStamp }) => {
  const totalCards = STAMPS_DATA.length;
  
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 px-4 pt-4 md:pt-6">
      {/* Header Museum Pos Indonesia */}
      <div className="w-full max-w-7xl mx-auto mb-6 md:mb-8">
        <div className="bg-gradient-to-r from-[#172b60] to-[#24459d] shadow-lg rounded-lg p-3 md:p-4 flex items-center justify-between">
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.history.back();
              }
            }}
            className="flex items-center space-x-2 text-white hover:text-blue-100 transition-colors duration-200 font-semibold text-sm md:text-base"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span>Kembali</span>
          </button>
          <div className="flex items-center space-x-2 md:space-x-3">
            <span className="text-2xl md:text-4xl font-black text-white tracking-wider">
              MUSEUM POS INDONESIA
            </span>
          </div>
          <div className="w-16 md:w-20"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-6 md:mb-10 px-4">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#172b60] via-[#24459d] to-[#172b60] mb-3 md:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Koleksi Filateli
        </motion.h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 mt-4">
          Jelajahi koleksi prangko bersejarah Indonesia.
        </p>
      </div>

      {/* Section Informasi Filateli */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12 px-4">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Kolom Kiri - Kalian Tau apa itu Filateli */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-20 h-20 flex-shrink-0">
                <img 
                  src="/budaya.webp" 
                  alt="Prangko" 
                  className="w-full h-full object-cover rounded-lg border-4 border-dashed border-gray-200" 
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#172b60] mb-2">
                  Kalian Tau apa itu Filateli?
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Filateli adalah studi, apresiasi, dan pengumpulan prangko dan benda-benda pos terkait <span className="font-semibold">(seperti amplop hari pertama, cap pos)</span>
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <img src="/budaya.webp" alt="Koleksi Prangko" className="w-full h-32 object-cover rounded-lg" />
              <div className="mt-2 bg-blue-50 rounded-lg p-3 text-right">
                <p className="text-xs text-gray-600">Dapatkan Bintang Ini dengan cara</p>
                <p className="text-xs text-blue-700 font-semibold">selesaikan tour pada halaman koleksi ini</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan - Apa Definisi dan Fungsi Prangko */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-32 h-40 flex-shrink-0 border-8 border-gray-800 rounded-lg p-1 bg-white">
                <img 
                  src="/budaya.webp" 
                  alt="Prangko Indonesia" 
                  className="w-full h-full object-cover rounded" 
                />
              </div>
              <div className="flex-1 bg-blue-50 rounded-lg p-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#24459d] mb-3">
                  Apa Definisi dan Fungsi Prangko?
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold">Prangko</span> adalah secarik kertas kecil yang dikeluarkan dan dijual oleh otoritas pos suatu negara. Prangko berfungsi untuk melunasi biaya pengiriman surat atau paket pos
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-[#172b60] mb-3">
                Jenis Prangko Utama
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-[#172b60] text-white text-sm font-semibold rounded-full">
                  Prangko Definitif (Biasa)
                </span>
                <span className="px-4 py-2 bg-[#24459d] text-white text-sm font-semibold rounded-full">
                  Prangko Komemoratif (Peringatan)
                </span>
                <span className="px-4 py-2 bg-[#172b60] text-white text-sm font-semibold rounded-full">
                  Prangko Udara
                </span>
                <span className="px-4 py-2 bg-[#24459d] text-white text-sm font-semibold rounded-full">
                  Prangko Dinas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full max-w-7xl mx-auto flex justify-center items-center mb-20 md:mb-40 overflow-visible px-4">
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
        className="text-center mt-auto p-4 text-gray-500 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Layers className="inline-block w-4 h-4 mr-1 mb-1" />
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
            <div className="min-h-screen p-8">
              <button 
                onClick={handleBack}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                ← Kembali
              </button>
              <h2 className="text-3xl font-bold">{selectedStamp.title}</h2>
              {/* Add more detail content here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;