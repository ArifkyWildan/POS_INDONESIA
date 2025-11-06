"use client";
import { AnimateInView } from './FramerMotionClient';

const galleryItems = [
  { id: 1, title: 'Pameran Filateli Dunia', date: '18 Mei 2024', image: 'https://placehold.co/300x400/000000/FFFFFF?text=Event+1' },
  { id: 2, title: 'Peluncuran Prangko Baru', date: '25 April 2024', image: 'https://placehold.co/300x400/000000/FFFFFF?text=Event+2' },
  { id: 3, title: 'Workshop Pembuatan Sampul', date: '12 Maret 2024', image: 'https://placehold.co/300x400/000000/FFFFFF?text=Event+3' },
  { id: 4, title: 'Koleksi Emas Abad ke-19', date: '01 Februari 2024', image: 'https://placehold.co/300x400/000000/FFFFFF?text=Event+4' },
  { id: 5, title: 'Nostalgia Surat Merah', date: '05 Januari 2024', image: 'https://placehold.co/300x400/000000/FFFFFF?text=Event+5' },
];

export const GallerySection = () => (
  <section id="galeri" className="py-16 sm:py-20 bg-gray-50">
    <AnimateInView>
      <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-heading text-indigo-900 mb-12 tracking-wide">
        GALLERY / EVENT SHOWCASE
      </h3>
    </AnimateInView>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto px-4">
      {galleryItems.map((item, i) => (
        <AnimateInView key={i} delay={i * 0.1} amount={0.3}>
          <div className="bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 border border-gray-100">
            <div className="h-40 sm:h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="h-full bg-black/30 flex items-start p-3">
                <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full font-bold">{item.date}</span>
              </div>
            </div>
            <div className="p-3 sm:p-4">
              <h4 className="text-base sm:text-lg font-heading text-indigo-900 hover:text-blue-600 transition-colors">{item.title}</h4>
            </div>
          </div>
        </AnimateInView>
      ))}
    </div>
  </section>
);
