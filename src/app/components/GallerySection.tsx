"use client";

import { AnimateInView } from './FramerMotionClient';

const galleryItems = [
  { id: 1, title: 'Pameran Filateli Dunia', date: '18 Mei 2024', image: 'https://placehold.co/300x400/000000/FFFFFF?text=Event+1' },
  { id: 2, title: 'Peluncuran Prangko Baru', date: '25 April 2024', image: 'https://placehold.co/300x400/000000/FFFFFF?text=Event+2' },
  { id: 3, title: 'Workshop Pembuatan Sampul', date: '12 Maret 2024', image: 'https://placehold.co/300x400/000000/FFFFFF?text=Event+3' },
  { id: 4, title: 'Koleksi Emas Abad ke-19', date: '01 Februari 2024', image: 'https://placehold.co/300x400/000000/FFFFFF?text=Event+4' },
  { id: 5, title: 'Nostalgia Surat Merah', date: '05 Januari 2024', image: 'https://placehold.co/300x400/000000/FFFFFF?text=Event+5' },
];

/**
 * Gallery and Event Showcase section with card-style layout.
 */
export const GallerySection: React.FC = () => {
  return (
    <section id="galeri" className="py-20 bg-gray-50">
      <AnimateInView amount={0.1}>
        <h3 className="text-center text-4xl md:text-5xl font-heading text-indigo-900 mb-12 tracking-wide">
          GALLERY / EVENT SHOWCASE
        </h3>
      </AnimateInView>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
        {galleryItems.map((item, index) => (
          <AnimateInView key={item.id} delay={index * 0.1} amount={0.3} duration={0.8}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100">
              {/* Image Placeholder */}
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="h-full bg-black/30 flex items-start p-3">
                  <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full font-bold">{item.date}</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-4">
                <h4 className="text-lg font-heading text-indigo-900 group-hover:text-blue-600 transition-colors">{item.title}</h4>
              </div>
            </div>
          </AnimateInView>
        ))}
      </div>
    </section>
  );
};