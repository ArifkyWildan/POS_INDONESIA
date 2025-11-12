"use client";

import React, { useState, useCallback } from 'react';

// --- Konten Prangko (Stamps Content Data) ---
interface StampItem {
  id: number;
  imageSrc: string;
  caption: string;
  description: string;
  isWide?: boolean;
}

const mainContent: StampItem[] = [
  {
    id: 1,
    imageSrc: '/tokoh1.webp',
    caption: 'Tokoh Presiden Indonesia',
    description: 'Prangko seri presiden pertama Indonesia, Ir. Soekarno, diterbitkan pada tahun 1951. Prangko ini menampilkan potret Presiden Soekarno dengan latar belakang merah yang kuat, melambangkan semangat perjuangan dan kemerdekaan Indonesia. Desain prangko ini menjadi salah satu ikon filateli Indonesia yang paling dikenal di dunia.',
  },
  {
    id: 2,
    imageSrc: '/tokoh2.webp',
    caption: 'Soeharto (1966 - 1997)',
    description: 'Bapak presiden Soeharto berpendapat bahwa prangko tidak hanya memperlihatkan keberagaman budaya, tetapi juga mencerminkan sejarah. Nah maka dari itu, mengembangkan hobi mengoleksi prangko dianggap penting untuk melatih seseorang menjadi pribadi yang rajin, ulet, tekun, dan tidak lupa akan sejarah.',
  },
  {
    id: 3,
    imageSrc: '/tokoh3.webp',
    caption: 'B.J. Habibie (1998 - 1999)',
    description: 'Bapak B.J. Habibie merupakan presiden ketiga sekaligus orang pertama di Indonesia yang berhasil membuat pesawat yang dinamakan N250 Gatot Kaca. Pada saat itu, beliau menjabat sebagai Menteri Riset dan Teknologi.',
  },
  {
    id: 4,
    imageSrc: '/tokoh5.webp',
    caption: 'Megawati (2001 - 2004)',
    description: 'Ibu Megawati merupakan presiden perempuan pertama di Indonesia. Beliau menjadi Presiden setelah MPR mengadakan Sidang Istimewa MPR pada tahun 2001. Beliau juga merupakan ketua umum Partai Demokrasi Indonesia Perjuangan (PDI-P).',
    isWide: true,
  },
  {
    id: 5,
    imageSrc: '/tokoh6.webp',
    caption: 'Presiden Soekarno (Seri Biru)',
    description: 'Varian prangko Presiden Soekarno dengan latar belakang biru yang melambangkan kedamaian dan stabilitas. Diterbitkan pada pertengahan 1950-an, prangko ini menunjukkan komitmen pemerintah dalam membangun identitas nasional melalui medium filateli yang dapat diakses oleh seluruh rakyat Indonesia.',
  },
];

const mainTitle: string = 'Prangko Para Tokoh Indonesia';
const chapterTitle: string = 'Tokoh Presiden Indonesia';
const sectionTitle: string = 'Galeri Prangko Tokoh Indonesia';
const sectionDescription: string = 'Koleksi lengkap prangko-prangko yang menampilkan para tokoh penting dalam sejarah Indonesia. Dari presiden pertama hingga pahlawan nasional, setiap prangko menceritakan kisah perjuangan dan dedikasi mereka untuk kemerdekaan dan kemajuan bangsa. Prangko-prangko ini tidak hanya bernilai historis, tetapi juga menjadi saksi bisu perjalanan Indonesia sebagai negara merdeka.';

// --- Komponen Modal Zoom dengan Pan & Zoom ---
interface ZoomModalProps {
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

const ZoomModal: React.FC<ZoomModalProps> = ({ imageSrc, imageAlt, onClose }) => {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(1, scale + delta), 5);
    
    if (newScale === 1) {
      setPosition({ x: 0, y: 0 });
    }
    
    setScale(newScale);
  }, [scale]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  }, [scale, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  }, [isDragging, dragStart, scale]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (scale > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.touches[0].clientX - position.x, 
        y: e.touches[0].clientY - position.y 
      });
    }
  }, [scale, position]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (isDragging && scale > 1 && e.touches.length === 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  }, [isDragging, dragStart, scale]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleZoomIn = useCallback(() => {
    setScale(prev => Math.min(prev + 0.5, 5));
  }, []);

  const handleZoomOut = useCallback(() => {
    const newScale = Math.max(scale - 0.5, 1);
    if (newScale === 1) {
      setPosition({ x: 0, y: 0 });
    }
    setScale(newScale);
  }, [scale]);

  const handleReset = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Tombol Kontrol */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-50">
          <button
            onClick={onClose}
            className="p-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors text-lg font-bold w-10 h-10 flex items-center justify-center shadow-lg"
            aria-label="Tutup"
          >
            &times;
          </button>
          <button
            onClick={handleZoomIn}
            className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors text-lg font-bold w-10 h-10 flex items-center justify-center shadow-lg"
            aria-label="Zoom In"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors text-lg font-bold w-10 h-10 flex items-center justify-center shadow-lg"
            aria-label="Zoom Out"
          >
            −
          </button>
          <button
            onClick={handleReset}
            className="p-2 text-white bg-gray-600 rounded-full hover:bg-gray-700 transition-colors text-xs font-bold w-10 h-10 flex items-center justify-center shadow-lg"
            aria-label="Reset"
          >
            ↺
          </button>
        </div>

        {/* Indikator Zoom */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-sm font-semibold z-50">
          {Math.round(scale * 100)}%
        </div>

        {/* Instruksi */}
        {scale === 1 && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm text-center z-50">
            Scroll mouse atau gunakan tombol +/- untuk zoom
          </div>
        )}

        {/* Gambar */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`max-w-none max-h-none select-none transition-transform ${isDragging ? 'cursor-grabbing' : scale > 1 ? 'cursor-grab' : 'cursor-default'}`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center center',
          }}
          draggable={false}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
            (e.target as HTMLImageElement).src = 'https://placehold.co/800x800/172b60/ffffff?text=Image+Not+Found'; 
          }}
        />

        {/* Caption */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-6 py-3 rounded-lg text-sm md:text-base font-semibold max-w-2xl text-center z-50">
          {imageAlt}
        </div>
      </div>
    </div>
  );
};

// --- Komponen Utama ---
const PrangkoTokoh: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>('');
  const [currentAlt, setCurrentAlt] = useState<string>('');

  const handleImageClick = useCallback((src: string, alt: string): void => {
    setCurrentImage(src);
    setCurrentAlt(alt);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback((): void => {
    setModalOpen(false);
    setCurrentImage('');
    setCurrentAlt('');
  }, []);

  const colorPrimary: string = '#172b60'; // Biru Tua
  const colorSecondary: string = '#24459d'; // Biru Sedang

  const getGradientClass = (id: number): string => {
    // Kombinasi warna yang lebih dinamis dengan dark background
    const gradients: string[] = [
      `bg-gradient-to-br from-gray-800 to-[${colorSecondary}]`, // Gray to Blue Medium
      `bg-gradient-to-tr from-[${colorSecondary}] to-gray-800`, // Blue Medium to Gray
      `bg-gradient-to-br from-gray-800 to-[${colorPrimary}]`,   // Gray to Blue Dark
      `bg-gradient-to-tr from-[${colorPrimary}] to-gray-800`,   // Blue Dark to Gray
    ];
    return gradients[(id - 1) % gradients.length];
  };

  return (
    // Gunakan warna utama sebagai background keseluruhan
    <div className={`bg-[${colorPrimary}] text-gray-100 min-h-screen font-sans`}>
      {/* --- Navigasi Header (Sesuai Gambar Kedua) --- */}
      <nav className={`sticky top-0 z-40 bg-white shadow-xl py-3 px-4 flex justify-between items-center border-b-4 border-red-600`}>
        {/* Tombol Kembali dengan href */}
        <a
          href="/prangko" // Ganti dengan URL halaman prangko yang sebenarnya
          className={`flex items-center space-x-1 text-[${colorPrimary}] hover:text-red-600 transition duration-150 font-semibold text-base md:text-lg`}
          aria-label="Kembali ke halaman prangko"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>Kembali</span>
        </a>
        
        {/* Logo "POS IND" */}
        <div className="flex text-2xl md:text-3xl font-extrabold tracking-tight">
          <span className={`text-white bg-[${colorPrimary}] px-1 rounded-l-md`}>POS</span>
          <span className="text-white bg-red-600 px-1 rounded-r-md">IND</span>
        </div>
        <div className="w-20"></div> {/* Placeholder untuk menyeimbangkan layout */}
      </nav>

      {/* Header Utama */}
      <header className={`py-12 md:py-20 bg-[${colorSecondary}] shadow-xl relative overflow-hidden`}>
        {/* Desain Latar Belakang Geometris */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2 text-shadow-lg">
            {mainTitle}
          </h1>
          <h2 className="text-xl md:text-3xl font-light opacity-90 border-l-4 border-red-500 pl-4 py-1">
            CHAPTER 3: Para Tokoh Indonesia
          </h2>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        
        {/* Bagian Tokoh Presiden Indonesia */}
        <section className="mb-20">
          <h3 className={`text-4xl md:text-5xl font-extrabold mb-12 text-white border-b-4 border-red-600 pb-3 inline-block drop-shadow-md`}>
            {chapterTitle}
          </h3>

          {mainContent.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row items-center p-6 md:p-10 ${getGradientClass(item.id)} rounded-3xl shadow-2xl mb-12 transition duration-500 hover:scale-[1.01] hover:shadow-red-600/50`}
            >
              
              {/* Kolom Gambar Prangko */}
              <div className={`flex-shrink-0 w-full lg:w-1/3 flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} justify-center mb-6 lg:mb-0`}>
                <div 
                  className="relative w-48 h-64 cursor-pointer group rounded-xl overflow-hidden shadow-2xl ring-4 ring-white/10 hover:ring-red-500 transition-all duration-300 hover:scale-[1.03]"
                  onClick={() => handleImageClick(item.imageSrc, item.caption)}
                  role="button"
                  aria-label={`Zoom prangko ${item.caption}`}
                  tabIndex={0}
                  onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick(item.imageSrc, item.caption); }}
                >
                  <img
                    src={item.imageSrc}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).src = `https://placehold.co/200x260/${colorPrimary.substring(1)}/ffffff?text=Image+Not+Found`; }}
                  />
                   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Kolom Deskripsi */}
              <div className={`p-4 md:p-0 flex-1 w-full lg:w-2/3 ${index % 2 === 0 ? 'lg:pr-10' : 'lg:pl-10'} text-center lg:text-left`}>
                <span className="text-red-400 font-bold text-sm uppercase block mb-1">Sejarah Tokoh</span>
                <h4 className="text-3xl font-extrabold mb-4 text-white">{item.caption}</h4>
                <p className="text-gray-200 leading-relaxed text-lg">{item.description}</p>
              </div>
            </div>
          ))}

           {/* Item dengan gambar lebar (Dwitunggal) */}
           <div className={`flex flex-col p-8 md:p-12 bg-[${colorSecondary}] rounded-3xl shadow-2xl mt-8 ring-4 ring-white/10`}>
              <div className="w-full text-center mb-6">
                <h4 className="text-3xl font-extrabold mb-3 text-white border-b-2 border-white/50 pb-2 inline-block">{mainContent[3].caption}</h4>
                <p className="text-gray-200 leading-relaxed max-w-4xl mx-auto">{mainContent[3].description}</p>
              </div>
              <div className="flex justify-center w-full mt-4">
                <div 
                  className="relative w-full max-w-lg h-52 cursor-pointer group rounded-xl overflow-hidden shadow-2xl ring-4 ring-red-600/50 hover:ring-red-600 transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => handleImageClick(mainContent[3].imageSrc, mainContent[3].caption)}
                  role="button"
                  aria-label={`Zoom prangko ${mainContent[3].caption}`}
                  tabIndex={0}
                  onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick(mainContent[3].imageSrc, mainContent[3].caption); }}
                >
                  <img
                    src={mainContent[3].imageSrc}
                    alt={mainContent[3].caption}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x260/${colorPrimary.substring(1)}/ffffff?text=Image+Not+Found`; }}
                  />
                   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* Bagian Seri Pahlawan/Tokoh Negara - Galeri */}
        <section className="mt-16">
          <div className={`py-8 md:py-12 bg-[${colorPrimary}] rounded-t-3xl shadow-2xl border-b-4 border-red-600`}>
            <h3 className="text-3xl md:text-5xl font-black text-white text-center tracking-wide">{sectionTitle}</h3>
          </div>
          
          <div className={`p-6 md:p-12 bg-[${colorSecondary}]/50 backdrop-blur-sm rounded-b-3xl shadow-inner`}>
            <p className="text-gray-100 mb-10 leading-relaxed text-center max-w-4xl mx-auto text-lg">
              {sectionDescription}
            </p>

            {/* Grid Prangko */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
              {[...mainContent, mainContent[0], mainContent[2]].map((item: StampItem, index: number) => (
                <div
                  key={`gallery-${item.id}-${index}`}
                  className="w-full max-w-[150px] cursor-pointer group transition-transform duration-300 hover:scale-[1.08] hover:shadow-2xl hover:shadow-red-500/50"
                  onClick={() => handleImageClick(item.imageSrc, `Galeri: ${item.caption}`)}
                  role="button"
                  aria-label={`Zoom prangko galeri ${item.caption}`}
                  tabIndex={0}
                  onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick(item.imageSrc, `Galeri: ${item.caption}`); }}
                >
                  <div className="relative rounded-lg overflow-hidden border-4 border-gray-700 group-hover:border-red-500 transition-all duration-300">
                    <img
                      src={item.imageSrc}
                      alt={`Galeri: ${item.caption}`}
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).src = `https://placehold.co/150x200/${colorPrimary.substring(1)}/ffffff?text=Image+Not+Found`; }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                    </div>
                  </div>
                  <p className="text-center text-xs md:text-sm mt-2 text-gray-200 font-medium truncate">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal Zoom */}
      {modalOpen && (
        <ZoomModal
          imageSrc={currentImage}
          imageAlt={currentAlt}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PrangkoTokoh;