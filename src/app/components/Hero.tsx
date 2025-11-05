"use client";

import { AnimateInView } from './FramerMotionClient';

/**
 * Hero Section matching the image, featuring a large background and centered title.
 */
export const Hero: React.FC = () => {
  return (
    <header className="relative h-[600px] flex items-center justify-center text-center overflow-hidden" id="hero">
      {/* Background Image Placeholder and Overlay */}
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://placehold.co/1200x600/1E88E5/FFFFFF/png?text=Museum+Pos+Indonesia')`, backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <AnimateInView duration={1} delay={0.2} amount={0.5}>
          <h1 className="text-white text-xl md:text-2xl font-body mb-2 tracking-widest">
            Halo, Selamat Datang di
          </h1>
          <h2 className="text-white text-6xl md:text-8xl font-heading tracking-tight drop-shadow-lg">
            MUSEUM POS INDONESIA
          </h2>
          <p className="mt-6 text-sm md:text-lg text-gray-100/90 font-body leading-relaxed max-w-3xl mx-auto px-4">
            Museum Pos Indonesia, dahulu dikenal sebagai Gedung Museum PTT, adalah salah satu museum tertua di Bandung. Didirikan pada tahun 1931, museum ini menyimpan koleksi bersejarah terkait perjalanan pos, telekomunikasi, dan telegraf di Indonesia sejak zaman kolonial Belanda.
          </p>
        </AnimateInView>
      </div>
    </header>
  );
};