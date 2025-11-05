"use client";

import { AnimateInView } from './FramerMotionClient';

const logos = [
  { year: '1945', name: 'Logo Kedaulatan', image: 'https://placehold.co/150x150/1A237E/FFFFFF/png?text=1945' },
  { year: '1961', name: 'PN Pos & Giro', image: 'https://placehold.co/150x150/1A237E/FFFFFF/png?text=1961' },
  { year: '1995', name: 'PT Pos Indonesia', image: 'https://placehold.co/150x150/1A237E/FFFFFF/png?text=1995' },
  { year: '2020', name: 'Rebranding Modern', image: 'https://placehold.co/150x150/1A237E/FFFFFF/png?text=2020' },
];

/**
 * Section showcasing the timeline of the Pos Indonesia logo rebranding.
 */
export const RebrandingSection: React.FC = () => {
  return (
    <section id="rebranding" className="py-20 bg-white">
      <AnimateInView amount={0.1}>
        <h3 className="text-center text-4xl md:text-5xl font-heading text-indigo-900 mb-16 tracking-wide">
          RE-BRANDING LOGO POS INDONESIA
        </h3>
      </AnimateInView>

      {/* Logo Timeline */}
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto px-4">
        {logos.map((logo, index) => (
          <AnimateInView key={logo.year} delay={index * 0.2} amount={0.5} className="flex flex-col items-center flex-1 min-w-40 p-4 relative">
            {/* Logo Image/Placeholder */}
            <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-100 rounded-full border-4 border-indigo-900 p-2 flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-300">
              <img src={logo.image} alt={logo.name} className="w-full h-full object-contain rounded-full" onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = `https://placehold.co/150x150/E8EAF6/1A237E?text=${logo.year}`; }} />
            </div>

            {/* Year Tag */}
            <div className="mt-4 text-center">
              <p className="text-xl font-heading text-indigo-900">{logo.year}</p>
              <p className="text-sm text-gray-600 font-body">{logo.name}</p>
            </div>

            {/* Timeline Connector (Hidden on last item) */}
            {index < logos.length - 1 && (
              <div className="absolute top-14 left-1/2 md:left-auto md:top-1/2 w-0.5 h-16 md:w-full md:h-0.5 bg-indigo-300 md:translate-x-[50%] md:translate-y-0 translate-x-0 translate-y-full"></div>
            )}
          </AnimateInView>
        ))}
      </div>
    </section>
  );
};