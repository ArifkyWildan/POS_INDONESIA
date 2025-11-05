"use client";

import { AnimateInView } from './FramerMotionClient';

/**
 * Footer section with operational hours, map iframe, and museum details.
 */
export const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="bg-indigo-900 text-white pt-16 pb-4 px-4 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Operational Hours (JADWAL OPERASIONAL) */}
        <AnimateInView amount={0.2}>
          <div className="p-6 bg-indigo-800 rounded-lg shadow-xl">
            <h4 className="text-3xl font-heading mb-6 tracking-wider">JADWAL OPERASIONAL</h4>
            <ul className="space-y-3 font-body text-lg">
              <li className="flex justify-between border-b border-indigo-700 pb-2">
                <span className="font-bold">SENIN - JUMAT</span>
                <span>09.00 - 15.00 WIB</span>
              </li>
              <li className="flex justify-between border-b border-indigo-700 pb-2">
                <span className="font-bold">SABTU</span>
                <span>09.00 - 13.00 WIB</span>
              </li>
              <li className="flex justify-between">
                <span className="font-bold">MINGGU/HARI BESAR</span>
                <span className="text-red-300">LIBUR</span>
              </li>
            </ul>
            <button className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-heading text-white tracking-widest">
              HUBUNGI KAMI
            </button>
          </div>
        </AnimateInView>

        {/* Google Maps Iframe */}
        <AnimateInView amount={0.2} delay={0.2}>
          <div className="rounded-lg overflow-hidden shadow-xl h-64 md:h-full">
            <iframe
              title="Museum Pos Indonesia Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.85238243451!2d107.61053077593259!3d-6.907996593090885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e62d47d0d04d%3A0xc3f6e5e8e8e8e8e8!2sMuseum%20Pos%20Indonesia!5e0!3m2!1sen!2sid!4v1678893456789!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </AnimateInView>
      </div>

      {/* Bottom Footer Details */}
      <div className="mt-16 pt-4 border-t border-indigo-700 text-center">
        <h5 className="font-heading text-xl tracking-wider">MUSEUM POS INDONESIA</h5>
        <p className="text-sm text-indigo-300 mt-2 font-body">Jl. Cilaki No.73, Cihapit, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40114</p>
        <p className="text-xs text-indigo-400 mt-2">&copy; {new Date().getFullYear()} Museum Pos Indonesia. All rights reserved.</p>
      </div>
    </footer>
  );
};