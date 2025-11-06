"use client";
import React from 'react';

const historyItems = [
  {
    year: '1735 - 1750',
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

export const SejarahSection: React.FC = () => (
  <section id="sejarah" className="py-16 sm:py-20 bg-gray-900 text-white">
    <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-12 tracking-wide">
      SEJARAH POS INDONESIA
    </h3>

    <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 sm:space-x-8 px-4 sm:px-8 md:px-20 pb-6 hide-scrollbar smooth-scroll">
      {historyItems.map((item, i) => (
        <div key={i} className="flex-shrink-0 w-72 sm:w-80 md:w-[430px] snap-center text-center">
          <div className="w-full h-56 sm:h-64 md:h-80 bg-gray-700 rounded-md overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/400x500/333/FFF?text=Gagal+Muat';
              }}
            />
          </div>
          <div className="mt-5 sm:mt-6 px-2 h-40 sm:h-44">
            <h4 className="text-lg sm:text-xl font-semibold uppercase tracking-wide">{item.title}</h4>
            <p className="text-sm sm:text-base text-gray-300 mt-1">{item.year}</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
