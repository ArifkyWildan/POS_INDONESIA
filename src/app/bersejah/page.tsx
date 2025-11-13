"use client";

import React from 'react';
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
}); 
// Definisi warna kustom Pos Indonesia (diasumsikan sudah dikonfigurasi di tailwind.config.js Next.js)
// Namun, kita akan menggunakan notasi heksadesimal langsung di className untuk menjamin warna.
const COLOR_DARK = '#172b60'; // Biru tua
const COLOR_BLUE = '#24459d'; // Biru sedang
const COLOR_ACCENT = '#eab308'; // Kuning emas

/**
 * Komponen utama untuk menampilkan Koleksi Prangko Bersejarah.
 * Menggunakan Tailwind CSS untuk styling.
 */
const App: React.FC = () => {

    // --- Utility Components for Reusability (Optional but good practice in React) ---

    const BackButton: React.FC = () => (
        <a href="/prangko" className="flex items-center text-sm font-semibold px-4 py-2 rounded-full border transition duration-200 
            text-[#172b60] border-[#172b60] hover:bg-[#172b60] hover:text-white">
            {/* SVG Arrow Left (Ikon Panah) */}
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Kembali
        </a>
    );

    const TitleBar: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <div className="bg-[#172b60] py-3 px-4 rounded-t-lg -mt-10 mb-6 inline-block">
            {children}
        </div>
    );

    const StampImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => (
        <img
            src={src}
            alt={alt}
            className={`object-cover shadow-xl border-2 border-gray-400 ${className || ''}`}
            // Tambahkan onError handler jika ini digunakan di produksi Next.js untuk gambar
        />
    );


    return (
        // Menggunakan div utama sebagai pengganti body, menerapkan background-color #f0f4f8
        <div className="min-h-screen bg-[#f0f4f8] font-sans text-gray-800 antialiased">
            
            {/* Header dengan Logo Pos Indonesia */}
            <header className="bg-white border-b-2 border-gray-200 py-4 mb-8">
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    <BackButton />
                    <div className="text-4xl md:text-5xl font-black tracking-tight">
                        <span className={`text-[#172b60] ${bebasNeue.className}`}>MUSEUM POS INDONESIA</span>
                       
                    </div>
                </div>
            </header>
            
            {/* Area Judul */}
            <div className="container mx-auto px-4 md:px-8 pb-8">
                {/* Judul Utama Halaman */}
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#172b60]">
                    KOLEKSI PRANGKO BERSEJARAH
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mt-2">Sebuah Pameran Digital dari Museum Filateli Indonesia</p>
            </div>

            <main className="container mx-auto px-4 md:px-8 py-4">

                {/* Bagian Museum: Prangko Bersejarah (Konten Foto Pertama) */}
                <section id="koleksi" className="mb-16">
                    
                    {/* 1. SIR ROWLAND HILL & PENNY BLACK */}
                    <div id="sir-rowland" className="shadow-xl transition duration-300 hover:shadow-2xl bg-white p-6 md:p-10 rounded-xl mb-12">
                        <TitleBar>
                            <h3 className="text-2xl font-bold uppercase tracking-wider text-white">SIR ROWLAND HILL</h3>
                            <p className="text-xs text-gray-300">1795 - 1879</p>
                        </TitleBar>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/3 flex flex-col items-center">
                                <StampImage
                                    src="/bersejarah1.webp"
                                    alt="Potret Sir Rowland Hill"
                                    className="rounded-lg shadow-lg mb-4"
                                />
                                <div className="text-sm text-center">
                                    <StampImage src="/bersejarah2.webp" alt="Contoh Prangko Era Hill" className="inline-block w-16 h-20 mx-1 my-2 shadow-md" />
                                    <StampImage src="/bersejarah3.webp" alt="Contoh Prangko Era Hill" className="inline-block w-16 h-20 mx-1 my-2 shadow-md" />
                                    <p className="mt-2 text-xs italic text-gray-500">Prangko yang dibuat setelah ide Sir Rowland Hill.</p>
                                </div>
                            </div>
                            
                            <div className="w-full md:w-2/3">
                                <p className="text-sm font-semibold italic text-[#24459d] mb-2">Tokoh Penting</p>
                                <p className="mb-4">Siapa yang tidak kenal dengannya? Dialah salah seorang guru yang menaruh perhatian pada masalah prangko. Hal ini disampaikannya pada tahun 1840 dalam usahanya mereformasi sistem pos pada waktu itu, karena adanya praktek-praktek pemborosan yang dapat merugikan kas negara.</p>

                                {/* Sub-Section: PENNY BLACK */}
                                <div className="mt-8 p-4 bg-[#f0f4f8] border-l-4 border-[#eab308] rounded-lg">
                                    <h4 className="text-xl font-bold text-[#172b60] mb-1">PENNY BLACK</h4>
                                    <p className="text-sm italic text-gray-600 mb-4">1 May 1840 - February 1841</p>
                                    
                                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                                        <p className="text-base flex-1">Penny Black merupakan prangko pertama di dunia yang digunakan dalam transaksi pengiriman pos. Prangko ini diterbitkan di Britania Raya pada tanggal 1 Mei 1840, akan tetapi baru digunakan pada tanggal 06 Mei 1840 setelah masa percobaan selama 5 hari.</p>
                                        <StampImage src="/bersejarah4.webp" alt="Prangko Penny Black" className="w-24 h-32 flex-shrink-0" />
                                    </div>
                                    
                                    <h5 className="font-semibold text-[#24459d] mt-4">PRANGKO YANG TERTEMPEL</h5>
                                    <p className="text-sm mt-1">Pada tanggal 13 Februari 1837, Sir Rowland Hill mengajukan kepada Komite Pemilihan Parlemen usulan-usulan perbaikan pada pengiriman prangko. Pada saat itu, sistem pengiriman pos sangat rumit. Atas usulan darinya, ide gagasan Hill diterima dan bersama dengan Henry Cole dan John Calcott Horsley merancang prangko ini. Pada bulan Mei 1840 yang lalu, prangko Penny Black pertama kali dicetak dan digunakan. Hampir seluruh desain yang menggambarkan Ratu Victoria dikarenakan desain ini sangat disukai oleh Ratu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 2. KING WILLEM III (Koleksi dari Indonesia) */}
                    <div className="shadow-xl transition duration-300 hover:shadow-2xl bg-white p-6 md:p-10 rounded-xl mb-12">
                         <TitleBar>
                            <h3 className="text-2xl font-bold uppercase tracking-wider text-white">KING WILLEM III</h3>
                            <p className="text-xs text-gray-300">Prangko Hindia Belanda Yang Pertama</p>
                        </TitleBar>

                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/3 flex space-x-4 justify-center">
                                <StampImage src="/bersejarah5.webp" alt="Prangko King Willem III" className="w-24 h-32" />
                                <StampImage src="/bersejarah6.webp"alt="Prangko King Willem III Varian" className="w-24 h-32" />
                            </div>
                            
                            <div className="w-full md:w-2/3">
                                <p className="text-sm font-semibold italic text-[#24459d] mb-2">Edisi pertama: 1 April 1864 (difi. tanpa perforasi)</p>
                                <p className="text-sm font-semibold italic text-[#24459d] mb-4">Edisi kedua: 1877 (dengan perforasi) - Prangko Hindia Belanda</p>

                                <p className="mb-4">Prangko Hindia Belanda menampilkan Raja Willem III (dalam posisi menghadap ke kanan), 10 sen. Prangko ini didesain secara khusus untuk negara persemakmuran Hindia Belanda di Indonesia.</p>

                                <p>Prangko pertama Hindia Belanda ini dirancang oleh J.W. Kaiser dengan nilai nominal 10 sen dan dicetak oleh percetakan pemerintah di Belanda. Prangko ini sangat terbatas, hanya digunakan di Pulau Jawa, Sumatera, dan dikirim ke Hindia Belanda untuk digunakan beberapa bulan kemudian.</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. PRANGKO BANTENG (Koleksi Kemerdekaan) */}
                    <div className="shadow-xl transition duration-300 hover:shadow-2xl bg-white p-6 md:p-10 rounded-xl">
                         <div className="bg-yellow-600 py-3 px-4 rounded-t-lg -mt-10 mb-6 inline-block">
                            <h3 className="text-2xl font-bold uppercase tracking-wider text-white">PRANGKO BANTENG</h3>
                        </div>

                        <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
                            <div className="w-full md:w-2/3">
                                <p className="text-base mb-4">Upaya mencetak sendiri prangko Indonesia dilakukan oleh Jawatan PTT pada masa setelah proklamasi kemerdekaan. Prangko ini memiliki nilai nominal 20 sen dan mencerminkan semangat kemerdekaan. Desainnya melambangkan: tekad bangsa, perjuangan, melambangkan semangat kemerdekaan yang kokoh, dan berlatar belakang bendera merah putih yang berkibar.</p>
                                
                                <p className="text-sm font-semibold italic text-[#24459d] mt-4 border-l-4 border-[#24459d] pl-3">Pada kedua prangko tersebut tertulis "REPUBLIK INDONESIA".</p>
                            </div>
                             <div className="w-full md:w-1/3 flex justify-center flex-shrink-0">
                                <StampImage src="/bersejarah7.webp" alt="Prangko Banteng Kemerdekaan" className="w-32 h-44 border-4 border-yellow-700 transform rotate-3" />
                            </div>
                        </div>
                    </div>

                </section>

            </main>
        </div>
    );
};

export default App;