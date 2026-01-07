"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, Star, ArrowLeft, Maximize2, X } from "lucide-react";

const bebasNeue = {
  className: "font-['Bebas_Neue',_sans-serif]",
};

interface StampData {
  id: number;
  name: string;
  region: string;
  image: string;
  avatar: string;
  tutorialVideo: string;
  audioFile: string;
  description: string;
  material: string;
  year: string;
  rating: number;
  reviews: number;
  nominal: string;
  countryText: string;
  stampCaption: string;
  catalogueId: string;
  printTechnique: string;
  designer: string;
  perforation: string;
  sheetSize: string;
}

interface SHPData {
  year: string;
  title: string;
  description: string;
  images: string[];
}

interface ZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

const shpData: SHPData[] = [
  {
    year: "2013",
    title: "Seri Alat Musik Tradisional Indonesia 2013",
    description:
      "Koleksi prangko yang menampilkan berbagai alat musik tradisional dari berbagai daerah di Indonesia.",
    images: ["/prangko1.png"],
  },
  {
    year: "2014",
    title: "Seri Alat Musik Tradisional Indonesia 2014",
    description:
      "Melanjutkan seri sebelumnya dengan menampilkan alat musik tradisional yang berbeda dari Nusantara.",
    images: ["/prangko2.png"],
  },
  {
    year: "2015",
    title: "Seri Alat Musik Tradisional Indonesia 2015",
    description:
      "Edisi khusus yang menampilkan alat musik langka dari berbagai pulau di Indonesia.",
    images: ["/prangko3.png"],
  },
  {
    year: "2020",
    title: "Seri Alat Musik Tradisional Indonesia 2020",
    description:
      "Edisi terbaru dengan desain modern, menampilkan dokumentasi lengkap alat musik tradisional Indonesia.",
    images: ["/prangko4.png", "/prangko5.png"],
  },
];

const stampCollection: StampData[] = [
  {
    id: 1,
    name: "Sasando",
    region: "Pulau Rote, NTT",
    image: "/sasando.webp",
    avatar: "/sasando.webp",
    tutorialVideo: "/video/sasando.mp4",
    audioFile: "/audio/sasando.mp3",
    nominal: "Rp 1,-",
    description:
      "Sasando adalah alat musik petik khas dari Pulau Rote yang terbuat dari bambu berongga sebagai tempat resonansi dan daun lontar kering yang disusun menyerupai kipas sebagai wadah suara. Penerbitan seri ini di masa Orde Lama menunjukkan upaya awal untuk mengangkat kekayaan budaya daerah sebagai identitas bangsa.",
    material: "Bambu & Daun Lontar",
    year: "1967",
    rating: 4.8,
    reviews: 234,
    stampCaption: "ALAT MUSIK PETIK Sasando",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "-",
    printTechnique: "Offset Lithography",
    designer: "Øystein Skaar.",
    perforation: "12½ x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 2,
    name: "Lilempung",
    region: "Jawa Tengah",
    image: "/lilempung.webp",
    avatar: "/lilempung.webp",
    tutorialVideo: "/video/lilempung.mp4",
    audioFile: "/audio/lilempung.mp3",
    description:
      "Ansambel musik perunggu dan kuningan yang menghasilkan harmoni khas Jawa. Digunakan dalam pertunjukan wayang. Termasuk warisan budaya tak benda.",
    material: "Perunggu, Kuningan",
    year: "1967",
    rating: 4.9,
    reviews: 412,
    nominal: "Rp 0,50",
    stampCaption: "ALAT MUSIK TRADISIONAL",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-02",
    printTechnique: "Offset Lithography",
    designer: "O. Notohadinegoro",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 3,
    name: "Foidoa",
    region: "NTT",
    image: "/foidoa.webp",
    avatar: "/foidoa.webp",
    tutorialVideo: "/video/foidoa.mp4",
    audioFile: "/audio/foidoa.mp3",
    description:
      "Alat musik petik khas Rote dari daun lontar. Menghasilkan suara lembut yang menenangkan. Sering dimainkan saat upacara adat.",
    material: "Daun Lontar",
    year: "1967",
    rating: 4.7,
    reviews: 189,
    nominal: "Rp 1,25",
    stampCaption: "ALAT MUSIK PETIK",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-03",
    printTechnique: "Offset Lithography",
    designer: "T. Soemardjono",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 4,
    name: "Kaltjapi",
    region: "Sulawesi Utara",
    image: "/kaltjapi.webp",
    avatar: "/kaltjapi.webp",
    tutorialVideo: "/video/kaltjapi.mp4",
    audioFile: "/audio/kaltjapi.mp3",
    description:
      "Alat musik perkusi dari deretan kayu dengan nada berbeda. Dimainkan dengan stik khusus. Merupakan instrumen utama di Minahasa.",
    material: "Kayu Telur",
    year: "1967",
    rating: 4.8,
    reviews: 267,
    nominal: "Rp 1,50",
    stampCaption: "MUSIK PERKUSI",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-04",
    printTechnique: "Offset Lithography",
    designer: "O. Notohadinegoro",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 5,
    name: "Arababu",
    region: "Papua & Maluku",
    image: "/arababu.webp",
    avatar: "/arababu.webp",
    tutorialVideo: "/video/arababu.mp4",
    audioFile: "/audio/arababu.mp3",
    description:
      "Alat musik gesek dengan satu senar khas Maluku. Instrumen melodi yang indah dan sering mengiringi tarian adat.",
    material: "Kayu, Kulit",
    year: "1967",
    rating: 4.6,
    reviews: 156,
    nominal: "Rp 2",
    stampCaption: "ALAT MUSIK GESEK",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-05",
    printTechnique: "Offset Lithography",
    designer: "T. Soemardjono",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 6,
    name: "Genderang",
    region: "Sumatera Barat",
    image: "/genderang.webp",
    avatar: "/genderang.webp",
    tutorialVideo: "/video/genderang.mp4",
    audioFile: "/audio/genderang.mp3",
    description:
      "Gendang panjang dari Minangkabau. Digunakan untuk mengiringi tari piring dan upacara penting lainnya.",
    material: "Kulit, Kayu",
    year: "1967",
    rating: 4.7,
    reviews: 198,
    nominal: "Rp 2,50",
    stampCaption: "ALAT MUSIK PERKUSI",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-06",
    printTechnique: "Offset Lithography",
    designer: "O. Notohadinegoro",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 7,
    name: "Katjapi",
    region: "Jawa",
    image: "/katjapi.webp",
    avatar: "/katjapi.webp",
    tutorialVideo: "/video/kaltjapi.mp4",
    audioFile: "/audio/kaltjapi.mp3",
    description:
      "Alat musik petik Sunda dengan banyak senar. Menghasilkan bunyi lembut dan merdu. Instrumen khas seni Mamaos Cianjuran.",
    material: "Kayu, Senar",
    year: "1967",
    rating: 4.5,
    reviews: 145,
    nominal: "Rp 3",
    stampCaption: "ALAT MUSIK PETIK",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-07",
    printTechnique: "Offset Lithography",
    designer: "T. Soemardjono",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 8,
    name: "Hape",
    region: "Jawa Barat",
    image: "/hape.webp",
    avatar: "/hape.webp",
    tutorialVideo: "/video/hape.mp4",
    audioFile: "/audio/hape.mp3",
    description:
      "Alat musik petik Sunda yang lebih kecil dari Katjapi, dikenal karena melodi-melodinya yang ceria. Populer di Jawa Barat.",
    material: "Kayu, Senar",
    year: "1967",
    rating: 4.8,
    reviews: 223,
    nominal: "Rp 4",
    stampCaption: "ALAT MUSIK PETIK",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-08",
    printTechnique: "Offset Lithography",
    designer: "O. Notohadinegoro",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 9,
    name: "Gangsa",
    region: "Sumatera Barat",
    image: "/gangsa.webp",
    avatar: "/gangsa.webp",
    tutorialVideo: "/video/gangsa.mp4",
    audioFile: "/audio/gangsa.mp3",
    description:
      "Gong kecil berbentuk pencu dari Minangkabau. Dimainkan dalam ensembel Talempong. Menghasilkan ritme yang dinamis.",
    material: "Kuningan",
    year: "1967",
    rating: 4.6,
    reviews: 167,
    nominal: "Rp 5",
    stampCaption: "ALAT MUSIK PUKUL",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-09",
    printTechnique: "Offset Lithography",
    designer: "T. Soemardjono",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 10,
    name: "Serunai",
    region: "Jawa",
    image: "/serunai.webp",
    avatar: "/serunai.webp",
    tutorialVideo: "/video/serunai.mp4",
    audioFile: "/audio/serunai.mp3",
    description:
      "Alat tiup tradisional dengan suara nyaring dari membran ganda. Populer di Jawa dan Sumatera.",
    material: "Kayu, Kulit",
    year: "1967",
    rating: 4.9,
    reviews: 345,
    nominal: "Rp 6",
    stampCaption: "ALAT MUSIK TIUP",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-10",
    printTechnique: "Offset Lithography",
    designer: "O. Notohadinegoro",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 11,
    name: "Rebab",
    region: "Jawa Barat",
    image: "/rebab.webp",
    avatar: "/rebab.webp",
    tutorialVideo: "/video/rebab.mp4",
    audioFile: "/audio/rebab.mp3",
    description:
      "Alat musik gesek yang melambangkan keindahan melodi dalam musik Gamelan Jawa dan Sunda.",
    material: "Kayu, Senar",
    year: "1967",
    rating: 4.7,
    reviews: 201,
    nominal: "Rp 8",
    stampCaption: "ALAT MUSIK GESEK",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-11",
    printTechnique: "Offset Lithography",
    designer: "T. Soemardjono",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 12,
    name: "Trompet",
    region: "Aceh",
    image: "/trompet.webp",
    avatar: "/trompet.webp",
    tutorialVideo: "/video/trompet.mp4",
    audioFile: "/audio/trompet.mp3",
    description:
      "Alat tiup tradisional Aceh yang unik, sering digunakan dalam prosesi kerajaan dan upacara adat.",
    material: "Kayu",
    year: "1967",
    rating: 4.5,
    reviews: 134,
    nominal: "Rp 10",
    stampCaption: "ALAT MUSIK TIUP",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-12",
    printTechnique: "Offset Lithography",
    designer: "O. Notohadinegoro",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 13,
    name: "Lotobuang",
    region: "Jawa Barat",
    image: "/lotobuang.webp",
    avatar: "/lotobuang.webp",
    tutorialVideo: "/video/lotobuang.mp4",
    audioFile: "/audio/lotobuang.mp3",
    description:
      "Ansambel musik dari bambu dengan berbagai ukuran. Modern dan populer di kalangan muda. Mirip Angklung namun lebih kecil.",
    material: "Bambu",
    year: "1967",
    rating: 4.8,
    reviews: 289,
    nominal: "Rp 12",
    stampCaption: "ALAT MUSIK BAMBU",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-13",
    printTechnique: "Offset Lithography",
    designer: "T. Soemardjono",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 14,
    name: "Tamburu",
    region: "Lombok",
    image: "/tamburu.webp",
    avatar: "/tamburu.webp",
    tutorialVideo: "/video/tamburu.mp4",
    audioFile: "/audio/tamburu.mp3",
    description:
      "Gendang besar Sasak yang dimainkan dalam grup. Mengiringi perang topat dan upacara. Memiliki peran ritmis penting.",
    material: "Kayu, Kulit",
    year: "1967",
    rating: 4.6,
    reviews: 178,
    nominal: "Rp 15",
    stampCaption: "ALAT MUSIK PUKUL",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-14",
    printTechnique: "Offset Lithography",
    designer: "O. Notohadinegoro",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 15,
    name: "Kulintang",
    region: "Jawa Barat",
    image: "/kulintang.webp",
    avatar: "/kulintang.webp",
    tutorialVideo: "/video/kulintang.mp4",
    audioFile: "/audio/kulintang.mp3",
    description:
      "Alat musik dari bilah kayu yang dipukul. Mirip gambang namun dengan resonansi yang berbeda. Populer di Jawa Barat dan Maluku Utara.",
    material: "Bambu",
    year: "1967",
    rating: 4.7,
    reviews: 212,
    nominal: "Rp 20",
    stampCaption: "ALAT MUSIK BILAH",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-15",
    printTechnique: "Offset Lithography",
    designer: "T. Soemardjono",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
  {
    id: 16,
    name: "Keledi",
    region: "Sumatera Utara",
    image: "/keledi.webp",
    avatar: "/keledi.webp",
    tutorialVideo: "/video/keledi.mp4",
    audioFile: "/audio/keledi.mp3",
    description:
      "Alat tiup Batak dengan suara keras dan lantang, terbuat dari gabungan bambu. Digunakan dalam pesta adat Batak dan upacara pemakaman.",
    material: "Kayu, Logam",
    year: "1967",
    rating: 4.5,
    reviews: 143,
    nominal: "Rp 25",
    stampCaption: "ALAT MUSIK TIUP",
    countryText: "REPUBLIK INDONESIA",
    catalogueId: "SNI.IDN.67.A-16",
    printTechnique: "Offset Lithography",
    designer: "O. Notohadinegoro",
    perforation: "12 x 12",
    sheetSize: "50 (5x10)",
  },
];

const ZoomModal: React.FC<ZoomModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      setIsDragging(false);
    }
  }, [isOpen]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(1, scale + delta), 5);
    setScale(newScale);
    if (newScale === 1) setPosition({ x: 0, y: 0 });
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1)
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };
  const handleMouseUp = () => setIsDragging(false);
  const zoomIn = () => setScale(Math.min(scale + 0.5, 5));
  const zoomOut = () => {
    const newScale = Math.max(scale - 0.5, 1);
    setScale(newScale);
    if (newScale === 1) setPosition({ x: 0, y: 0 });
  };
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="w-full h-full max-w-7xl bg-gray-900 relative"
          >
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4 flex justify-between items-center">
              <h3 className="text-xl font-serif font-bold text-white">
                Prangko: {title}
              </h3>
              <button
                onClick={onClose}
                className="text-white hover:text-red-500 transition-colors p-2 rounded-full bg-black/50 hover:bg-red-500/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/70 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-4 border border-white/20">
              <button
                onClick={zoomOut}
                disabled={scale <= 1}
                className="text-white hover:text-blue-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors text-2xl font-bold w-8 h-8 flex items-center justify-center"
              >
                −
              </button>
              <span className="text-white font-mono text-sm min-w-[60px] text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={zoomIn}
                disabled={scale >= 5}
                className="text-white hover:text-blue-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors text-2xl font-bold w-8 h-8 flex items-center justify-center"
              >
                +
              </button>
              {scale > 1 && (
                <button
                  onClick={resetZoom}
                  className="text-white hover:text-blue-400 transition-colors text-xs ml-2 px-3 py-1 bg-white/10 rounded-full"
                >
                  Reset
                </button>
              )}
            </div>
            <div
              className="w-full h-full flex items-center justify-center overflow-hidden cursor-move"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <motion.img
                src={imageUrl}
                alt={`Zoomed ${title}`}
                className="max-w-full max-h-full object-contain select-none"
                style={{
                  transform: `scale(${scale}) translate(${position.x / scale
                    }px, ${position.y / scale}px)`,
                  cursor:
                    scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                  transition: isDragging ? "none" : "transform 0.2s ease-out",
                }}
                draggable={false}
              />
            </div>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 text-center">
              <p className="text-white/70 text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                {scale > 1 ? "🖱️ Seret • 🔍 Scroll zoom" : "🔍 Scroll zoom"}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function MuseumPrangko() {
  const [selectedStamp, setSelectedStamp] = useState<StampData>(
    stampCollection[0]
  );
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [currentSHPIndex, setCurrentSHPIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(10);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);


  const handlePlayVideo = useCallback(() => {
    if (videoRef.current) {
      if (isPlayingVideo) {
        videoRef.current.pause();
        setIsPlayingVideo(false);
      } else {
        videoRef.current.play();
        setIsPlayingVideo(true);
      }
    }
  }, [isPlayingVideo]);

  const handlePlayAudio = useCallback(() => {
  if (!audioRef.current) {
    // Buat audio element dengan file audio dari selectedStamp
    audioRef.current = new Audio(selectedStamp.audioFile); // Gunakan audioFile dari selectedStamp

    // Event listeners
    audioRef.current.addEventListener("loadedmetadata", () => {
      if (audioRef.current) {
        setAudioDuration(audioRef.current.duration);
      }
    });

    audioRef.current.addEventListener("timeupdate", () => {
      if (audioRef.current) {
        setAudioCurrentTime(audioRef.current.currentTime);
        const progress =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setAudioProgress(progress);
      }
    });

    audioRef.current.addEventListener("ended", () => {
      setIsPlayingAudio(false);
      setAudioCurrentTime(0);
      setAudioProgress(0);
    });
  }

  if (isPlayingAudio) {
    audioRef.current.pause();
    setIsPlayingAudio(false);
  } else {
    audioRef.current.play();
    setIsPlayingAudio(true);
  }
}, [isPlayingAudio, selectedStamp.audioFile]); // Tambahkan selectedStamp.audioFile ke dependency

// Tambahkan useEffect ini setelah deklarasi audioRef
React.useEffect(() => {
  // Reset audio ketika selectedStamp berubah
  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current = null;
  }
  setIsPlayingAudio(false);
  setAudioProgress(0);
  setAudioCurrentTime(0);
  setAudioDuration(10);
}, [selectedStamp.id]); // Trigger saat stamp berubah

  // Di bagian video section, ganti ini:
<video
  ref={videoRef}
  src={selectedStamp.tutorialVideo} // Gunakan tutorialVideo dari selectedStamp
  className="w-full aspect-video object-cover"
  playsInline
/>

// Dan tambahkan useEffect untuk reset video saat stamp berubah:
React.useEffect(() => {
  const video = videoRef.current;
  if (video) {
    video.load(); // Reload video ketika selectedStamp berubah
    setIsPlayingVideo(false);
  }
}, [selectedStamp.id]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const nextSHP = () => {
    setCurrentSHPIndex((prev) => (prev + 1) % shpData.length);
    setCurrentImageIndex(0);
  };
  const prevSHP = () => {
    setCurrentSHPIndex((prev) => (prev - 1 + shpData.length) % shpData.length);
    setCurrentImageIndex(0);
  };
  const nextImage = () => {
    const currentSHP = shpData[currentSHPIndex];
    setCurrentImageIndex((prev) => (prev + 1) % currentSHP.images.length);
  };
  const prevImage = () => {
    const currentSHP = shpData[currentSHPIndex];
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentSHP.images.length) % currentSHP.images.length
    );
  };
  const handleRatingSubmit = () => {
    if (userRating > 0) {
      setHasRated(true);
      setTimeout(() => setHasRated(false), 3000);
    }
  };

  return (
    <div
      style={{ backgroundColor: "#f0f4f8" }}
      className="min-h-screen text-gray-800 font-sans"
    >
      <div className="sticky top-0 z-10 w-full bg-white shadow-md border-b border-gray-200 py-3 px-4 md:px-8">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between relative">
          <a
            href="/prangko"
            style={{ color: "#24459d" }}
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-serif text-sm">Kembali</span>
          </a>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <span
              className={`text-2xl md:text-3xl font-black tracking-wider ${bebasNeue.className}`}
              style={{ color: "#172b60" }}
            >
              MUSEUM POS INDONESIA
            </span>
          </div>
          <div className="w-[100px] md:w-[120px]"></div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto p-4 md:p-8">
        <div className="mb-8 pt-4">
          <h1
            className="text-2xl font-serif font-bold mb-1 tracking-wider"
            style={{ color: "#172b60" }}
          >
            Museum Pos Indonesia
          </h1>
          <p className="text-gray-600 font-serif italic text-lg">
            Konteks sejarah dan politik pada tahun 1967, saat seri prangko alat
            musik tradisional diterbitkan, berada pada periode transisi besar
            dari Orde Lama ke Orde Baru. Ini adalah masa yang penuh gejolak, di
            mana pemerintahan baru sedang berusaha membangun identitas dan
            legitimasi, salah satunya dengan menonjolkan kekayaan budaya
            nasional. Seri alat musik tradisional nusantara ini merupakan
            prangko definitif berbudaya. Meskipun berjenis Prangko Definitif
            (Biasa), desainnya sengaja diangkat dari tema budaya yang penting,
            menunjukkan perubahan fokus dari tema-tema politik yang kental pada
            masa Orde Lama sebelumnya.
          </p>
          <div
            style={{ backgroundColor: "#24459d" }}
            className="w-16 h-1 mt-2"
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              layout
              style={{ backgroundColor: "#172b60", borderColor: "#24459d" }}
              className="rounded-xl p-8 text-white shadow-2xl border-4"
            >
              <div className="text-center mb-6">
                <div
                  style={{ backgroundColor: "#24459d" }}
                  className="inline-block text-white px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase shadow-md"
                >
                  KOLEKSI UNGGULAN
                </div>
                <p
                  className="text-3xl font-serif font-black mb-1"
                  style={{ color: "#d4af37" }}
                >
                  {selectedStamp.nominal}
                </p>
                <h2 className="text-3xl font-serif font-bold mb-2 text-white">
                  {selectedStamp.name}
                </h2>
                <h3 className="text-xl font-serif text-blue-200">
                  {selectedStamp.region}
                </h3>
                <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
              </div>
              <div
                className="relative rounded-lg overflow-hidden shadow-2xl mb-6 border-8 border-white group cursor-pointer"
                onClick={() => setIsZoomModalOpen(true)}
              >
                <img
                  src={selectedStamp.image}
                  alt={selectedStamp.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).onerror = null;
                    (
                      e.target as HTMLImageElement
                    ).src = `https://placehold.co/400x500/172b60/ffffff?text=${selectedStamp.name}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Maximize2 className="w-12 h-12 text-white/90" />
                </div>
              </div>
              <p className="text-center text-sm text-blue-100 font-serif italic">
                Klik gambar di atas untuk melihat detail prangko.
              </p>
            </motion.div>

            <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200">
              <h3
                className="text-lg font-serif font-bold mb-4 text-center uppercase tracking-wider"
                style={{ color: "#24459d" }}
              >
                Galeri Pilihan
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {stampCollection.slice(0, 8).map((stamp) => (
                  <motion.button
                    key={stamp.id}
                    onClick={() => setSelectedStamp(stamp)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square rounded overflow-hidden border-4 transition-all duration-300 ${selectedStamp.id === stamp.id
                        ? "shadow-lg"
                        : "border-gray-300 hover:border-gray-400"
                      }`}
                    style={
                      selectedStamp.id === stamp.id
                        ? { borderColor: "#24459d" }
                        : {}
                    }
                  >
                    <img
                      src={stamp.avatar}
                      alt={stamp.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).onerror = null;
                        (
                          e.target as HTMLImageElement
                        ).src = `https://placehold.co/100x125/172b60/ffffff?text=${stamp.name.charAt(
                          0
                        )}`;
                      }}
                    />
                  </motion.button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center font-serif italic">
                {selectedStamp.name}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                layout
                className="bg-white rounded-xl p-8 shadow-xl border border-gray-200"
              >
                <h3
                  className="text-xl font-serif font-bold mb-4 pb-3 border-b border-gray-300 uppercase tracking-wider"
                  style={{ color: "#24459d" }}
                >
                  Informasi Artefak
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                    <div>
                      <h4
                        className="text-3xl font-serif font-extrabold"
                        style={{ color: "#172b60" }}
                      >
                        {selectedStamp.name}
                      </h4>
                      <p
                        className="text-sm flex items-center gap-2 mb-2 font-semibold"
                        style={{ color: "#24459d" }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: "#d4af37" }}
                        />
                        <span className="font-serif uppercase">
                          {selectedStamp.region}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-500 mb-1 tracking-widest">
                        NOMINAL
                      </p>
                      <p
                        className="text-2xl font-serif font-black"
                        style={{ color: "#d4af37" }}
                      >
                        {selectedStamp.nominal}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base font-serif border-b border-gray-200 pb-4">
                    {selectedStamp.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-inner">
                      <p
                        className="text-xs mb-1 font-bold tracking-widest"
                        style={{ color: "#24459d" }}
                      >
                        MATERIAL
                      </p>
                      <p className="text-lg font-serif font-semibold text-gray-800">
                        {selectedStamp.material}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-inner">
                      <p
                        className="text-xs mb-1 font-bold tracking-widest"
                        style={{ color: "#24459d" }}
                      >
                        PERIODE
                      </p>
                      <p className="text-lg font-serif font-semibold text-gray-800">
                        {selectedStamp.year}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <h4
                      className="text-base font-serif font-bold mb-3 uppercase tracking-wider text-center"
                      style={{ color: "#172b60" }}
                    >
                      Identitas Prangko Resmi
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                      <div className="flex justify-between items-center col-span-2 bg-blue-50 p-2 rounded border border-blue-100">
                        <span className="font-bold text-gray-600">
                          TEKS NEGARA:
                        </span>
                        <span
                          className="font-black text-lg"
                          style={{ color: "#172b60" }}
                        >
                          {selectedStamp.countryText}
                        </span>
                      </div>
                      <div className="flex justify-between items-center col-span-2">
                        <span className="font-semibold text-gray-600">
                          Keterangan Prangko:
                        </span>
                        <span className="font-bold text-gray-800 text-right">
                          {selectedStamp.stampCaption}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-600">
                          Nilai Nominal:
                        </span>
                        <span
                          className="font-bold"
                          style={{ color: "#d4af37" }}
                        >
                          {selectedStamp.nominal}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-600">
                          Asal Daerah:
                        </span>
                        <span className="font-bold text-gray-800">
                          {selectedStamp.region}
                        </span>
                      </div>

                      <div className="flex justify-between items-center border-t mt-3 pt-3 col-span-2">
                        <span className="font-semibold text-gray-600">
                          No. Katalog:
                        </span>
                        <span
                          className="font-bold"
                          style={{ color: "#24459d" }}
                        >
                          {selectedStamp.catalogueId}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-600">
                          Teknik Cetak:
                        </span>
                        <span className="font-bold text-gray-800">
                          {selectedStamp.printTechnique}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-600">
                          Perforasi:
                        </span>
                        <span className="font-bold text-gray-800">
                          {selectedStamp.perforation}
                        </span>
                      </div>
                      <div className="flex justify-between items-center col-span-2">
                        <span className="font-semibold text-gray-600">
                          Desainer:
                        </span>
                        <span className="font-bold text-gray-800">
                          {selectedStamp.designer}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span
                      className="font-bold text-lg"
                      style={{ color: "#172b60" }}
                    >
                      {selectedStamp.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({selectedStamp.reviews} ulasan)
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                layout
                className="rounded-xl p-8 shadow-2xl text-white border-4"
                style={{ backgroundColor: "#172b60", borderColor: "#24459d" }}
              >
                <h3
                  className="text-xl font-serif font-bold mb-6 pb-3 border-b uppercase tracking-wider"
                  style={{ borderColor: "#d4af37" }}
                >
                  Arsip Audio
                </h3>
                <div
                  className="aspect-square rounded-lg mb-6 flex items-center justify-center relative overflow-hidden border-8 border-white shadow-inner"
                  style={{ backgroundColor: "#24459d" }}
                >
                  <motion.div
                    animate={
                      isPlayingAudio
                        ? { scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white/30 rounded-full"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePlayAudio}
                    className="relative z-10 w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-2xl ring-4 ring-white/50"
                  >
                    {isPlayingAudio ? (
                      <Volume2
                        className="w-14 h-14"
                        style={{ color: "#24459d" }}
                      />
                    ) : (
                      <Play
                        className="w-14 h-14 ml-1"
                        style={{ color: "#24459d" }}
                      />
                    )}
                  </motion.button>
                </div>
                <div className="space-y-4">
                  <div>
                    <p
                      className="text-sm mb-2 font-serif italic"
                      style={{ color: "#d4af37" }}
                    >
                      Sedang Diputar
                    </p>
                    <p className="font-serif font-bold text-2xl text-white">
                      {selectedStamp.name}
                    </p>
                    <p
                      className="text-base font-serif"
                      style={{ color: "#d4af37" }}
                    >
                      {selectedStamp.region}
                    </p>
                  </div>
                  {/* <div className="h-2 bg-white/30 rounded-full overflow-hidden border border-white/40">
                    <motion.div className="h-full rounded-full shadow-lg" style={{ backgroundColor: '#d4af37' }} initial={{ width: '0%' }} animate={{ width: isPlayingAudio ? '85%' : '0%' }} transition={{ duration: 30, ease: 'linear' }} />
                  </div> */}
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden border border-white/40">
                    <motion.div
                      className="h-full rounded-full shadow-lg"
                      style={{
                        backgroundColor: "#d4af37",
                        width: `${audioProgress}%`,
                      }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <div
                    className="flex items-center justify-between text-xs font-serif"
                    style={{ color: "#d4af37" }}
                  >
                    <span>{formatTime(audioCurrentTime)}</span>
                    <span>{formatTime(audioDuration)}</span>
                  </div>
                </div>
              </motion.div>
            </div>

                        <motion.div
              layout
              className="bg-white rounded-xl p-8 shadow-xl border border-gray-200"
            >
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-300">
                <h3
                  className="text-xl font-serif font-bold uppercase tracking-wider"
                  style={{ color: "#172b60" }}
                >
                  Dokumentasi Video
                </h3>
                <span className="text-sm text-gray-500 font-serif italic">
                  Panduan Bermain
                </span>
              </div>
              <div 
                onClick={handlePlayVideo}
                className="rounded-lg overflow-hidden bg-gray-200 relative group cursor-pointer border-4 border-gray-300 shadow-lg"
              >
                <video
                  ref={videoRef}
                  src={selectedStamp.tutorialVideo}
                  className="w-full aspect-video object-cover"
                  playsInline
                />
                {!isPlayingVideo && (
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl"
                    >
                      <Play
                        className="w-10 h-10 ml-1"
                        style={{ color: "#24459d" }}
                      />
                    </motion.div>
                  </div>
                )}
                <div
                  className="absolute top-4 left-4 text-white px-3 py-1 rounded text-xs font-bold border-2"
                  style={{ backgroundColor: "#172b60", borderColor: "#d4af37" }}
                >
                  TAHUN {selectedStamp.year}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center font-serif italic">
                {isPlayingVideo ? "⏸️ Klik video untuk pause" : "▶️ Klik video untuk memutar"}1
              </p>
            </motion.div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-200">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-300">
            <h3
              className="text-3xl font-serif font-bold uppercase tracking-wider"
              style={{ color: "#172b60" }}
            >
              Katalog Lengkap
            </h3>
            <span
              className="text-white px-4 py-2 rounded text-sm font-bold shadow-md"
              style={{ backgroundColor: "#24459d" }}
            >
              {stampCollection.length} Koleksi
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg border-2 border-blue-200 sticky top-24">
                <h4
                  className="text-xl font-serif font-bold mb-4 uppercase tracking-wider"
                  style={{ color: "#172b60" }}
                >
                  Seri Himpunan Prangko
                </h4>
                <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-3xl font-black font-serif"
                      style={{ color: "#24459d" }}
                    >
                      {shpData[currentSHPIndex].year}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">
                      {currentSHPIndex + 1}/{shpData.length}
                    </span>
                  </div>
                  <h5
                    className="text-lg font-serif font-bold mb-3"
                    style={{ color: "#172b60" }}
                  >
                    {shpData[currentSHPIndex].title}
                  </h5>
                  <div className="relative mb-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 border-4 border-gray-300 shadow-lg">
                      <img
                        src={shpData[currentSHPIndex].images[currentImageIndex]}
                        alt={`SHP ${shpData[currentSHPIndex].year}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).onerror = null;
                          (
                            e.target as HTMLImageElement
                          ).src = `https://placehold.co/400x300/172b60/ffffff?text=SHP+${shpData[currentSHPIndex].year}`;
                        }}
                      />
                    </div>
                    {shpData[currentSHPIndex].images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                        >
                          <svg
                            className="w-5 h-5 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                        >
                          <svg
                            className="w-5 h-5 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                          {shpData[currentSHPIndex].images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex
                                  ? "bg-white w-6"
                                  : "bg-white/50"
                                }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-serif">
                    {shpData[currentSHPIndex].description}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={prevSHP}
                    className="flex-1 bg-white hover:bg-blue-50 font-bold py-3 px-4 rounded-lg shadow-md transition-all border-2 border-blue-200 hover:border-blue-300 flex items-center justify-center gap-2"
                    style={{ color: "#24459d" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Prev
                  </button>
                  <button
                    onClick={nextSHP}
                    className="flex-1 bg-white hover:bg-blue-50 font-bold py-3 px-4 rounded-lg shadow-md transition-all border-2 border-blue-200 hover:border-blue-300 flex items-center justify-center gap-2"
                    style={{ color: "#24459d" }}
                  >
                    Next
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 bg-white rounded-lg p-4 shadow-md border-2 border-yellow-200">
                  <p className="text-sm font-bold text-gray-700 mb-3 text-center">
                    Beri Rating SHP Ini
                  </p>
                  <div className="flex justify-center gap-2 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setUserRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110 focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${star <= (hoverRating || userRating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-300"
                            } transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                  {userRating > 0 && (
                    <button
                      onClick={handleRatingSubmit}
                      className="w-full text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all"
                      style={{ backgroundColor: "#24459d" }}
                    >
                      {hasRated ? "✓ Rating Tersimpan!" : "Submit Rating"}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {stampCollection.map((stamp) => (
                  <motion.button
                    key={stamp.id}
                    onClick={() => setSelectedStamp(stamp)}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className={`text-left group transition-all duration-200 p-2 rounded-lg ${selectedStamp.id === stamp.id
                        ? "bg-gray-100/50"
                        : "hover:bg-gray-100/50"
                      }`}
                    style={
                      selectedStamp.id === stamp.id
                        ? { boxShadow: `0 0 0 4px #24459d` }
                        : {}
                    }
                  >
                    <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-gray-100 border-4 border-gray-300 shadow-lg">
                      <img
                        src={stamp.image}
                        alt={stamp.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).onerror = null;
                          (
                            e.target as HTMLImageElement
                          ).src = `https://placehold.co/400x500/172b60/ffffff?text=${stamp.name}`;
                        }}
                      />
                    </div>
                    <h4
                      className="font-serif font-bold text-base mb-1"
                      style={{ color: "#172b60" }}
                    >
                      {stamp.name}
                    </h4>
                    <p className="text-xs text-gray-600 font-serif italic">
                      {stamp.region}
                    </p>
                    <p
                      className="text-sm font-bold mt-1"
                      style={{ color: "#d4af37" }}
                    >
                      {stamp.nominal}
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "#24459d" }}
                      >
                        {stamp.rating}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ZoomModal
          isOpen={isZoomModalOpen}
          onClose={() => setIsZoomModalOpen(false)}
          imageUrl={selectedStamp.image}
          title={selectedStamp.name}
        />
      </div>
    </div>
  );
}
