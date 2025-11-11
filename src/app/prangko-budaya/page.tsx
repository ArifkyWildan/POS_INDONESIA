"use client";

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, Star, ArrowLeft, Maximize2, X } from 'lucide-react';

// --- DEFINISI TIPE ---
interface Stamp {
  id: number;
  name: string;
  region: string;
  image: string; // Prangko image
  avatar: string; // Thumbnail image
  tutorialVideo: string; // Video placeholder image
  description: string;
  material: string;
  year: string;
  rating: number;
  reviews: number;
  nominal: string; // FILD BARU: Nominal (Harga Prangko)
}

// --- DATA KOLEKSI (DITAMBAH NOMINAL) ---
const stampCollection: Stamp[] = [
  {
    id: 1,
    name: 'Angklung',
    region: 'Jawa Barat',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=450&fit=crop',
    description: 'Alat musik tradisional yang terbuat dari bambu. Dimainkan dengan cara digoyangkan untuk menghasilkan suara yang merdu.',
    material: 'Bambu',
    year: '2010',
    rating: 4.8,
    reviews: 234,
    nominal: 'Rp 5.000,-' // Nominal ditambahkan
  },
  {
    id: 2,
    name: 'Gamelan',
    region: 'Jawa Tengah',
    image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop',
    description: 'Ansambel musik perunggu dan kuningan yang menghasilkan harmoni khas Jawa. Digunakan dalam pertunjukan wayang.',
    material: 'Perunggu, Kuningan',
    year: '2008',
    rating: 4.9,
    reviews: 412,
    nominal: 'Rp 10.000,-'
  },
  {
    id: 3,
    name: 'Sasando',
    region: 'NTT',
    image: 'https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=450&fit=crop',
    description: 'Alat musik petik khas Rote dari daun lontar. Menghasilkan suara lembut yang menenangkan.',
    material: 'Daun Lontar',
    year: '2012',
    rating: 4.7,
    reviews: 189,
    nominal: 'Rp 3.000,-'
  },
  {
    id: 4,
    name: 'Kolintang',
    region: 'Sulawesi Utara',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=800&h=450&fit=crop',
    description: 'Alat musik perkusi dari deretan kayu dengan nada berbeda. Dimainkan dengan stik khusus.',
    material: 'Kayu Telur',
    year: '2009',
    rating: 4.8,
    reviews: 267,
    nominal: 'Rp 7.500,-'
  },
  {
    id: 5,
    name: 'Tifa',
    region: 'Papua & Maluku',
    image: 'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=450&fit=crop',
    description: 'Alat musik perkusi berbentuk tabung untuk upacara adat. Memiliki makna spiritual mendalam.',
    material: 'Kayu, Kulit',
    year: '2011',
    rating: 4.6,
    reviews: 156,
    nominal: 'Rp 4.000,-'
  },
  {
    id: 6,
    name: 'Saluang',
    region: 'Sumatera Barat',
    image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&h=450&fit=crop',
    description: 'Seruling bambu Minangkabau dengan teknik pernapasan circular breathing yang unik.',
    material: 'Bambu Talang',
    year: '2013',
    rating: 4.7,
    reviews: 198,
    nominal: 'Rp 6.000,-'
  },
  {
    id: 7,
    name: 'Rebab',
    region: 'Jawa',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=450&fit=crop',
    description: 'Alat musik gesek dengan 2-3 senar. Instrumen melodi utama dalam orkestra gamelan.',
    material: 'Kayu, Senar',
    year: '2010',
    rating: 4.5,
    reviews: 145,
    nominal: 'Rp 8.000,-'
  },
  {
    id: 8,
    name: 'Kecapi',
    region: 'Jawa Barat',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop',
    description: 'Alat musik petik Sunda dengan banyak senar. Menghasilkan bunyi lembut dan merdu.',
    material: 'Kayu, Senar',
    year: '2011',
    rating: 4.8,
    reviews: 223,
    nominal: 'Rp 5.500,-'
  },
  {
    id: 9,
    name: 'Talempong',
    region: 'Sumatera Barat',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=800&h=450&fit=crop',
    description: 'Gong kecil berbentuk pencu dari Minangkabau. Dimainkan dalam ensembel.',
    material: 'Kuningan',
    year: '2014',
    rating: 4.6,
    reviews: 167,
    nominal: 'Rp 9.000,-'
  },
  {
    id: 10,
    name: 'Kendang',
    region: 'Jawa',
    image: 'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=450&fit=crop',
    description: 'Gendang dua sisi pengatur tempo dalam gamelan. Peran vital sebagai pemimpin orkestra.',
    material: 'Kayu, Kulit',
    year: '2009',
    rating: 4.9,
    reviews: 345,
    nominal: 'Rp 4.500,-'
  },
  {
    id: 11,
    name: 'Suling',
    region: 'Jawa Barat',
    image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&h=450&fit=crop',
    description: 'Seruling bambu dengan 4-6 lubang jari. Menghasilkan melodi yang indah dan ekspresif.',
    material: 'Bambu',
    year: '2012',
    rating: 4.7,
    reviews: 201,
    nominal: 'Rp 7.000,-'
  },
  {
    id: 12,
    name: 'Serunai',
    region: 'Aceh',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=450&fit=crop',
    description: 'Alat tiup tradisional Aceh dengan suara khas yang merdu. Digunakan dalam tari Saman.',
    material: 'Kayu',
    year: '2015',
    rating: 4.5,
    reviews: 134,
    nominal: 'Rp 3.500,-'
  },
  {
    id: 13,
    name: 'Arumba',
    region: 'Jawa Barat',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop',
    description: 'Ansambel musik dari bambu dengan berbagai ukuran. Modern dan populer di kalangan muda.',
    material: 'Bambu',
    year: '2016',
    rating: 4.8,
    reviews: 289,
    nominal: 'Rp 12.000,-'
  },
  {
    id: 14,
    name: 'Gendang Beleq',
    region: 'Lombok',
    image: 'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=450&fit=crop',
    description: 'Gendang besar Sasak yang dimainkan dalam grup. Mengiringi perang topat dan upacara.',
    material: 'Kayu, Kulit',
    year: '2013',
    rating: 4.6,
    reviews: 178,
    nominal: 'Rp 6.500,-'
  },
  {
    id: 15,
    name: 'Calung',
    region: 'Jawa Barat',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=450&fit=crop',
    description: 'Alat musik dari bambu yang dipukul. Mirip angklung namun dengan teknik berbeda.',
    material: 'Bambu',
    year: '2011',
    rating: 4.7,
    reviews: 212,
    nominal: 'Rp 15.000,-'
  },
  {
    id: 16,
    name: 'Tarompet',
    region: 'Sumatera Utara',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=1000&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=150&h=150&fit=crop',
    tutorialVideo: 'https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&h=450&fit=crop',
    description: 'Alat tiup Batak dengan suara keras dan lantang. Digunakan dalam pesta adat Batak.',
    material: 'Kayu, Logam',
    year: '2014',
    rating: 4.5,
    reviews: 143,
    nominal: 'Rp 5.000,-'
  }
];

// Custom Colors
const COLOR_DARK = '#172b60'; // Dark Blue for Titles/Borders/Primary Background
const COLOR_ACCENT = '#24459d'; // Mid Blue Accent for Buttons/Highlights
const COLOR_GOLD = '#d4af37'; // Gold Accent for premium titles/text
const COLOR_LIGHT_BG = '#f0f4f8'; // Light background for the overall page

// --- KOMPONEN UTILS ---

// Modal for Zooming Image
const ZoomModal: React.FC<{ isOpen: boolean, onClose: () => void, imageUrl: string, title: string }> = ({ isOpen, onClose, imageUrl, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl bg-white rounded-xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
            style={{ border: `4px solid ${COLOR_ACCENT}` }}
          >
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
              <h3 className="text-xl font-serif font-bold text-gray-800">Prangko: {title}</h3>
              <button
                onClick={onClose}
                className={`text-gray-500 hover:text-red-600 transition-colors p-2 rounded-full bg-gray-100 hover:bg-red-100`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <img 
              src={imageUrl} 
              alt={`Zoomed image of ${title}`}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = 'https://placehold.co/800x1000/172b60/ffffff?text=Image+Error'; }} // Fallback
              className="w-full rounded-lg object-contain max-h-[80vh] border border-gray-300"
            />
            <p className="text-center text-sm text-gray-500 mt-4">Ketuk (atau klik) di mana saja untuk menutup.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// --- MAIN COMPONENT ---
const MuseumPrangko: React.FC = () => {
  const [selectedStamp, setSelectedStamp] = useState<Stamp>(stampCollection[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState<boolean>(false);

  // Fungsi untuk menangani klik pada tombol putar audio
  const handlePlayAudio = useCallback(() => {
    // Simulasi putar audio, audio asli tidak tersedia
    if (!isPlayingAudio) {
      setIsPlayingAudio(true);
      setTimeout(() => {
        setIsPlayingAudio(false);
      }, 30000); // Stop after 30 seconds for simulation
    } else {
      setIsPlayingAudio(false);
    }
  }, [isPlayingAudio]);

  return (
    // Background utama terang (Light Theme)
    <div className={`min-h-screen bg-[${COLOR_LIGHT_BG}] text-gray-800 font-sans`}>
      {/* Header Minimalis Sesuai Permintaan */}
      <div className={`sticky top-0 z-10 w-full bg-white shadow-md border-b border-gray-200 py-3 px-4 md:px-8`}>
        <div className="max-w-[1600px] mx-auto flex items-center justify-between relative">
          
          {/* Tombol Kembali (Kiri) - Diubah menjadi <a> tag dengan href */}
          <a 
            href="/prangko" // Menggunakan '/' sebagai simulasi link ke halaman utama
            className={`flex items-center gap-1 text-[${COLOR_ACCENT}] hover:text-[${COLOR_DARK}] transition-colors`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-serif text-sm">Kembali</span>
          </a>
          
          {/* Logo POS IND (Tengah) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            {/* Menggunakan Tailwind untuk simulasi warna logo POS IND (Biru Merah Putih) */}
            <span className={`text-2xl md:text-3xl font-black tracking-wider`} style={{ color: COLOR_DARK }}>POS</span>
            <span className={`text-2xl md:text-3xl font-black`} style={{ color: '#E53E3E' }}> IND</span>
          </div>

          {/* Placeholder Kanan (untuk keseimbangan) */}
          <div className="w-[100px] md:w-[120px]"></div> {/* Memberi ruang kosong seukuran tombol Kembali */}
        </div>
      </div>
      
      {/* Konten Utama */}
      <div className="max-w-[1600px] mx-auto p-4 md:p-8">
        <div className="mb-8 pt-4">
          <h1 className={`text-2xl font-serif font-bold text-[${COLOR_DARK}] mb-1 tracking-wider`}>Museum Pos Indonesia</h1>
          <p className="text-gray-600 font-serif italic text-lg">Koleksi Prangko Alat Musik Tradisional Nusantara</p>
          <div className={`w-16 h-1 bg-[${COLOR_ACCENT}] mt-2`}></div>
        </div>

        {/* Grid Konten Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Left Column - Featured Exhibition & Gallery Preview */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Featured Stamp Display (Kartu Utama Biru Tua) */}
            <motion.div 
              layout
              style={{ backgroundColor: COLOR_DARK }}
              className={`rounded-xl p-8 text-white shadow-2xl border-4 border-[${COLOR_ACCENT}]`}
            >
              <div className="text-center mb-6">
                <div 
                  className={`inline-block bg-[${COLOR_ACCENT}] text-white px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase shadow-md`}
                >
                  KOLEKSI UNGGULAN
                </div>
                {/* Nominal Prangko */}
                <p className={`text-3xl font-serif font-black text-[${COLOR_GOLD}] mb-1`}>{selectedStamp.nominal}</p>
                {/* Nama Prangko Utama */}
                <h2 className={`text-3xl font-serif font-bold mb-2 text-white`}>{selectedStamp.name}</h2>
                <h3 className="text-xl font-serif text-blue-200">{selectedStamp.region}</h3>
                <div className={`w-24 h-1 bg-white mx-auto mt-4`}></div>
              </div>
              
              {/* Image with Zoom Feature */}
              <div 
                className={`relative rounded-lg overflow-hidden shadow-2xl mb-6 border-8 border-white group cursor-pointer`}
                onClick={() => setIsZoomModalOpen(true)}
              >
                <img 
                  src={selectedStamp.image} 
                  alt={selectedStamp.name}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = 'https://placehold.co/800x1000/172b60/ffffff?text=Image+Error'; }} // Fallback
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Maximize2 className="w-12 h-12 text-white/90" />
                </div>
              </div>

              <p className="text-center text-sm text-blue-100 font-serif italic">
                Klik gambar di atas untuk melihat detail prangko.
              </p>
            </motion.div>

            {/* Gallery Preview (Thumbnail Pilih Cepat) */}
            <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200">
              <h3 className={`text-lg font-serif font-bold text-[${COLOR_ACCENT}] mb-4 text-center uppercase tracking-wider`}>Galeri Pilihan</h3>
              <div className="grid grid-cols-4 gap-3">
                {stampCollection.slice(0, 8).map((stamp) => (
                  <motion.button
                    key={stamp.id}
                    onClick={() => setSelectedStamp(stamp)}
                    whileHover={{ scale: 1.05, boxShadow: `0 0 15px rgba(36, 69, 157, 0.4)` }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square rounded overflow-hidden border-4 transition-all duration-300 ${
                      selectedStamp.id === stamp.id 
                        ? `border-[${COLOR_ACCENT}] shadow-lg` 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <img 
                      src={stamp.avatar} 
                      alt={stamp.name}
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = 'https://placehold.co/150x150/cccccc/333333?text=N/A'; }} // Fallback
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center font-serif italic">{selectedStamp.name}</p>
            </div>
          </div>

          {/* Right Column - Exhibition Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Artifact Information & Audio Archive (Grid 2 Kolom) */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Artifact Information (Informasi Detail Prangko) */}
              <motion.div 
                layout
                className="bg-white rounded-xl p-8 shadow-xl border border-gray-200"
              >
                <h3 className={`text-xl font-serif font-bold text-[${COLOR_ACCENT}] mb-4 pb-3 border-b border-gray-300 uppercase tracking-wider`}>Informasi Artefak</h3>
                <div className="space-y-4">
                  
                  {/* Title Block */}
                  <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                    <div>
                      <h4 className={`text-3xl font-serif font-extrabold text-[${COLOR_DARK}]`}>{selectedStamp.name}</h4>
                      <p className={`text-sm flex items-center gap-2 mb-2 text-[${COLOR_ACCENT}] font-semibold`}>
                        <span className={`w-2 h-2 rounded-full bg-[${COLOR_GOLD}]`} />
                        <span className="font-serif uppercase">{selectedStamp.region}</span>
                      </p>
                    </div>
                    {/* Nominal ditampilkan di sini */}
                    <div className="text-right">
                        <p className={`text-sm font-bold text-gray-500 mb-1 tracking-widest`}>NOMINAL</p>
                        <p className={`text-2xl font-serif font-black text-[${COLOR_GOLD}]`}>{selectedStamp.nominal}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-base font-serif border-b border-gray-200 pb-4">
                    {selectedStamp.description}
                  </p>
                  
                  {/* Metadata Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-inner">
                      <p className={`text-xs text-[${COLOR_ACCENT}] mb-1 font-bold tracking-widest`}>MATERIAL</p>
                      <p className="text-lg font-serif font-semibold text-gray-800">{selectedStamp.material}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-inner">
                      <p className={`text-xs text-[${COLOR_ACCENT}] mb-1 font-bold tracking-widest`}>PERIODE</p>
                      <p className="text-lg font-serif font-semibold text-gray-800">{selectedStamp.year}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className={`font-bold text-[${COLOR_DARK}] text-lg`}>{selectedStamp.rating}</span>
                    <span className="text-sm text-gray-600 font-serif">• {selectedStamp.reviews} ulasan</span>
                  </div>
                </div>
              </motion.div>

              {/* Audio Archive (Arsip Audio) */}
              <motion.div 
                layout
                style={{ backgroundColor: COLOR_ACCENT }}
                className={`rounded-xl p-8 shadow-2xl text-white border-4 border-[${COLOR_DARK}]`}
              >
                <h3 className={`text-xl font-serif font-bold mb-6 pb-3 border-b border-[${COLOR_GOLD}] uppercase tracking-wider`}>Arsip Audio</h3>
                
                <div className="aspect-square rounded-lg bg-white/20 backdrop-blur-sm mb-6 flex items-center justify-center relative overflow-hidden border-2 border-white/50">
                  <motion.div
                    animate={isPlayingAudio ? {
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.7, 0.4]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 bg-white/30 rounded-full`}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: isPlayingAudio ? 5 : 0 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePlayAudio}
                    className="relative z-10 w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-2xl ring-4 ring-white/50"
                  >
                    {isPlayingAudio ? (
                      <Volume2 className={`w-14 h-14 text-[${COLOR_ACCENT}]`} />
                    ) : (
                      <Play className={`w-14 h-14 text-[${COLOR_ACCENT}] ml-1`} />
                    )}
                  </motion.button>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className={`text-sm text-[${COLOR_GOLD}] mb-2 font-serif italic`}>Sedang Diputar</p>
                    <p className="font-serif font-bold text-2xl text-white">{selectedStamp.name}</p>
                    <p className="text-base text-blue-200 font-serif">{selectedStamp.region}</p>
                  </div>

                  {/* Progress Bar Simulasi */}
                  <div className={`h-2 bg-white/30 rounded-full overflow-hidden border border-white/40`}>
                    <motion.div 
                      className={`h-full bg-white rounded-full shadow-lg`}
                      initial={{ width: '0%' }}
                      animate={{ width: isPlayingAudio ? '85%' : '0%' }}
                      transition={{ duration: 30, ease: 'linear' }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-blue-100 font-serif">
                    <span>{isPlayingAudio ? '0:05' : '0:00'}</span>
                    <span>3:45</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Documentary Section (Video Tutorial) */}
            <motion.div 
              layout
              className="bg-white rounded-xl p-8 shadow-xl border border-gray-200"
            >
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-300">
                <h3 className={`text-xl font-serif font-bold text-[${COLOR_DARK}] uppercase tracking-wider`}>Dokumentasi Video</h3>
                <span className="text-sm text-gray-500 font-serif italic">Panduan Bermain</span>
              </div>
              <div className={`rounded-lg overflow-hidden bg-gray-200 relative group cursor-pointer border-4 border-gray-300 shadow-lg`}>
                <img 
                  src={selectedStamp.tutorialVideo} 
                  alt="Tutorial"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = 'https://placehold.co/800x450/cccccc/333333?text=Video+Placeholder'; }} // Fallback
                  className="w-full aspect-video object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl"
                  >
                    <Play className={`w-10 h-10 text-[${COLOR_ACCENT}] ml-1`} />
                  </motion.div>
                </div>
                <div 
                  className={`absolute top-4 left-4 text-white px-3 py-1 rounded text-xs font-bold border-2 border-[${COLOR_GOLD}]`}
                  style={{ backgroundColor: COLOR_DARK }}
                >
                  TAHUN {selectedStamp.year}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Complete Collection Archive (Katalog Lengkap) */}
        <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-200">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-300">
            <h3 className={`text-3xl font-serif font-bold text-[${COLOR_DARK}] uppercase tracking-wider`}>Katalog Lengkap</h3>
            <span 
              className={`text-white px-4 py-2 rounded text-sm font-bold shadow-md`}
              style={{ backgroundColor: COLOR_ACCENT }}
            >{stampCollection.length} Koleksi</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {stampCollection.map((stamp) => (
              <motion.button
                key={stamp.id}
                onClick={() => setSelectedStamp(stamp)}
                whileHover={{ y: -4, scale: 1.03 }}
                className={`text-left group transition-all duration-200 p-2 rounded-lg ${
                  selectedStamp.id === stamp.id 
                    ? `ring-4 ring-[${COLOR_ACCENT}] bg-gray-100/50` 
                    : 'hover:bg-gray-100/50'
                }`}
              >
                <div 
                  className={`aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-gray-100 border-4 border-gray-300 shadow-lg`}
                >
                  <img 
                    src={stamp.image} 
                    alt={stamp.name}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = 'https://placehold.co/800x1000/cccccc/333333?text=N/A'; }} // Fallback
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className={`font-serif font-bold text-[${COLOR_DARK}] text-base mb-1`}>{stamp.name}</h4>
                <p className="text-xs text-gray-600 font-serif italic">{stamp.region}</p>
                <p className={`text-sm font-bold text-[${COLOR_GOLD}] mt-1`}>{stamp.nominal}</p> {/* Nominal di katalog */}
                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className={`text-sm font-semibold text-[${COLOR_ACCENT}]`}>{stamp.rating}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Zoom Modal (Outside main content flow) */}
        <ZoomModal 
          isOpen={isZoomModalOpen}
          onClose={() => setIsZoomModalOpen(false)}
          imageUrl={selectedStamp.image}
          title={selectedStamp.name}
        />

      </div>
    </div>
  );
};

export default MuseumPrangko;