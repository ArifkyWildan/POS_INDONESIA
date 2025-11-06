"use client";
import { AnimateInView } from './FramerMotionClient';

const testimonials = [
  { quote: 'Sungguh marvelous...', author: 'Agus P.', source: 'Mahasiswa Arkeologi' },
  { quote: 'Saya tidak menyangka...', author: 'Ratna D.', source: 'Pemerhati Sejarah' },
  { quote: 'Kunjungan ke Museum...', author: 'Michael J.', source: 'Travel Vlogger' },
];

export const TestimonialSection = () => (
  <section id="testimoni" className="py-16 sm:py-20 bg-white">
    <AnimateInView>
      <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-heading text-indigo-900 mb-12 md:mb-16 tracking-wide">
        TESTIMONIAL
      </h3>
    </AnimateInView>

    <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 max-w-6xl mx-auto px-4">
      {testimonials.map((t, i) => (
        <AnimateInView key={i} delay={i * 0.15} amount={0.5} className="flex-1">
          <div className="bg-gray-50 p-5 sm:p-6 rounded-xl border-t-4 border-blue-600 shadow-md h-full">
            <p className="italic text-gray-700 font-body text-base sm:text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="font-heading text-indigo-900 text-sm sm:text-base">{t.author}</p>
              <p className="text-xs sm:text-sm text-gray-500 font-body">{t.source}</p>
            </div>
          </div>
        </AnimateInView>
      ))}
    </div>
  </section>
);
