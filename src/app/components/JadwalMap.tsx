"use client";

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { SectionProps, ScheduleItem } from '../types';

// --- 7. JadwalMap Component ---
const JadwalMap: FC<SectionProps> = ({ sectionRef }) => {
  const schedule: ScheduleItem[] = [
    { day: 'Senin - Jumat', time: '09:00 - 16:00 WIB' },
    { day: 'Sabtu', time: '09:00 - 13:00 WIB' },
    { day: 'Minggu/Libur Nasional', time: 'TUTUP' },
  ];

  return (
    <section
      ref={sectionRef}
      id="jadwal"
      className="py-20 md:py-32 bg-[#223E8A] text-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side: Jadwal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h3 className="text-3xl font-bold mb-8 uppercase">Jadwal Operasional</h3>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex justify-between pb-2 border-b border-white/20">
                  <span className="text-lg font-semibold">{item.day}</span>
                  <span className="text-lg font-light">{item.time}</span>
                </div>
              ))}
            </div>
            <motion.button
              className="mt-8 bg-white text-[#223E8A] font-bold py-3 px-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
              whileTap={{ scale: 0.95 }}
            >
              Reservasi Kunjungan
            </motion.button>
          </motion.div>

          {/* Right Side: Map */}
          <motion.div
            className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.942798888065!2d107.6163033147727!3d-6.89746999501594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64b091abe6b%3A0x1131c8f17da73b8!2sMuseum%20Pos%20Indonesia!5e0!3m2!1sen!2sid!4v1678888888888!5m2!1sen!2sid"
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