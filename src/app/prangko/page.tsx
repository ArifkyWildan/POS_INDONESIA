"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, Layers, X, Gift, Star } from 'lucide-react';

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
  isViewed: boolean;
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

// --- NOTIFICATION COMPONENT ---
const PointNotification: React.FC<{ points: number; onClose: () => void }> = ({ points, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="fixed top-20 right-4 z-[10000] bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3"
      style={{
        animation: 'slideInRight 0.3s ease-out'
      }}
    >
      <Star className="w-6 h-6 fill-white" />
      <div>
        <p className="font-bold text-lg">+{points} Poin!</p>
        <p className="text-sm">Prangko berhasil dilihat</p>
      </div>
    </div>
  );
};

// --- REWARD MODAL COMPONENT ---
const RewardModal: React.FC<{ onClose: () => void; onClaim: () => void }> = ({ onClose, onClaim }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 2) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="inline-block mb-4">
            <Star 
              className="w-20 h-20 fill-white text-white drop-shadow-2xl" 
              style={{ transform: `rotate(${rotation}deg)` }}
            />
          </div>

          <h2 className="text-3xl font-black text-white mb-2">SELAMAT!</h2>
          <p className="text-white text-lg mb-6">
            Kamu sudah menyelesaikan perjalanan menjelajahi prangko!
          </p>

          <div className="bg-white rounded-2xl p-6 mb-6">
            <Gift className="w-16 h-16 mx-auto mb-3 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Hadiah Anda</h3>
            <p className="text-gray-600 mb-4">Voucher Museum Pos Indonesia</p>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold py-3 px-6 rounded-xl">
              Gratis Masuk Museum
            </div>
          </div>

          <button
            onClick={onClaim}
            className="w-full bg-white text-yellow-600 font-bold py-4 px-6 rounded-xl hover:bg-yellow-50 transition-colors shadow-lg"
          >
            Klaim Hadiah Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

// --- STAMP TYPE MODAL ---
const StampTypeModal: React.FC<{ type: StampTypeInfo; onClose: () => void }> = ({ type, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-[#172b60] to-[#24459d] rounded-3xl p-1 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-[22px] p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-[#172b60] text-white rounded-full flex items-center justify-center hover:bg-[#24459d] transition-colors"
          >
            ✕
          </button>
          <div className="pt-8 pb-4">
            <h3 className="text-2xl font-bold text-center text-[#172b60] mb-6">{type.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed text-justify mb-6">{type.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT KARTU PRANGKO ---
const StampCard: React.FC<StampCardProps> = ({ stamp, index, totalCards, onClick, isViewed }) => {
  const { title, year, artist, image, color } = stamp;
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const middleIndex = (totalCards - 1) / 2;
  const offset = index - middleIndex;
  
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024;
  
  const rotation = isMobile ? offset * 2.5 : offset * 4;
  const shiftX = isMobile ? offset * 45 : isTablet ? offset * 70 : offset * 110;
  const cardScale = 1 - Math.abs(offset) * (isMobile ? 0.05 : 0.03);
  const hoverScale = isHovered ? (isMobile ? 1.03 : 1.05) : cardScale;
  const hoverY = isHovered ? (isMobile ? -5 : -10) : 0;
  const zIndex = isHovered ? 200 : 100 - Math.floor(Math.abs(offset));

  return (
    <div
      className="absolute cursor-pointer w-32 h-48 xs:w-40 xs:h-56 sm:w-48 sm:h-64 md:w-56 md:h-80 lg:w-64 lg:h-96 rounded-lg sm:rounded-xl overflow-hidden shadow-2xl bg-white origin-bottom"
      style={{
        zIndex,
        transform: `translateX(${shiftX}px) translateY(${hoverY}px) rotate(${rotation}deg) scale(${hoverScale})`,
        boxShadow: isHovered 
          ? `0 30px 60px -15px rgba(0, 0, 0, 0.5), 0 0 15px 0 ${color}80`
          : `0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 6px 0 ${color}50`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(stamp.id)}
    >
      {isViewed && (
        <div className="absolute top-2 right-2 z-10 bg-yellow-400 rounded-full p-1">
          <Star className="w-4 h-4 fill-yellow-600 text-yellow-600" />
        </div>
      )}
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3 md:p-4 flex flex-col justify-end text-white">
        <p className="text-[9px] xs:text-[10px] sm:text-xs font-light opacity-70 mb-0.5 sm:mb-1">{artist} / {year}</p>
        <h3 className="text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl font-bold leading-tight line-clamp-2">{title}</h3>
      </div>
    </div>
  );
};

// --- STAMP LIST COMPONENT ---
const StampList: React.FC<{ onSelectStamp: (id: string) => void }> = ({ onSelectStamp }) => {
  const [viewedStamps, setViewedStamps] = useState<Set<string>>(new Set());
  const [showNotification, setShowNotification] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [rewardClaimed, setRewardClaimed] = useState(false);
  const [selectedStampType, setSelectedStampType] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  
  const POINTS_PER_STAMP = 10;
  const TOTAL_STAMPS = STAMPS_DATA.length;
  const currentPoints = viewedStamps.size * POINTS_PER_STAMP;
  const maxPoints = TOTAL_STAMPS * POINTS_PER_STAMP;
  const progress = (currentPoints / maxPoints) * 100;

  useEffect(() => {
    setMounted(true);
    // Load data from memory state (simulating persistence)
    const savedViewed = sessionStorage.getItem('viewedStamps');
    const savedReward = sessionStorage.getItem('rewardClaimed');
    
    if (savedViewed) {
      try {
        setViewedStamps(new Set(JSON.parse(savedViewed)));
      } catch (e) {
        console.log('Error loading viewed stamps');
      }
    }
    
    if (savedReward === 'true') {
      setRewardClaimed(true);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      sessionStorage.setItem('viewedStamps', JSON.stringify([...viewedStamps]));
    }
  }, [viewedStamps, mounted]);

  useEffect(() => {
    if (mounted) {
      sessionStorage.setItem('rewardClaimed', String(rewardClaimed));
    }
  }, [rewardClaimed, mounted]);

  const handleStampClick = (id: string) => {
    if (!viewedStamps.has(id)) {
      setViewedStamps(prev => new Set([...prev, id]));
      setShowNotification(true);
      
      if (viewedStamps.size + 1 === TOTAL_STAMPS && !rewardClaimed) {
        setTimeout(() => setShowReward(true), 1500);
      }
    }
    onSelectStamp(id);
  };

  const handleClaimReward = () => {
    setRewardClaimed(true);
    setShowReward(false);
    alert('Selamat! Voucher telah dikirim ke email Anda.');
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 px-3 sm:px-4 pt-3 sm:pt-4 md:pt-6 pb-6">
      {showNotification && <PointNotification points={POINTS_PER_STAMP} onClose={() => setShowNotification(false)} />}
      {showReward && <RewardModal onClose={() => setShowReward(false)} onClaim={handleClaimReward} />}
      {selectedStampType && <StampTypeModal type={STAMP_TYPES[selectedStampType]} onClose={() => setSelectedStampType(null)} />}

      {/* Header */}
      <div className="w-full max-w-7xl mx-auto mb-4 sm:mb-6">
        <div className="bg-gradient-to-r from-[#172b60] to-[#24459d] shadow-lg rounded-lg p-3 md:p-4 flex items-center justify-between">
          <button onClick={() => window.location.href = '/'} className="flex items-center space-x-2 text-white hover:text-blue-100 transition-colors font-semibold text-sm md:text-base">
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span>Kembali</span>
          </button>
          <span className="text-sm sm:text-2xl md:text-4xl font-black text-white tracking-wider">MUSEUM POS INDONESIA</span>
          <div className="bg-white rounded px-3 py-1.5"><span className="text-[#172b60] font-black text-xl md:text-2xl">POSIND</span></div>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-6 md:mb-10 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#172b60] to-[#24459d] mb-4">Koleksi Filateli</h1>
        <p className="text-base md:text-lg text-gray-600">Jelajahi koleksi prangko bersejarah Indonesia.</p>
      </div>

      {/* Progress Section */}
      <div className="max-w-7xl mx-auto mb-8 px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-20 h-24 flex-shrink-0 border-4 border-dashed border-gray-300 rounded-md p-1 bg-gray-50">
              <img src="1.png" alt="Prangko" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#172b60] mb-2">Apa itu Filateli?</h3>
              <p className="text-sm text-gray-700">Filateli adalah studi, apresiasi, dan pengumpulan prangko dan benda-benda pos terkait.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-lg border-2 border-gray-200 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold text-[#172b60] mb-3">SHP</h3>
            <img src="3.png" alt="Koleksi" className="w-full h-auto rounded-lg mb-3" />
            <p className="text-sm font-semibold text-gray-700 text-center">Sampulan Hari Pertama</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-5 shadow-lg border-2 border-blue-200">
            <div className="text-center mb-4">
              <p className="text-base text-gray-700 font-medium mb-2">Dapatkan Bintang ini dengan cara</p>
              <p className="text-sm text-blue-700 font-semibold">selesaikan tour pada halaman koleksi ini</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                  <polygon points="50,5 61,35 92,35 67,55 78,85 50,65 22,85 33,55 8,35 39,35" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                </svg>
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 0 ${100 - progress}% 0)` }}>
                  <polygon points="50,5 61,35 92,35 67,55 78,85 50,65 22,85 33,55 8,35 39,35" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2" />
                </svg>
              </div>
              
              <div className="w-full">
                <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
                  <span>Progress</span>
                  <span>{currentPoints}/{maxPoints} Poin</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">Setiap prangko yang dilihat = {POINTS_PER_STAMP} poin</p>
                {rewardClaimed && <p className="text-sm text-green-600 font-bold text-center mt-2">✓ Hadiah Sudah Diklaim!</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Definisi dan Fungsi Prangko */}
      <div className="max-w-7xl mx-auto mb-8 px-4 w-full">
        <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-200">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-56 flex-shrink-0 border-8 border-gray-800 rounded-lg p-2 bg-white mx-auto md:mx-0">
              <img src="2.png" alt="Prangko Indonesia" className="w-full h-auto object-cover rounded" />
            </div>
            
            <div className="flex-1">
              <div className="bg-blue-50 rounded-lg p-5 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#24459d] mb-3">
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
                    className="px-4 py-2 bg-[#172b60] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#24459d] transition-colors"
                  >
                    Prangko Definitif (Biasa)
                  </button>
                  <button
                    onClick={() => setSelectedStampType('komemoratif')}
                    className="px-4 py-2 bg-[#24459d] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#172b60] transition-colors"
                  >
                    Prangko Komemoratif (Peringatan)
                  </button>
                  <button
                    onClick={() => setSelectedStampType('udara')}
                    className="px-4 py-2 bg-[#172b60] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#24459d] transition-colors"
                  >
                    Prangko Udara
                  </button>
                  <button
                    onClick={() => setSelectedStampType('dinas')}
                    className="px-4 py-2 bg-[#24459d] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#172b60] transition-colors"
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
      <div className="max-w-7xl mx-auto mb-12 px-4 w-full">
        <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172b60] text-center mb-10">
            ANATOMI PRANGKO
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#172b60] mb-2">Nilai Nominal (Harga)</h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Angka yang menunjukkan biaya pos yang telah dibayar</p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#172b60] mb-2">Nama Negara</h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Identitas negara penerbit (misalnya, INDONESIA, Rep. Indonesia).</p>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center items-start">
              <div className="flex gap-6">
                <div className="border-4 border-dashed border-blue-400 rounded-lg p-3 bg-white">
                  <img src="jokowi1.png" alt="Prangko 1000" className="w-40 md:w-48 h-auto object-cover rounded shadow-lg" />
                </div>
                <div className="border-4 border-dashed border-blue-400 rounded-lg p-3 bg-white">
                  <img src="hatta1.png" alt="Prangko 5000" className="w-40 md:w-48 h-auto object-cover rounded shadow-lg" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#24459d] mb-2">Tahun Penerbitan</h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Biasanya tertera samar atau diketahui melalui katalog menunjukkan kapan prangko tersebut sah digunakan.</p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#24459d] mb-2">Perforasi (Gigi-gigi)</h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Lubang-lubang kecil di tepi prangko yang memudahkannya untuk disobek dari lembar/blok prangko.</p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#24459d] mb-2">Gambar/Desain</h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Ilustrasi atau foto yang biasanya menjadi daya tarik utama dan tema prangko.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stamp Cards */}
      <div className="relative h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[550px] w-full max-w-7xl mx-auto flex justify-center items-center mb-12 sm:mb-20 md:mb-40">
        {STAMPS_DATA.map((stamp, index) => (
          <StampCard
            key={stamp.id}
            stamp={stamp}
            index={index}
            totalCards={STAMPS_DATA.length}
            onClick={handleStampClick}
            isViewed={viewedStamps.has(stamp.id)}
          />
        ))}
      </div>

      <div className="text-center mt-auto p-4 text-gray-500 text-sm">
        <Layers className="inline-block w-4 h-4 mr-1 mb-1" />
        Klik salah satu kartu untuk melihat detail dan dapatkan poin!
      </div>
    </div>
  );
};

// --- MAIN APP ---
const App: React.FC = () => {
  const handleSelectStamp = (id: string) => {
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
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <StampList onSelectStamp={handleSelectStamp} />
    </div>
  );
};

export default App;