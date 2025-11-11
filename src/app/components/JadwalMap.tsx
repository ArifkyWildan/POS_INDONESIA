"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

// --- Type Definitions (for a self-contained component) ---
// You can keep your ../types import if you prefer
export interface SectionProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
}


export interface ScheduleItem {
  day: string;
  time: string;
}

// --- 7. JadwalMap Component (Enhanced) ---
const JadwalMap: FC<SectionProps> = ({ sectionRef }) => {
  const schedule: ScheduleItem[] = [
    { day: "Senin - Jumat", time: "09:00 - 16:00 WIB" },
    { day: "Sabtu", time: "09:00 - 13:00 WIB" },
    { day: "Minggu/Libur Nasional", time: "TUTUP" },
  ];

  return (
    <section
      ref={sectionRef}
      id="jadwal"
      // DESIGN UPDATE: Added a subtle gradient for more depth
      className="py-24 md:py-32 bg-black text-black w-full"
    >
      {/* NOTE: The "gap" you see on the left in your screenshot is not from this component.
        It is almost certainly a global sidebar navigation from your main layout (e.g., layout.tsx).
        This component is correctly filling the content area provided to it.
      */}
      <div className="mx-auto max-w-7xl">
        {/* DESIGN UPDATE: 
          - Changed to `items-stretch` to make both columns equal height on desktop.
          - Added `overflow-hidden` and `rounded-2xl` here to create a modern "card" effect
            for the whole section, especially visible on desktop.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden shadow-2xl mx-4 md:mx-8 lg:rounded-2xl">
          {/* Left Side: Jadwal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            // DESIGN UPDATE: Increased padding for more breathing room
            className="p-8 md:p-12 lg:p-16 bg-white" // Re-apply base color for consistency
          >
            <h3 className="text-3xl font-bold text-indigo-900 mb-8 uppercase tracking-wide">
              Jadwal Operasional
            </h3>

            {/* DESIGN UPDATE: Wrapped schedule in a styled "card" for visual separation */}
            <div className="space-y-4 bg-white/10 rounded-xl p-6 shadow-inner">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 border-b border-white/30 last:border-b-0"
                >
                  <span className="text-lg font-semibold mb-1 sm:mb-0">
                    {item.day}
                  </span>
                  {/* DESIGN UPDATE: Made "TUTUP" stand out more */}
                  {/* FIX: Removed stray '_' attribute that was causing a console warning */}
                  <span
                    className={`text-lg ${
                      item.time === "TUTUP"
                        ? "font-bold text-red-400"
                        : "font-light"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <motion.button
              className="mt-10 bg-white text-red-400 font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out"
              // DESIGN UPDATE: Enhanced hover/tap effects
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Reservasi Kunjungan
            </motion.button>
          </motion.div>

          {/* Right Side: Map */}
          <motion.div
            // DESIGN UPDATE: Changed height to be responsive and stretch on desktop
            className="w-full h-96 lg:h-full min-h-[400px]"
            // DESIGN UPDATE: Changed animation to a "scale-in" for a nice effect
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9040927248775!2d107.61941130608214!3d-6.902072151084264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64b5afecaeb%3A0x12b93c9309d6b441!2sMuseum%20Pos%20Indonesia!5e0!3m2!1sen!2sid!4v1762531108448!5m2!1sen!2sid" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Museum Pos Indonesia"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JadwalMap;