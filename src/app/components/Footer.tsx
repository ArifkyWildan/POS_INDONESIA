"use client";
import { AnimateInView } from './FramerMotionClient';

export const Footer = () => (
  <footer id="kontak" className="bg-indigo-900 text-white pt-16 pb-4 px-4 sm:px-6 lg:px-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <AnimateInView>
        <div className="p-6 bg-indigo-800 rounded-lg shadow-xl">
          <h4 className="text-2xl sm:text-3xl font-heading mb-6 tracking-wider">JADWAL OPERASIONAL</h4>
          <ul className="space-y-3 font-body text-sm sm:text-lg">
            <li className="flex justify-between border-b border-indigo-700 pb-2"><span className="font-bold">SENIN - JUMAT</span><span>09.00 - 15.00 WIB</span></li>
            <li className="flex justify-between border-b border-indigo-700 pb-2"><span className="font-bold">SABTU</span><span>09.00 - 13.00 WIB</span></li>
            <li className="flex justify-between"><span className="font-bold">MINGGU/HARI BESAR</span><span className="text-red-300">LIBUR</span></li>
          </ul>
          <button className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-heading tracking-widest">
            HUBUNGI KAMI
          </button>
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="rounded-lg overflow-hidden shadow-xl h-64 sm:h-72 md:h-full">
          <iframe
            title="Museum Pos Indonesia Location"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            className="w-full h-full"
          />
        </div>
      </AnimateInView>
    </div>

    <div className="mt-12 pt-4 border-t border-indigo-700 text-center">
      <h5 className="font-heading text-lg sm:text-xl tracking-wider">MUSEUM POS INDONESIA</h5>
      <p className="text-xs sm:text-sm text-indigo-300 mt-2 font-body">Jl. Cilaki No.73, Cihapit, Kec. Bandung Wetan, Kota Bandung, Jawa Barat</p>
      <p className="text-[10px] sm:text-xs text-indigo-400 mt-2">&copy; {new Date().getFullYear()} Museum Pos Indonesia. All rights reserved.</p>
    </div>
  </footer>
);