"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Home, BookOpen, Building, Map, X } from 'lucide-react';

// Warna Kustom Utama: #2E3192 (Dark Indigo/Violet)

// --- CONTENT DEFINITIONS ---

// Content for the "SEJARAH PERPOSSAN" tab
const SejarahPerpossanContent = () => (
  <div className="py-8">
    {/* Breadcrumb - Disesuaikan dengan konten yang ditampilkan */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm mb-6">
      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
        <span className="font-bold text-[#2E3192]">MUSEUM POS INDONESIA</span>
      </div>
      <span className="text-gray-500">Sejarah Perpossan</span>
    </div>

    {/* Kisah Pos Zaman Kuno */}
    <section className="mb-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image/Stamp Block (Left) - Matches design in the screenshot */}
        <div className="flex justify-center md:justify-end order-2 md:order-1">
          <div className="bg-gray-900 p-6 sm:p-8 rounded-lg max-w-sm w-full">
            <div className="bg-white p-3 sm:p-4 rounded shadow-2xl rotate-3 border-4 border-white transform hover:rotate-0 transition-transform duration-300">
              <div className="relative">
                {/* Placeholder Image: President Sukarno Stamp */}
                <img
                  src="https://placehold.co/800x1200/4c0c93/ffffff?text=Stamp+Sukarno"
                  alt="Perangko Indonesia"
                  className="w-full aspect-[2/3] object-cover"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/800x1200/4c0c93/ffffff?text=Stamp+Sukarno' }}
                />
                <div className="absolute bottom-2 left-2 right-2 bg-red-600 text-white text-center py-1">
                  <span className="text-xs font-bold tracking-widest">
                    REPUBLIK INDONESIA
                  </span>
                </div>
                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-sm font-bold rounded-sm">
                  700p
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Block (Right) */}
        <div className="order-1 md:order-2">
          {/* Judul menggunakan warna kustom #2E3192 */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
            Kisah Pos
            <br />
            Zaman Kuno
          </h2>

          <div className="mb-6 rounded-lg overflow-hidden border-2 border-gray-200 shadow-md">
            {/* Placeholder Image: Historical Group Photo */}
            <img
              src="https://placehold.co/600x300/e9d5ff/4c0c93?text=Ancient+Postal+History"
              alt="Sejarah Pos"
              className="w-full h-auto object-cover"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x300/e9d5ff/4c0c93?text=Ancient+Postal+History' }}
            />
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Sistem pengiriman pesan telah ada sejak peradaban kuno, mulai dari Mesir hingga Tiongkok, menggunakan kurir berlari, kuda, dan merpati pos. Di era modern, layanan pos berevolusi menjadi infrastruktur komunikasi global yang menghubungkan seluruh dunia.
          </p>
        </div>
      </div>
    </section>

    {/* Universal Postal Union */}
    <section className="mb-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Text Block (Left) */}
        <div className="order-1">
          {/* Judul menggunakan warna kustom #2E3192 */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
            Universal
            <br />
            Postal Union (UPU)
          </h2>

          <div className="flex items-center space-x-4 mb-6">
            {/* UPU Logo SVG menggunakan warna kustom #2E3192 */}
            <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#2E3192]" fill="currentColor">
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            <div className="text-sm">
              {/* Teks menggunakan warna kustom #2E3192 */}
              <div className="font-bold text-[#2E3192]">UNIVERSAL</div>
              <div className="font-bold text-[#2E3192]">POSTAL</div>
              <div className="font-bold text-[#2E3192]">UNION</div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
            UPU didirikan pada tahun 1874 di Bern, Swiss, untuk menyatukan layanan pos global dan membuat satu wilayah pos tunggal di seluruh dunia. Organisasi ini memastikan pertukaran surat internasional berjalan lancar dan efisien.
          </p>

          {/* Tombol menggunakan warna kustom #2E3192 */}
          <button className="text-[#2E3192] font-extrabold hover:underline transition-colors text-base sm:text-lg">
            Awali Terbentuk <ChevronRight className="inline h-5 w-5 ml-1"/>
          </button>
        </div>

        {/* Image Block (Right) - Matches design in the screenshot */}
        <div className="flex justify-center md:justify-start order-2">
          <div className="bg-gray-900 p-6 sm:p-8 rounded-lg max-w-sm w-full">
            <div className="bg-white p-2 rounded shadow-2xl">
              {/* Placeholder Image: Historical Figure B (Black and White) */}
              <img
                src="https://placehold.co/600x800/e0e0e0/000000?text=Henry+Harriman"
                alt="Historical figure"
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x800/e0e0e0/000000?text=Henry+Harriman' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Generic placeholder content for other tabs
const PlaceholderContent = ({ title }: { title: string }) => (
    <div className="p-12 text-center bg-gray-50 min-h-[60vh] flex items-center justify-center">
        <div>
            {/* Judul menggunakan warna kustom #2E3192 */}
            <h2 className="text-4xl font-black text-[#2E3192] mb-4">Konten {title}</h2>
            <p className="text-gray-600 text-lg">Informasi lengkap mengenai **{title}** akan dimuat di sini. Desain tab ini sudah berfungsi penuh!</p>
        </div>
    </div>
);

// --- MAIN COMPONENT ---

const PosSejarah: React.FC = () => {
  const menuItems = [
    { id: 'perpossan', title: 'SEJARAH', subtitle: 'PERPOSSAN', icon: BookOpen, content: <SejarahPerpossanContent /> },
    { id: 'kantor', title: 'SEJARAH', subtitle: 'KANTOR POS', icon: Building, content: <PlaceholderContent title="Sejarah Kantor Pos" /> },
    { id: 'museum', title: 'SEJARAH', subtitle: 'MUSEUM POS INDONESIA', icon: Home, content: <PlaceholderContent title="Sejarah Museum Pos Indonesia" /> },
    { id: 'gedung', title: 'GEDUNG POS', subtitle: 'TEMPO DULU', icon: Map, content: <PlaceholderContent title="Gedung Pos Tempo Dulu" /> },
  ];

  const [activeTab, setActiveTab] = useState(menuItems[0].id);
  // State baru untuk mengontrol animasi keluar
  const [isExiting, setIsExiting] = useState(false);

  const activeItem = menuItems.find(item => item.id === activeTab) || menuItems[0];

  const renderContent = () => {
    return activeItem.content;
  };

  // Fungsi untuk kembali ke home/reset dengan animasi smooth
   // Fungsi untuk kembali ke modal Sejarah
  const handleBack = () => {
    setIsExiting(true);
    // Tunggu transisi opacity sebelum navigasi
    setTimeout(() => {
      // Ganti URL hash ke #sejarah agar Navbar mendeteksi dan membuka modal
      window.location.href = "/#";
    }, 300);
  };


  return (
    <div className="min-h-screen bg-white font-['Inter'] flex flex-col">
      
      {/* 2. Main Content Wrapper: Tambahkan kelas transisi dan opacity berdasarkan state isExiting */}
      <div className={`flex-grow flex flex-col transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Header (POS IND Logo + Back Button) */}
        {/* Border bawah menggunakan warna kustom #2E3192 */}
        <header className="bg-white py-4 sm:py-6 border-b-4 border-[#2E3192] shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
                
                {/* Back to Home Button menggunakan warna kustom #2E3192 */}
                <button
                    className="text-[#2E3192] font-semibold flex items-center hover:text-red-600 transition-colors text-sm sm:text-base"
                    onClick={handleBack} // Langsung panggil fungsi handleBack
                >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                    Kembali
                </button>

                {/* POS IND Logo menggunakan warna kustom #2E3192 */}
                <div className="flex items-baseline">
                    <h1 className="text-3xl sm:text-4xl font-black text-[#2E3192] leading-none">
                        POS
                    </h1>
                    <h2 className="text-3xl sm:text-4xl font-black text-red-600 leading-none ml-1 sm:ml-2">
                        IND
                    </h2>
                </div>
                
                {/* Spacer for justify-between balance */}
                <div className="w-12 sm:w-16"></div> 
            </div>
          </div>
        </header>

        {/* Tab Navigation Horizontal (Navbar) */}
        {/* Menggunakan warna kustom #2E3192 untuk tab aktif dan border */}
        <nav className="flex bg-gray-700 shadow-xl border-b-4 border-[#2E3192]">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 min-w-0 px-2 py-4 sm:px-6 sm:py-5 text-center sm:text-left text-white transition-all duration-300 relative group
                ${
                  item.id === activeTab
                    ? 'bg-[#2E3192] border-b-4 border-orange-400 -mb-1' // Warna tab aktif
                    : 'bg-gray-700 hover:bg-gray-800 border-b-4 border-gray-700' // Warna tab non-aktif
                }`}
            >
              <div className="font-bold text-xs sm:text-sm leading-tight uppercase tracking-wide">
                {item.title}
              </div>
              <div className="font-bold text-xs sm:text-sm leading-tight uppercase tracking-wide">
                {item.subtitle}
              </div>
              
              {/* Icon dihilangkan pada tampilan mobile agar tab tidak terlalu penuh */}
              <ChevronRight
                size={20}
                className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-300 hidden sm:block
                  ${item.id === activeTab ? 'text-orange-400' : 'text-white/50 group-hover:text-white'}`}
              />
            </button>
          ))}
        </nav>

        {/* Main Content Area */}
        <main className="container mx-auto px-4 flex-grow">
            {renderContent()}
        </main>
        
        {/* Floating Chat Button (Matches Screenshot) */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="bg-orange-400 hover:bg-orange-500 text-white rounded-full p-4 shadow-xl transition-transform duration-200 transform hover:scale-110">
            {/* Simple Chat Bubble Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12l4 4V6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PosSejarah;  