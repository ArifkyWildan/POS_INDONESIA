"use client";
import { AnimateInView } from './FramerMotionClient';

const logos = [
  { year: '1945', name: 'Logo Kedaulatan', image: 'https://placehold.co/150x150/1A237E/FFFFFF?text=1945' },
  { year: '1961', name: 'PN Pos & Giro', image: 'https://placehold.co/150x150/1A237E/FFFFFF?text=1961' },
  { year: '1995', name: 'PT Pos Indonesia', image: 'https://placehold.co/150x150/1A237E/FFFFFF?text=1995' },
  { year: '2020', name: 'Rebranding Modern', image: 'https://placehold.co/150x150/1A237E/FFFFFF?text=2020' },
];

export const RebrandingSection = () => (
  <section id="rebranding" className="py-16 sm:py-20 bg-white">
    <AnimateInView>
      <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-heading text-indigo-900 mb-12 md:mb-16 tracking-wide">
        RE-BRANDING LOGO POS INDONESIA
      </h3>
    </AnimateInView>

    <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto px-4">
      {logos.map((logo, i) => (
        <AnimateInView key={i} delay={i * 0.2} amount={0.4} className="flex flex-col items-center flex-1 min-w-[120px] md:min-w-40 p-4 relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-gray-100 rounded-full border-4 border-indigo-900 p-2 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={logo.image} alt={logo.name} className="w-full h-full object-contain rounded-full" />
          </div>
          <div className="mt-3 text-center">
            <p className="text-lg sm:text-xl font-heading text-indigo-900">{logo.year}</p>
            <p className="text-xs sm:text-sm text-gray-600 font-body">{logo.name}</p>
          </div>
        </AnimateInView>
      ))}
    </div>
  </section>
);
