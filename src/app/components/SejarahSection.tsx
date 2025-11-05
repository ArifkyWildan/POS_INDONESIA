"use client";

import { AnimateInView } from './FramerMotionClient';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const historyItems = [
  {
    year: '1746',
    title: 'Gustaaf Willem Baron van Imhoff',
    description: 'Pendirian kantor pos pertama di Batavia (Jakarta) oleh Gubernur Jenderal Baron van Imhoff, menandai dimulainya layanan pos di Nusantara.',
    image: 'https://placehold.co/400x500/000000/FFFFFF?text=1746',
  },
  {
    year: '1931',
    title: 'Gedung Museum PTT',
    description: 'Museum diresmikan dengan nama PTT (Post-, Telegraaf- en Telefoondienst) dan menempati bangunan ikonik di Bandung yang kita kenal hingga kini.',
    image: 'https://placehold.co/400x500/000000/FFFFFF?text=1931',
  },
  {
    year: '1983',
    title: 'Penggantian Nama',
    description: 'Nama museum diubah menjadi Museum Pos dan Giro, seiring dengan pemisahan jawatan telekomunikasi.',
    image: 'https://placehold.co/400x500/000000/FFFFFF?text=1983',
  },
];

/**
 * Section detailing the history of Pos Indonesia, featuring a horizontal scrolling/slider aesthetic.
 */
export const SejarahSection: React.FC = () => {
  return (
    <section id="sejarah" className="py-20 bg-gray-50 overflow-hidden">
      <AnimateInView amount={0.1}>
        <h3 className="text-center text-4xl md:text-5xl font-heading text-indigo-900 mb-12 tracking-wide">
          SEJARAH POS INDONESIA
        </h3>
      </AnimateInView>

      {/* Horizontal Slider Mockup */}
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 px-4 md:px-12 pb-6">
        {historyItems.map((item, index) => (
          <AnimateInView key={item.year} delay={index * 0.1} amount={0.3} duration={0.8} className="flex-shrink-0 w-80 md:w-96 snap-center">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              {/* Image Area */}
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="h-full bg-black/20 flex items-end p-4">
                  <span className="text-white text-5xl font-heading">{item.year}</span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-5">
                <h4 className="text-2xl font-heading text-indigo-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 font-body">{item.description}</p>
              </div>
            </div>
          </AnimateInView>
        ))}
      </div>

      {/* Navigation Indicators Mockup */}
      <div className="flex justify-center mt-8 space-x-3">
        <button className="p-3 rounded-full bg-indigo-200 text-indigo-900 hover:bg-indigo-300 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-full bg-indigo-900 text-white hover:bg-indigo-700 transition-colors">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};