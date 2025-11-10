"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut, Heart, Search, ChevronLeft, Layers, CornerDownRight } from 'lucide-react';

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

interface StampDetailProps {
  stamp: Stamp;
  onBack: () => void;
}

interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

interface ButtonProps {
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

// --- DATA STAMP ---
const STAMPS_DATA: Stamp[] = [
  {
    id: '1',
    title: 'Prangko Keberagaman Budaya Nusantara',
    year: 1950,
    artist: 'S. Sujono',
    image: 'https://placehold.co/400x550/00204a/ffffff?text=Garuda+1950',
    location: 'National Museum of Art, Jakarta',
    description: 'Prangko pertama yang dikeluarkan setelah pengakuan kedaulatan Indonesia...',
    color: '#00204a',
  },
  {
    id: '2',
    title: 'Borobudur Sunrise',
    year: 1975,
    artist: 'Affandi',
    image: 'https://placehold.co/400x550/340068/ffffff?text=Borobudur+75',
    location: 'Museum Filateli Indonesia, Bandung',
    description: 'Bagian dari seri Warisan Budaya...',
    color: '#340068',
  },
  {
    id: '3',
    title: 'Komodo Dragon',
    year: 1990,
    artist: 'I. Nyoman Masriadi',
    image: 'https://placehold.co/400x550/064201/ffffff?text=Komodo+90',
    location: 'Koleksi Pribadi, Jakarta',
    description: 'Dirilis untuk mempromosikan upaya konservasi...',
    color: '#064201',
  },
  {
    id: '4',
    title: 'Wayang Kulit Series',
    year: 2005,
    artist: 'T. D. J. P. Moerdowo',
    image: 'https://placehold.co/400x550/551100/000000?text=Wayang+05',
    location: 'Museum Pos Indonesia, Bandung',
    description: 'Seri prangko yang didedikasikan untuk seni pertunjukan...',
    color: '#551100',
  },
  {
    id: '5',
    title: 'Batik Parang Rusak',
    year: 2015,
    artist: 'Astri Wulandari',
    image: 'https://placehold.co/400x550/4b0082/ffffff?text=Batik+15',
    location: 'Museum Kearsipan Nasional',
    description: 'Prangko modern yang merayakan seni Batik...',
    color: '#4b0082',
  },
  {
    id: '6',
    title: 'Underwater Raja Ampat',
    year: 2020,
    artist: 'Andi Rahmat',
    image: 'https://placehold.co/400x550/005f5f/ffffff?text=Raja+Ampat+20',
    location: 'Kementerian Komunikasi dan Informatika',
    description: 'Dirilis untuk mendukung pariwisata bahari...',
    color: '#005f5f',
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
      className="absolute cursor-pointer w-64 h-96 rounded-xl overflow-hidden shadow-2xl bg-white transform-gpu origin-bottom"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end text-white">
        <p className="text-xs font-light opacity-70 mb-1">{artist} / {year}</p>
        <h3 className="text-xl font-bold leading-tight">{title}</h3>
      </div>
    </motion.div>
  );
};

// --- LIST PRANGKO ---
const StampList: React.FC<StampListProps> = ({ onSelectStamp }) => {
  const totalCards = STAMPS_DATA.length;
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center mb-10 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Koleksi Prangko Nasional
        </motion.h1>
        <p className="text-lg text-gray-600">
          Jelajahi koleksi prangko bersejarah Indonesia.
        </p>
      </div>

      <div className="relative h-[500px] w-full max-w-7xl mx-auto flex justify-center items-center mb-40 overflow-visible">
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

// --- KOMPONEN DETAIL (tidak diubah) ---
const DetailItem: React.FC<DetailItemProps> = ({ icon, label, value }) => (
  <div className="flex items-start space-x-3">
    <div className="pt-1">{icon}</div>
    <div>
      <p className="text-xs font-semibold uppercase text-gray-500">{label}</p>
      <p className="text-lg font-medium text-gray-800">{value}</p>
    </div>
  </div>
);

const Button: React.FC<ButtonProps> = ({ icon, label, primary, onClick }) => (
  <button
    className={`flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl transition duration-300 shadow-md ${
      primary
        ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 active:bg-gray-200'
    }`}
    onClick={onClick}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {label}
  </button>
);

// --- MAIN APP ---
const App: React.FC = () => {
  const router = useRouter();
  const [selectedStampId, setSelectedStampId] = useState<string | null>(null);

  const selectedStamp = useMemo(() => {
    return STAMPS_DATA.find(s => s.id === selectedStampId);
  }, [selectedStampId]);

  const handleSelectStamp = (id: string) => {
    if (id === '1') {
      router.push("/prangko-budaya"); // 👉 Arahkan ke halaman PrangkoBudaya
    } else {
      setSelectedStampId(id);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setSelectedStampId(null);
    window.scrollTo(0, 0);
  };

  const currentView: 'list' | 'detail' = selectedStamp ? 'detail' : 'list';

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <AnimatePresence mode="wait">
        {currentView === 'list' && (
          <motion.div key="list" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}>
            <StampList onSelectStamp={handleSelectStamp} />
          </motion.div>
        )}
        {currentView === 'detail' && selectedStamp && (
          <motion.div key="detail" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }}>
            {/* Kamu bisa tampilkan StampDetail di sini */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
