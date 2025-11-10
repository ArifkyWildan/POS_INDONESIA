"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, Star, ArrowLeft, Building2 } from 'lucide-react';

// Data Types
interface Stamp {
  id: number;
  name: string;
  region: string;
  image: string;
  avatar: string;
  tutorialVideo: string;
  description: string;
  material: string;
  year: string;
  rating: number;
  reviews: number;
}

// Data Collection
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
    reviews: 234
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
    reviews: 412
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
    reviews: 189
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
    reviews: 267
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
    reviews: 156
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
    reviews: 198
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
    reviews: 145
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
    reviews: 223
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
    reviews: 167
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
    reviews: 345
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
    reviews: 201
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
    reviews: 134
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
    reviews: 289
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
    reviews: 178
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
    reviews: 212
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
    reviews: 143
  }
];

// Main Component
export default function MuseumPrangko() {
  const [selectedStamp, setSelectedStamp] = useState(stampCollection[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f4f8] p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Museum Header */}
        <div className="mb-8 pb-6 border-b-2 border-[#2E3192]/20">
          <button 
            onClick={() => window.location.href = '/prangko'}
            className="flex items-center gap-2 text-[#2E3192] hover:text-[#1e2060] transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-serif text-sm">Kembali ke Beranda</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#2E3192] rounded flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold text-[#2E3192] mb-1">Museum Pos Indonesia</h1>
              <p className="text-[#4a5568] font-serif italic">Koleksi Prangko Alat Musik Tradisional Nusantara</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left Column - Featured Exhibition */}
          <div className="lg:col-span-1 space-y-6">
            {/* Featured Stamp Display */}
            <motion.div 
              layout
              className="bg-gradient-to-br from-[#2E3192] via-[#3d4ab8] to-[#2E3192] rounded-lg p-8 text-white shadow-xl border-4 border-[#2E3192]"
            >
              <div className="text-center mb-6">
                <div className="inline-block bg-white text-[#2E3192] px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-wider">
                  KOLEKSI UTAMA
                </div>
                <h2 className="text-2xl font-serif font-bold mb-2">Prangko Alat Musik</h2>
                <h3 className="text-xl font-serif mb-1">Nusantara</h3>
                <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden shadow-2xl mb-6 border-8 border-white">
                <img 
                  src={selectedStamp.image} 
                  alt={selectedStamp.name}
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#2E3192]/90">
                  <h4 className="text-xl font-serif font-bold">{selectedStamp.name}</h4>
                  <p className="text-sm text-blue-200">{selectedStamp.region}</p>
                </div>
              </div>

              <p className="text-center text-sm text-blue-100 font-serif italic">
                16 koleksi prangko tersedia untuk ditinjau
              </p>
            </motion.div>

            {/* Gallery Preview */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-[#2E3192]/30">
              <h3 className="text-lg font-serif font-bold text-[#2E3192] mb-4 text-center">Galeri Pilihan</h3>
              <div className="grid grid-cols-4 gap-3">
                {stampCollection.slice(0, 8).map((stamp) => (
                  <motion.button
                    key={stamp.id}
                    onClick={() => setSelectedStamp(stamp)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square rounded overflow-hidden border-4 transition-all ${
                      selectedStamp.id === stamp.id 
                        ? 'border-[#2E3192] shadow-lg' 
                        : 'border-gray-300'
                    }`}
                  >
                    <img 
                      src={stamp.avatar} 
                      alt={stamp.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-3 text-center font-serif italic">{selectedStamp.name}</p>
            </div>
          </div>

          {/* Right Column - Exhibition Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Documentary Section */}
            <motion.div 
              layout
              className="bg-white rounded-lg p-6 shadow-lg border-2 border-[#2E3192]/30"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <h3 className="text-xl font-serif font-bold text-[#2E3192]">Dokumentasi Video</h3>
                <span className="text-sm text-gray-600 font-serif italic">Panduan Bermain</span>
              </div>
              <div className="rounded-lg overflow-hidden bg-[#2E3192] relative group cursor-pointer border-4 border-[#2E3192]">
                <img 
                  src={selectedStamp.tutorialVideo} 
                  alt="Tutorial"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl"
                  >
                    <Play className="w-10 h-10 text-[#2E3192] ml-1" />
                  </motion.div>
                </div>
                <div className="absolute top-4 left-4 bg-[#2E3192] text-white px-3 py-1 rounded text-xs font-bold border-2 border-white">
                  TAHUN {selectedStamp.year}
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Artifact Information */}
              <motion.div 
                layout
                className="bg-white rounded-lg p-6 shadow-lg border-2 border-[#2E3192]/30"
              >
                <h3 className="text-xl font-serif font-bold text-[#2E3192] mb-4 pb-3 border-b border-gray-200">Informasi Artefak</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-[#2E3192] mb-2">{selectedStamp.name}</h4>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#2E3192]" />
                      <span className="font-serif">{selectedStamp.region}</span>
                    </p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-sm font-serif">
                    {selectedStamp.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                    <div className="bg-[#f0f4f8] p-3 rounded">
                      <p className="text-xs text-[#2E3192] mb-1 font-bold tracking-wider">MATERIAL</p>
                      <p className="text-sm font-serif font-semibold text-gray-800">{selectedStamp.material}</p>
                    </div>
                    <div className="bg-[#f0f4f8] p-3 rounded">
                      <p className="text-xs text-[#2E3192] mb-1 font-bold tracking-wider">PERIODE</p>
                      <p className="text-sm font-serif font-semibold text-gray-800">{selectedStamp.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-[#2E3192]">{selectedStamp.rating}</span>
                    <span className="text-sm text-gray-600 font-serif">• {selectedStamp.reviews} pengunjung</span>
                  </div>
                </div>
              </motion.div>

              {/* Audio Archive */}
              <motion.div 
                layout
                className="bg-gradient-to-br from-[#2E3192] to-[#1e2060] rounded-lg p-6 shadow-lg text-white border-2 border-[#2E3192]"
              >
                <h3 className="text-xl font-serif font-bold mb-4 pb-3 border-b border-blue-400">Arsip Audio</h3>
                
                <div className="aspect-square rounded bg-white/10 backdrop-blur-sm mb-6 flex items-center justify-center relative overflow-hidden border-2 border-white/30">
                  <motion.div
                    animate={isPlayingAudio ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white/20 rounded-full"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="relative z-10 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl"
                  >
                    {isPlayingAudio ? (
                      <Volume2 className="w-12 h-12 text-[#2E3192]" />
                    ) : (
                      <Play className="w-12 h-12 text-[#2E3192] ml-1" />
                    )}
                  </motion.button>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm opacity-90 mb-2 font-serif italic">Sedang Diputar</p>
                    <p className="font-serif font-bold text-lg">{selectedStamp.name}</p>
                    <p className="text-sm opacity-75 font-serif">{selectedStamp.region}</p>
                  </div>

                  <div className="h-2 bg-white/20 rounded-full overflow-hidden border border-white/30">
                    <motion.div 
                      className="h-full bg-white rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: isPlayingAudio ? '100%' : '0%' }}
                      transition={{ duration: 30, ease: 'linear' }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs opacity-75 font-serif">
                    <span>0:00</span>
                    <span>3:45</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Complete Collection Archive */}
        <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-[#2E3192]/30">
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200">
            <h3 className="text-2xl font-serif font-bold text-[#2E3192]">Katalog Lengkap</h3>
            <span className="bg-[#2E3192] text-white px-4 py-2 rounded text-sm font-bold">{stampCollection.length} Koleksi</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {stampCollection.map((stamp) => (
              <motion.button
                key={stamp.id}
                onClick={() => setSelectedStamp(stamp)}
                whileHover={{ y: -4 }}
                className={`text-left group ${
                  selectedStamp.id === stamp.id ? 'ring-4 ring-[#2E3192] rounded-lg' : ''
                }`}
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-gray-100 border-4 border-gray-200">
                  <img 
                    src={stamp.image} 
                    alt={stamp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-serif font-bold text-[#2E3192] text-sm mb-1">{stamp.name}</h4>
                <p className="text-xs text-gray-600 font-serif italic">{stamp.region}</p>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold text-[#2E3192]">{stamp.rating}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}