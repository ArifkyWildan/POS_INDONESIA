"use client";

import { AnimateInView } from './FramerMotionClient';

const testimonials = [
  {
    quote: 'Sungguh marvelous, museum ini sangat lengkap dan terawat rapi. Koleksi filateli dan artefak posnya membawa saya kembali ke masa lalu. Pengalaman yang sangat edukatif!',
    author: 'Agus P.',
    source: 'Mahasiswa Arkeologi',
  },
  {
    quote: 'Saya tidak menyangka akan menemukan sejarah pos yang begitu kaya di sini. Tata letaknya modern dan informatif, cocok untuk semua usia.',
    author: 'Ratna D.',
    source: 'Pemerhati Sejarah',
  },
  {
    quote: 'Kunjungan ke Museum Pos Indonesia adalah highlight dari perjalanan saya di Bandung. Bangunannya indah, dan stafnya sangat ramah.',
    author: 'Michael J.',
    source: 'Travel Vlogger',
  },
];

/**
 * Testimonial section with a horizontal grid layout.
 */
export const TestimonialSection: React.FC = () => {
  return (
    <section id="testimoni" className="py-20 bg-white">
      <AnimateInView amount={0.1}>
        <h3 className="text-center text-4xl md:text-5xl font-heading text-indigo-900 mb-16 tracking-wide">
          TESTIMONIAL
        </h3>
      </AnimateInView>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testi, index) => (
          <AnimateInView key={index} delay={index * 0.15} amount={0.5} className="flex-1">
            <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-blue-600 shadow-md h-full flex flex-col justify-between">
              <p className="italic text-gray-700 font-body text-lg leading-relaxed">
                &ldquo;{testi.quote}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-heading text-indigo-900 text-base">{testi.author}</p>
                <p className="text-sm text-gray-500 font-body">{testi.source}</p>
              </div>
            </div>
          </AnimateInView>
        ))}
      </div>
    </section>
  );
};