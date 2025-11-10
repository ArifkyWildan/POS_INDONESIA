"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Home, BookOpen, Building, Map, X, Clock, Archive } from 'lucide-react';

// Warna Kustom Utama: #2E3192 (Dark Indigo/Violet)

// --- CONTENT DEFINITIONS ---

// Content for the "SEJARAH PERPOSSAN" tab (Existing)
const SejarahPerpossanContent = () => (
    <div className="py-8">
        {/* Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm mb-6">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <span className="font-bold text-[#2E3192]">MUSEUM POS INDONESIA</span>
            </div>
            <span className="text-gray-500">Sejarah Perpossan</span>
        </div>

        {/* Kisah Pos Zaman Kuno */}
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Image/Stamp Block (Left) */}
                <div className="flex justify-center md:justify-end order-2 md:order-1">
                    <div className="bg-gray-900 p-6 sm:p-8 rounded-lg max-w-sm w-full">
                        <div className="bg-white p-3 sm:p-4 rounded shadow-2xl rotate-3 border-4 border-white transform hover:rotate-0 transition-transform duration-300">
                            <div className="relative">
                                {/* Placeholder Image: President Sukarno Stamp */}
                                <img
                                    src="https://placehold.co/800x1200/4c0c93/ffffff?text=Stamp+Sukarno"
                                    alt="Perangko Indonesia"
                                    className="w-full aspect-[2/3] object-cover"
                                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/800x1200/4c0c93/ffffff?text=Stamp+Sukarno' }}
                                />
                                <div className="absolute bottom-2 left-2 right-2 bg-red-600 text-white text-center py-1">
                                    <span className="text-xs font-bold tracking-widest">
                                        REPUBLIK INDONESIA
                                    </span>
                                </div>
                                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-sm font-bold rounded-sm">
                                    700p
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Block (Right) */}
                <div className="order-1 md:order-2">
                    {/* Judul menggunakan warna kustom #2E3192 */}
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
                        Kisah Pos
                        <br />
                        Zaman Kuno
                    </h2>

                    <div className="mb-6 rounded-lg overflow-hidden border-2 border-gray-200 shadow-md">
                        {/* Placeholder Image: Historical Group Photo */}
                        <img
                            src="https://placehold.co/600x300/e9d5ff/4c0c93?text=Ancient+Postal+History"
                            alt="Sejarah Pos"
                            className="w-full h-auto object-cover"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x300/e9d5ff/4c0c93?text=Ancient+Postal+History' }}
                        />
                    </div>

                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        Sistem pengiriman pesan telah ada sejak peradaban kuno, mulai dari Mesir hingga Tiongkok, menggunakan kurir berlari, kuda, dan merpati pos. Di era modern, layanan pos berevolusi menjadi infrastruktur komunikasi global yang menghubungkan seluruh dunia.
                    </p>
                </div>
            </div>
        </section>

        {/* Universal Postal Union */}
        <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Text Block (Left) */}
                <div className="order-1">
                    {/* Judul menggunakan warna kustom #2E3192 */}
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
                        Universal
                        <br />
                        Postal Union (UPU)
                    </h2>

                    <div className="flex items-center space-x-4 mb-6">
                        {/* UPU Logo SVG menggunakan warna kustom #2E3192 */}
                        <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#2E3192]" fill="currentColor">
                            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>
                        <div className="text-sm">
                            {/* Teks menggunakan warna kustom #2E3192 */}
                            <div className="font-bold text-[#2E3192]">UNIVERSAL</div>
                            <div className="font-bold text-[#2E3192]">POSTAL</div>
                            <div className="font-bold text-[#2E3192]">UNION</div>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                        UPU didirikan pada tahun 1874 di Bern, Swiss, untuk menyatukan layanan pos global dan membuat satu wilayah pos tunggal di seluruh dunia. Organisasi ini memastikan pertukaran surat internasional berjalan lancar dan efisien.
                    </p>

                    {/* Tombol menggunakan warna kustom #2E3192 */}
                    <button className="text-[#2E3192] font-extrabold hover:underline transition-colors text-base sm:text-lg">
                        Awali Terbentuk <ChevronRight className="inline h-5 w-5 ml-1"/>
                    </button>
                </div>

                {/* Image Block (Right) */}
                <div className="flex justify-center md:justify-start order-2">
                    <div className="bg-gray-900 p-6 sm:p-8 rounded-lg max-w-sm w-full">
                        <div className="bg-white p-2 rounded shadow-2xl">
                            {/* Placeholder Image: Historical Figure B (Black and White) */}
                            <img
                                src="https://placehold.co/600x800/e0e0e0/000000?text=Henry+Harriman"
                                alt="Historical figure"
                                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x800/e0e0e0/000000?text=Henry+Harriman' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

// Content for the "SEJARAH KANTOR POS" tab (New)
const SejarahKantorPosContent = () => (
    <div className="py-8">
        {/* Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm mb-6">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <span className="font-bold text-[#2E3192]">MUSEUM POS INDONESIA</span>
            </div>
            <span className="text-gray-500">Sejarah Kantor Pos</span>
        </div>

        {/* Pendirian Kantor Pos Batavia 1746 */}
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Text Block (Left) */}
                <div className="order-1">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
                        Awal Mula:
                        <br />
                        Kantor Pos Batavia
                    </h2>

                    <div className="mb-6 rounded-lg overflow-hidden border-2 border-red-600 shadow-lg">
                        {/* Placeholder Image: Peta Batavia Lama */}
                        <img
                            src="https://placehold.co/600x300/2E3192/FFFFFF?text=Peta+Batavia+1746"
                            alt="Peta Batavia Lama"
                            className="w-full h-auto object-cover"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x300/2E3192/FFFFFF?text=Peta+Batavia+1746' }}
                        />
                    </div>

                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                        Sejarah modern kantor pos di Indonesia dimulai pada tanggal **26 Agustus 1746**. Gubernur Jenderal **Gustaaf Willem Baron van Imhoff** mendirikan kantor pos pertama di Batavia (Jakarta) dan Semarang.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        Pendirian ini bertujuan untuk memastikan komunikasi yang efisien antara pemerintah kolonial di Batavia dengan wilayah-wilayah di luar Jawa, terutama Semarang.
                    </p>
                </div>

                {/* Visual Block (Right) */}
                <div className="flex justify-center md:justify-start order-2">
                    <div className="bg-red-600 p-6 sm:p-8 rounded-lg max-w-sm w-full">
                        <div className="bg-white p-2 rounded shadow-2xl -rotate-3 border-4 border-white transform hover:rotate-0 transition-transform duration-300">
                            <div className="relative p-4">
                                <Building className="w-16 h-16 text-[#2E3192] mx-auto mb-3"/>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Kantor Pertama</h3>
                                <p className="text-center text-sm text-gray-600">Jalur utama Batavia - Semarang</p>
                                <div className="absolute top-0 right-0 bg-[#2E3192] text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                                    1746
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Evolusi Layanan Pos */}
        <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Visual Block (Left) */}
                <div className="flex justify-center md:justify-end order-1">
                    <div className="bg-[#2E3192] p-6 sm:p-8 rounded-lg max-w-sm w-full">
                        <div className="bg-white p-2 rounded shadow-2xl">
                            {/* Placeholder Image: Kuda dan Kurir Pos */}
                            <img
                                src="https://placehold.co/600x800/2E3192/e0e0e0?text=Kuda+Kurir+Pos"
                                alt="Kurir Pos Kuno"
                                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x800/2E3192/e0e0e0?text=Kuda+Kurir+Pos' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Text Block (Right) */}
                <div className="order-2">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
                        Perkembangan
                        <br />
                        Menuju PTT
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                        Seiring waktu, layanan pos berkembang pesat. Pada tahun 1875, jawatan pos resmi dibentuk dan kemudian bergabung dengan layanan telegraf dan telepon, menjadi **Post-, Telegraaf-, en Telefoondienst (PTT)**.
                    </p>

                    <ul className="space-y-3 p-4 bg-red-50 rounded-lg border border-red-200">
                        <li className="flex items-start text-gray-700">
                            <ChevronRight className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0"/> <span>1746: Kantor Pos pertama di Batavia dan Semarang.</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                            <ChevronRight className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0"/> <span>1862: Penerbitan prangko pertama Hindia Belanda.</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                            <ChevronRight className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0"/> <span>1875: Pembentukan jawatan pos resmi PTT.</span>
                        </li>
                    </ul>

                    {/* Tombol menggunakan warna kustom #2E3192 */}
                    <button className="text-red-600 font-extrabold hover:underline transition-colors text-base sm:text-lg mt-4">
                        Lihat Perangko <ChevronRight className="inline h-5 w-5 ml-1"/>
                    </button>
                </div>
            </div>
        </section>
    </div>
);

// Content for the "SEJARAH MUSEUM POS INDONESIA" tab (New)
const SejarahMuseumPosContent = () => (
    <div className="py-8">
        {/* Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm mb-6">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <span className="font-bold text-[#2E3192]">MUSEUM POS INDONESIA</span>
            </div>
            <span className="text-gray-500">Sejarah Museum Pos Indonesia</span>
        </div>

        {/* Pendirian Museum PTT */}
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Image Block (Left) */}
                <div className="flex justify-center md:justify-end order-2 md:order-1">
                    <div className="bg-gray-900 p-6 sm:p-8 rounded-lg max-w-sm w-full">
                        <div className="bg-white p-3 sm:p-4 rounded shadow-2xl rotate-3 border-4 border-white transform hover:rotate-0 transition-transform duration-300">
                            <div className="relative">
                                {/* Placeholder Image: Museum Building */}
                                <img
                                    src="https://placehold.co/800x600/2E3192/ffffff?text=Museum+Pos+Bandung"
                                    alt="Gedung Museum Pos Indonesia"
                                    className="w-full aspect-[4/3] object-cover"
                                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/800x600/2E3192/ffffff?text=Museum+Pos+Bandung' }}
                                />
                                <div className="absolute bottom-2 left-2 right-2 bg-gray-900 text-white text-center py-1">
                                    <span className="text-xs font-bold tracking-widest">
                                        GEDUNG MUSEUM POS INDONESIA
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Block (Right) */}
                <div className="order-1 md:order-2">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
                        Museum PTT
                        <br />
                        Cikal Bakal
                    </h2>

                    <div className="flex items-center space-x-4 mb-6 p-3 bg-red-100 rounded-lg border border-red-300">
                         <Map className="h-6 w-6 text-red-600 flex-shrink-0"/> 
                         <p className="text-red-800 font-semibold text-sm">Lokasi: Bandung, Jawa Barat</p>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                        Museum Pos Indonesia awalnya didirikan pada tanggal **27 Juli 1931** dengan nama **Museum Pos, Telegraf dan Telepon (PTT)**. Tujuannya adalah untuk mengumpulkan dan melestarikan benda-benda bersejarah yang berkaitan dengan pos, telegraf, dan telepon di Indonesia.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        Gedungnya berada di samping Gedung Sate, Bandung, yang merupakan salah satu karya arsitektur megah masa Hindia Belanda.
                    </p>
                </div>
            </div>
        </section>

        {/* Koleksi Filateli dan Artifact */}
        <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Text Block (Left) */}
                <div className="order-1">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
                        Jantung Koleksi:
                        <br />
                        Filateli Dunia
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                        Koleksi utamanya adalah **filateli**, yaitu ribuan perangko dari berbagai negara dan zaman, mulai dari perangko Hindia Belanda hingga prangko Republik Indonesia terbaru. Ini adalah cermin sejarah komunikasi bangsa.
                    </p>

                    <div className="flex items-center space-x-3 mb-6">
                        <Archive className="h-8 w-8 text-red-600"/>
                        <p className="font-bold text-lg text-gray-800">10,000+ Koleksi Perangko dan Benda Pos</p>
                    </div>

                    <button className="text-[#2E3192] font-extrabold hover:underline transition-colors text-base sm:text-lg">
                        Lihat Koleksi Unggulan <ChevronRight className="inline h-5 w-5 ml-1"/>
                    </button>
                </div>

                {/* Image Block (Right) */}
                <div className="flex justify-center md:justify-start order-2">
                    <div className="bg-red-600 p-6 sm:p-8 rounded-lg max-w-sm w-full">
                        <div className="bg-white p-2 rounded shadow-2xl">
                            {/* Placeholder Image: Prangko Vintage */}
                            <img
                                src="https://placehold.co/600x800/e0e0e0/000000?text=Vintage+Stamp+Collection"
                                alt="Koleksi Prangko"
                                className="w-full aspect-[3/4] object-cover filter saturate-150 hover:saturate-100 transition-all duration-500"
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x800/e0e0e0/000000?text=Vintage+Stamp+Collection' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

// Content for the "GEDUNG POS TEMPO DULU" tab (New)
const GedungPosTempoDuluContent = () => (
    <div className="py-8">
        {/* Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm mb-6">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <span className="font-bold text-[#2E3192]">MUSEUM POS INDONESIA</span>
            </div>
            <span className="text-gray-500">Gedung Pos Tempo Dulu</span>
        </div>

        {/* Arsitektur Kolonial */}
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Visual Block (Left) */}
                <div className="flex justify-center md:justify-end order-2 md:order-1">
                    <div className="bg-gray-900 p-6 sm:p-8 rounded-lg max-w-sm w-full">
                        <div className="bg-white p-3 sm:p-4 rounded shadow-2xl rotate-3 border-4 border-white transform hover:rotate-0 transition-transform duration-300">
                            <div className="relative">
                                {/* Placeholder Image: Post Office Building Bandung */}
                                <img
                                    src="https://placehold.co/800x600/2E3192/FFFFFF?text=Gedung+Pos+Bandung+Kolonial"
                                    alt="Gedung Pos Bandung"
                                    className="w-full aspect-[4/3] object-cover"
                                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/800x600/2E3192/FFFFFF?text=Gedung+Pos+Bandung+Kolonial' }}
                                />
                                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded-sm">
                                    BANDUNG
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Block (Right) */}
                <div className="order-1 md:order-2">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
                        Arsitektur
                        <br />
                        Indisch & Neo-Klasik
                    </h2>

                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                        Banyak kantor pos bersejarah di Indonesia dibangun pada masa kolonial Belanda dengan gaya arsitektur yang khas, menggabungkan sentuhan Eropa (Neo-Klasik, Art Deco) dengan adaptasi iklim tropis (**Indisch**).
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        Gedung-gedung ini dicirikan oleh tiang-tiang tinggi, fasad simetris, dan penggunaan material lokal untuk menciptakan ruang yang sejuk dan megah.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center text-red-600 font-semibold"><Clock className="h-5 w-5 mr-2"/> Ciri: Simetri dan Kolom Doric.</li>
                        <li className="flex items-center text-red-600 font-semibold"><Building className="h-5 w-5 mr-2"/> Contoh: Kantor Pos Besar Jakarta (Lap. Banteng).</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Transportasi Pos */}
        <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Text Block (Left) */}
                <div className="order-1">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
                        Kendaraan
                        <br />
                        Pengantar Pesan
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                        Di masa lampau, surat dan paket diangkut menggunakan berbagai moda transportasi: kuda, kereta pos (stagecoach), hingga kereta api. Transportasi pos adalah nadi yang menghubungkan pulau-pulau di Nusantara.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg font-bold text-red-600">
                        Kereta api menjadi tulang punggung pengiriman pos antar kota besar di Jawa.
                    </p>

                    <button className="text-[#2E3192] font-extrabold hover:underline transition-colors text-base sm:text-lg">
                        Jelajahi Jalur Pos <ChevronRight className="inline h-5 w-5 ml-1"/>
                    </button>
                </div>

                {/* Image Block (Right) */}
                <div className="flex justify-center md:justify-start order-2">
                    <div className="bg-red-600 p-6 sm:p-8 rounded-lg max-w-sm w-full">
                        <div className="bg-white p-2 rounded shadow-2xl">
                            {/* Placeholder Image: Kereta Pos Lama */}
                            <img
                                src="https://placehold.co/600x800/e0e0e0/000000?text=Kereta+Pos+Vintage"
                                alt="Kereta Pos Lama"
                                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x800/e0e0e0/000000?text=Kereta+Pos+Vintage' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


// --- MAIN COMPONENT ---

const PosSejarah: React.FC = () => {
    const menuItems = [
        { id: 'perpossan', title: 'SEJARAH', subtitle: 'PERPOSSAN', icon: BookOpen, content: <SejarahPerpossanContent /> },
        // Updated to use the new content components
        { id: 'kantor', title: 'SEJARAH', subtitle: 'KANTOR POS', icon: Building, content: <SejarahKantorPosContent /> },
        { id: 'museum', title: 'SEJARAH', subtitle: 'MUSEUM POS INDONESIA', icon: Home, content: <SejarahMuseumPosContent /> },
        { id: 'gedung', title: 'GEDUNG POS', subtitle: 'TEMPO DULU', icon: Map, content: <GedungPosTempoDuluContent /> },
    ];

    const [activeTab, setActiveTab] = useState(menuItems[0].id);
    const [isExiting, setIsExiting] = useState(false);

    const activeItem = menuItems.find(item => item.id === activeTab) || menuItems[0];

    const renderContent = () => {
        return activeItem.content;
    };

    // Fungsi untuk kembali ke home/reset dengan animasi smooth
    const handleBack = () => {
        setIsExiting(true);
        // Tunggu 300ms untuk menyelesaikan transisi opacity sebelum simulasi navigasi
        setTimeout(() => {
            // Simulasi navigasi ke halaman utama/reset, yang paling aman di lingkungan ini adalah reset halaman
            // Note: In a real Next.js app, this would use a router like router.push('/')
            window.location.href = window.location.origin;
        }, 300);
    };

    return (
        // Add Tailwind configuration script for using custom colors in production environment
        <div className="min-h-screen bg-white font-['Inter'] flex flex-col">
            <script src="https://cdn.tailwindcss.com"></script>
            <script>{`
                tailwind.config = {
                    theme: {
                        extend: {
                            colors: {
                                'custom-indigo': '#2E3192',
                            },
                            fontFamily: {
                                'inter': ['Inter', 'sans-serif'],
                            },
                        },
                    },
                }
            `}</script>
            
            {/* 2. Main Content Wrapper: Tambahkan kelas transisi dan opacity berdasarkan state isExiting */}
            <div className={`flex-grow flex flex-col transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                
                {/* Header (POS IND Logo + Back Button) */}
                {/* Border bawah menggunakan warna kustom #2E3192 */}
                <header className="bg-white py-4 sm:py-6 border-b-4 border-[#2E3192] shadow-md">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center">
                            
                            {/* Back to Home Button menggunakan warna kustom #2E3192 */}
                            <button
                                className="text-[#2E3192] font-semibold flex items-center hover:text-red-600 transition-colors text-sm sm:text-base"
                                onClick={handleBack} 
                            >
                                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                                Kembali
                            </button>

                            {/* POS IND Logo menggunakan warna kustom #2E3192 */}
                            <div className="flex items-baseline">
                                <h1 className="text-3xl sm:text-4xl font-black text-[#2E3192] leading-none">
                                    POS
                                </h1>
                                <h2 className="text-3xl sm:text-4xl font-black text-red-600 leading-none ml-1 sm:ml-2">
                                    IND
                                </h2>
                            </div>
                            
                            {/* Spacer for justify-between balance */}
                            <div className="w-12 sm:w-16"></div> 
                        </div>
                    </div>
                </header>

                {/* Tab Navigation Horizontal (Navbar) */}
                {/* Menggunakan warna kustom #2E3192 untuk tab aktif dan border */}
                <nav className="flex bg-gray-700 shadow-xl border-b-4 border-[#2E3192] overflow-x-auto whitespace-nowrap">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex-1 min-w-[25%] px-2 py-4 sm:px-6 sm:py-5 text-center sm:text-left text-white transition-all duration-300 relative group
                                ${
                                    item.id === activeTab
                                    ? 'bg-[#2E3192] border-b-4 border-orange-400 -mb-1' // Warna tab aktif
                                    : 'bg-gray-700 hover:bg-gray-800 border-b-4 border-gray-700' // Warna tab non-aktif
                                }`}
                        >
                            <div className="font-bold text-xs sm:text-sm leading-tight uppercase tracking-wide">
                                {item.title}
                            </div>
                            <div className="font-bold text-xs sm:text-sm leading-tight uppercase tracking-wide">
                                {item.subtitle}
                            </div>
                            
                            {/* Icon dihilangkan pada tampilan mobile agar tab tidak terlalu penuh */}
                            <ChevronRight
                                size={20}
                                className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-300 hidden sm:block
                                    ${item.id === activeTab ? 'text-orange-400' : 'text-white/50 group-hover:text-white'}`}
                            />
                        </button>
                    ))}
                </nav>

                {/* Main Content Area */}
                <main className="container mx-auto px-4 flex-grow">
                    {renderContent()}
                </main>
                
                {/* Floating Chat Button */}
                <div className="fixed bottom-8 right-8 z-50">
                    <button className="bg-orange-400 hover:bg-orange-500 text-white rounded-full p-4 shadow-xl transition-transform duration-200 transform hover:scale-110">
                        {/* Simple Chat Bubble Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M21 6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12l4 4V6z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PosSejarah;