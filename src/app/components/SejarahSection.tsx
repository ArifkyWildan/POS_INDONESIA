"use client";

import React from 'react';

// Tipe data untuk setiap item sejarah
type HistoryItem = {
  year: string;
  title: string;
  description: string;
  image: string;
};

// Data untuk item sejarah
// Saya menggunakan data yang Anda berikan sebelumnya, dan placeholder untuk gambar
const historyItems: HistoryItem[] = [
  {
    year: '1735 - 1750', // Diperbarui agar sesuai format gambar
    title: 'Gustaaf Willem Baron van Imhoff',
    description: 'Pendirian kantor pos pertama di Batavia (Jakarta) oleh Gubernur Jenderal Baron van Imhoff.',
    image: 'https://placehold.co/400x500/666/FFF?text=Foto+Sejarah+1',
  },
  {
    year: '1931',
    title: 'Gedung Museum PTT',
    description: 'Museum diresmikan dengan nama PTT (Post-, Telegraaf- en Telefoondienst) di Bandung.',
    image: 'https://placehold.co/400x500/666/FFF?text=Foto+Sejarah+2',
  },
  {
    year: '1983',
    title: 'Penggantian Nama',
    description: 'Nama museum diubah menjadi Museum Pos dan Giro, seiring pemisahan jawatan telekomunikasi.',
    image: 'https://placehold.co/400x500/666/FFF?text=Foto+Sejarah+3',
  },
];

/**
 * Komponen untuk menyembunyikan scrollbar pada elemen scroll horizontal.
 * Ini diperlukan untuk meniru tampilan bersih pada gambar.
 */
const HideScrollbarStyles = () => (
  <style>{`
    .hide-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;  /* Chrome, Safari, and Opera */
    }
    .smooth-scroll {
      scroll-behavior: smooth;
    }
  `}</style>
);

/**
 * Section yang menampilkan sejarah Pos Indonesia dengan slider horizontal
 * yang desainnya disesuaikan dengan gambar yang diberikan.
 */
export const SejarahSection: React.FC = () => {
  return (
    <>
      {/* Sisipkan style untuk menyembunyikan scrollbar */}
      <HideScrollbarStyles />

      <section id="sejarah" className="py-20 bg-gray-900 text-white">
        {/* Judul Bagian */}
        <h3 className="text-center text-4xl md:text-5xl font-serif font-bold mb-12 tracking-wide">
          SEJARAH POS INDONESIA
        </h3>

        {/* Kontainer Slider Horizontal */}
        <div
          className="
            flex 
            overflow-x-auto 
            snap-x 
            snap-mandatory 
            space-x-8 
            px-8 
            md:px-20 
            pb-6 
            hide-scrollbar
            smooth-scroll
          "
        >
          {historyItems.map((item, index) => (
            <div
              key={index}
              className="
                flex-shrink-0 
                w-96 
                md:w-[450px] 
                snap-center 
                text-center
              " /* Lebar card diperbesar (w-72 -> w-96, md:w-80 -> md:w-[450px]) */
            >
              {/* Placeholder Gambar */}
              <div className="w-full h-72 md:h-80 bg-gray-700 rounded-md overflow-hidden"> {/* Tinggi gambar diperbesar (h-56 -> h-72, md:h-64 -> md:h-80) */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  // Fallback jika gambar gagal dimuat
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/400x500/333/FFF?text=Gagal+Muat';
                  }}
                />
              </div>

              {/* Konten Teks */}
              <div className="mt-6 px-2 h-44"> {/* Margin top (mt-5 -> mt-6) dan Tinggi diperbesar (h-40 -> h-44) */}
                <h4 className="text-xl font-semibold uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-lg text-gray-300 mt-1">
                  {item.year}
                </p>
                <p className="text-sm text-gray-400 mt-3 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Catatan: Navigasi panah dan titik-titik tidak ada di gambar referensi,
            jadi saya tidak menambahkannya agar sesuai dengan desain yang diminta.
            Slider ini dapat di-scroll dengan cara digeser (swipe/drag). */}
      </section>
    </>
  );
};

// Export default jika file ini hanya berisi satu komponen
export default SejarahSection;