"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from "next/navigation";
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
    image: 'https://placehold.co/400x550/172b60/ffffff?text=Garuda+1950',
    location: 'National Museum of Art, Jakarta',
    description: 'Prangko pertama yang dikeluarkan setelah pengakuan kedaulatan Indonesia...',
    color: '#172b60',
  },
  {
    id: '2',
    title: 'Prangko Flora dan Fauna',
    year: 1975,
    artist: 'Affandi',
    image: 'https://placehold.co/400x550/24459d/ffffff?text=Borobudur+75',
    location: 'Museum Filateli Indonesia, Bandung',
    description: 'Bagian dari seri Warisan Budaya...',
    color: '#24459d',
  },
  {
    id: '3',
    title: 'Prangko Bersejarah',
    year: 1990,
    artist: 'I. Nyoman Masriadi',
    image: 'https://placehold.co/400x550/172b60/ffffff?text=Komodo+90',
    location: 'Koleksi Pribadi, Jakarta',
    description: 'Dirilis untuk mempromosikan upaya konservasi...',
    color: '#172b60',
  },
  {
    id: '4',
    title: 'Prangko Peristiwa Bersejarah',
    year: 2005,
    artist: 'T. D. J. P. Moerdowo',
    image: 'https://placehold.co/400x550/24459d/ffffff?text=Wayang+05',
    location: 'Museum Pos Indonesia, Bandung',
    description: 'Seri prangko yang didedikasikan untuk seni pertunjukan...',
    color: '#24459d',
  },
  {
    id: '5',
    title: 'Prangko Para Tokoh Indonesia',
    year: 2015,
    artist: 'Astri Wulandari',
    image: 'https://placehold.co/400x550/172b60/ffffff?text=Batik+15',
    location: 'Museum Kearsipan Nasional',
    description: 'Prangko modern yang merayakan seni Batik...',
    color: '#172b60',
  },
  {
    id: '6',
    title: 'Prangko Prisma',
    year: 2020,
    artist: 'Andi Rahmat',
    image: 'https://placehold.co/400x550/24459d/ffffff?text=Raja+Ampat+20',
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
  const router = useRouter();
  const totalCards = STAMPS_DATA.length;
  
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 px-4 pt-4 md:pt-6">
      {/* Header Museum Pos Indonesia */}
      <div className="w-full max-w-7xl mx-auto mb-6 md:mb-8">
        <div className="bg-gradient-to-r from-[#172b60] to-[#24459d] shadow-lg rounded-lg p-3 md:p-4 flex items-center justify-between">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-white hover:text-blue-100 transition-colors duration-200 font-semibold text-sm md:text-base"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span>Kembali</span>
          </button>
          <div className="flex items-center space-x-2 md:space-x-3">
            <span className="text-2xl md:text-4xl font-black text-white">POS</span>
            <span className="text-2xl md:text-4xl font-black text-red-500">IND</span>
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
          Koleksi Prangko Nasional
        </motion.h1>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
          Jelajahi koleksi prangko bersejarah Indonesia.
        </p>
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-4 md:p-6 shadow-md border-2 border-[#24459d]/20">
          <p className="text-xl md:text-2xl font-bold text-[#172b60] mb-3 md:mb-4">
            🏷️ Apa Itu Prangko?
          </p>
          <div className="text-sm md:text-base text-gray-700 text-left space-y-3 md:space-y-4 leading-relaxed">
            <p>
              Prangko adalah tanda bukti pembayaran jasa pengiriman surat atau paket yang dikeluarkan oleh lembaga pos resmi suatu negara. Biasanya berupa kertas kecil bergambar yang ditempel di amplop atau paket sebelum dikirim.
            </p>
            <p>
              Namun, prangko bukan hanya alat pembayaran pos — ia juga merupakan karya seni mini. Setiap prangko memiliki desain unik yang menggambarkan sejarah, budaya, tokoh penting, peristiwa bersejarah, atau kekayaan alam dari negara penerbitnya. Karena itu, prangko juga menjadi media dokumentasi budaya dan sejarah yang sangat berharga.
            </p>
            <p>
              Seiring perkembangan zaman, fungsi prangko kini tidak hanya praktis, tetapi juga kolektibel. Banyak orang di seluruh dunia menjadi filatelis (kolektor prangko), yang mengumpulkan, meneliti, dan memamerkan prangko sebagai bagian dari warisan sejarah dan seni.
            </p>
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

// --- KOMPONEN DETAIL ---
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
        ? 'bg-gradient-to-r from-[#172b60] to-[#24459d] text-white hover:from-[#24459d] hover:to-[#172b60] active:scale-95'
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
      router.push("/prangko-budaya");
    } else if (id === '2') {
      router.push("/flora-fauna");
    } else if (id === '3') {
      router.push("/bersejah");
    } else if (id === '4') {
      router.push("/peristiwa-sejarah");
    } else if (id === '5') {
      router.push("/tokoh-indonesia");
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 font-sans antialiased">
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