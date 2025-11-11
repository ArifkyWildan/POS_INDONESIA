"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Home, BookOpen, Building, Map, X, Clock, Archive, ChevronDown } from 'lucide-react';

// Warna Kustom Utama: #2E3192 (Dark Indigo/Violet)
const MAIN_INDIGO = '#2E3192';

// --- CONTENT DEFINITIONS ---

// Component Title Block untuk Sejarah Perpossan (dari gambar splash screen)
const PerposanTitleBlock = () => (
    <div className="bg-white py-12 px-4 mb-16 border-b-8 border-[#2E3192]">
        <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between">
                {/* Global Icon */}
                <div className="hidden lg:block w-1/3">
                    <svg className="w-48 h-48 text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 18.92c-3.79-.43-7.58-2.61-9.92-5.92 2.34-3.31 6.13-5.49 9.92-5.92V21zm2 0V2.08c3.79.43 7.58 2.61 9.92 5.92-2.34 3.31-6.13 5.49-9.92 5.92zM12 2c3.79-.43 7.58 2.61 9.92 5.92C19.58 4.61 15.79 2.43 12 2zm-2 0c-3.79.43-7.58 2.61-9.92 5.92 2.34 3.31 6.13 5.49 9.92 5.92V2zM12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                    </svg>
                </div>

                {/* Title */}
                <div className="w-full lg:w-2/3 flex flex-col items-start lg:items-end">
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-[#2E3192] leading-none mb-4">
                        Sejarah
                        <br />
                        Perposan
                    </h1>
                </div>
            </div>
        </div>
    </div>
);


// Content for the "SEJARAH PERPOSSAN" tab
const SejarahPerpossanContent = () => (
    <div className="py-8">
        {/* Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm mb-6">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <span className="font-bold text-[#2E3192]">MUSEUM POS INDONESIA</span>
            </div>
            <span className="text-gray-500">Sejarah Perpossan</span>
        </div>

        {/* Title Block from image (Globe + Sejarah Perposan) */}
        <PerposanTitleBlock />

        {/* Kisah Pos Zaman Kuno */}
        <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
                Kisah Pos
                <br />
                Zaman Kuno
            </h2>

            <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Image/Stamp Block (Left) */}
                <div className="md:col-span-1 flex justify-center md:justify-end">
                    <div className="bg-gray-900 p-6 sm:p-8 rounded-lg max-w-xs w-full">
                        <div className="bg-white p-3 sm:p-4 rounded shadow-2xl rotate-1 border-4 border-white transform hover:rotate-0 transition-transform duration-300">
                            <div className="relative">
                                {/* Placeholder Image: President Suharto Stamp (based on the 1993 700p label) */}
                                <img
                                    src="/suharto.jpeg"
                                    alt="Prangko Indonesia Soeharto 1993"
                                    className="w-full aspect-[2/3] object-cover"
                                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/800x1200/4c0c93/ffffff?text=Stamp+Soeharto+1993' }}
                                />
                                <div className="absolute bottom-2 left-2 right-2 bg-red-600 text-white text-center py-1">
                                    <span className="text-xs font-bold tracking-widest">
                                        REPUBLIK INDONESIA
                                    </span>
                                </div>
                                <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 text-xs font-bold rounded-sm">
                                    1993
                                </div>
                                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-sm font-bold rounded-sm">
                                    700p
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Block (Right) */}
                <div className="md:col-span-2">
                    <div className="mb-6 rounded-lg overflow-hidden border-2 border-gray-200 shadow-md">
                        {/* Placeholder Image: Historical Group Photo */}
                        <img
                            src="/acient.png"
                            alt="Sejarah Pos Kuno"
                            className="w-full h-auto object-cover"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/800x300/e9d5ff/4c0c93?text=Ancient+Postal+Couriers' }}
                        />
                    </div>

                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
                    </p>
                </div>
            </div>
        </section>

        {/* Universal Postal Union */}
        <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3192] mb-6 leading-tight">
                Universal
                <br />
                Postal Union (UPU)
            </h2>

            <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Text Block (Left) */}
                <div className="md:col-span-2 order-1">
                    <div className="flex items-center space-x-4 mb-6 p-3 bg-gray-100 rounded-lg border border-gray-200">
                        {/* UPU Logo SVG menggunakan warna kustom #2E3192 */}
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#2E3192] flex-shrink-0" fill="currentColor">
                            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>
                        <div className="text-sm">
                            <div className="font-bold text-[#2E3192]">UNIVERSAL</div>
                            <div className="font-bold text-[#2E3192]">POSTAL</div>
                            <div className="font-bold text-[#2E3192]">UNION</div>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
                    </p>

                    {/* Tombol menggunakan warna kustom #2E3192 */}
                    <button className="text-red-600 font-extrabold hover:underline transition-colors text-base sm:text-lg mt-2">
                        Awali Terbentuk <ChevronRight className="inline h-5 w-5 ml-1"/>
                    </button>
                </div>

                {/* Image Block (Right) */}
                <div className="md:col-span-1 flex justify-center md:justify-start order-2">
                    <div className="bg-gray-900 p-6 sm:p-8 rounded-lg max-w-xs w-full">
                        <div className="bg-white p-2 rounded shadow-2xl">
                            {/* Placeholder Image: Historical Figure B (Black and White) */}
                            <img
                                src="/figure.png"
                                alt="Tokoh Sejarah Pos"
                                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x800/e0e0e0/000000?text=Historical+Figure' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


// Content for the "SEJARAH KANTOR POS" tab (SEHARUSNYA: MUSEUM PTT/AHMAD TAHIR)
// Label navigasi disesuaikan menjadi "SEJARAH MUSEUM INDONESIA"
const SejarahKantorPosContent = () => (
    <div className="py-8">
        {/* Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm mb-6">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <span className="font-bold text-[#2E3192]">MUSEUM POS INDONESIA</span>
            </div>
            <span className="text-gray-500">Sejarah Museum Indonesia</span>
        </div>

        {/* Pendirian Museum PTT (Konten dari Gambar 210837.jpg) */}
        <section className="mb-16 bg-gray-200 p-6 sm:p-10 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Text Block (Left) */}
                <div className="order-1 lg:col-span-1 flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-red-800 mb-6 leading-tight">
                        Sejarah
                        <br />
                        Museum
                        <br />
                        Pos
                        <br />
                        Indonesia
                    </h2>
                </div>

                {/* Visual Block (Right/Center) */}
                <div className="order-2 lg:col-span-2">
                    <div className="mb-6 rounded-lg overflow-hidden shadow-2xl">
                        {/* Placeholder Image: Museum Building */}
                        <img
                            src="/museum1.jpeg"
                            alt="Gedung Museum Pos Indonesia"
                            className="w-full h-auto object-cover"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/900x400/e0e0e0/2E3192?text=Gedung+Museum+Pos' }}
                        />
                    </div>
                    <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                        Museum Pos Indonesia telah hadir sejak masa Hindia Belanda dengan nama **Museum PTT (Pos Telegrap dan Telepon)**, tepatnya pada tahun **1931** terletak dibagian sayap kanan bawah Gedung Kantor Pusat PTT Jl. Cilaki No. 73 Bandung 40115. Koleksi Museum PTT masih terbatas pada berbagai jenis Prangko, namun saat ini koleksinya semakin bertambah terdiri atas benda-benda yang bernilai sejarah seperti Peralatan Pos, Visualisasi dan Diorama Kegiatan Layanan Pos yang memiliki nilai sejarah dalam perjalanan PT Pos Indonesia (Persero) serta Prangko-Prangko dari berbagai Negara.
                    </p>
                    <p className="text-gray-800 leading-relaxed text-sm sm:text-base mt-3">
                        Akibat adanya pergolakan revolusi dan perang kemerdekaan, keberadaan Museum PTT kurang mendapat perhatian, bahkan nyaris terlupakan. Menyadari demikian besarnya peranan museum sebagai sarana pendidikan, informasi dan rekreasi untuk generasi muda di masa sekarang dan mendatang, maka pada tahun 1980 Direksi Perum Pos dan Giro membentuk Phalatila untuk menghidupkan kembali museum. Pada tanggal **27 September 1983** bersamaan dengan hari Bakti Postel ke-38, Museum ini secara resmi dibuka untuk umum oleh Menteri Pariwisata Pos dan Telekomunikasi yang pada saat itu dijabat oleh **Ahmad Tahir** dan diberi nama Museum Pos dan Giro. Sejalan dengan perkembangan perusahaan Pos dimana terhitung tanggal 20 Juni 1995 nama dan status Perusahaan Umum Pos dan Giro menjadi PT Pos Indonesia (Persero), maka Museum Pos dan Giro berubah menjadi Museum Pos Indonesia hingga saat ini.
                    </p>
                </div>
            </div>
        </section>

        {/* Peresmian Achmad Tahir (Konten dari Gambar 210846.jpg) */}
        <section className="mb-12 bg-white p-6 sm:p-10 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Visual Block (Left) */}
                <div className="order-2 md:order-1 flex justify-center">
                    <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-2xl border-4 border-gray-300 -rotate-2">
                        {/* Placeholder Image: Ahmad Tahir Signing */}
                        <img
                            src="/achmad.jpeg"
                            alt="Ahmad Tahir Menandatangani Sampul"
                            className="w-full h-auto object-cover"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x400/9e9e9e/424242?text=Ahmad+Tahir+Peresmian' }}
                        />
                    </div>
                </div>

                {/* Text Block (Right) */}
                <div className="order-1 md:order-2 text-gray-800 leading-relaxed">
                    <div className="text-red-600 font-bold mb-2">
                        27 SEPTEMBER 1983
                    </div>
                    <h3 className="text-3xl font-extrabold text-[#2E3192] mb-4">
                        ACHMAD TAHIR
                    </h3>
                    <p className="font-semibold text-sm mb-4">
                        Menteri Pariwisata Pos dan Telekomunikasi
                    </p>
                    <p className="text-sm">
                        Bersamaan dengan peringatan Hari Bhakti Postel ke-38 dilakukan penandatangan sampul-sampul peringatan, sekaligus peresmian Museum Pos dan Giro.
                    </p>
                </div>
            </div>
        </section>
    </div>
);


// Content for the "SEJARAH MUSEUM POS INDONESIA" tab (SEHARUSNYA: GUSTAAF WILLEM/BATAVIA 1746)
// Label navigasi disesuaikan menjadi "SEJARAH KANTOR POS"
const SejarahMuseumPosContent = () => (
    <div className="py-8">
        {/* Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm mb-6">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <span className="font-bold text-[#2E3192]">MUSEUM POS INDONESIA</span>
            </div>
            <span className="text-gray-500">Sejarah Kantor Pos</span>
        </div>

        {/* Pendirian Kantor Pos Batavia 1746 (Konten dari Gambar 212020.jpg) */}
        <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
                SEJARAH KANTOR POS
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Text Block (Left) */}
                <div className="order-1">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                        Kantor Pos pertama didirikan di Batavia oleh Gubernur Jenderal Gustaaf Willem Baron Van Imhoff pada tanggal **26 Agustus 1746** dengan tujuan untuk lebih menjamin keamanan surat-surat penduduk, terutama bagi mereka yang datang dan pergi ke negeri Belanda. Pengantar Kantor Pos tersebut terdiri dari dua orang "**Postmeester**" yang disumpah dan dibantu dengan dua orang Kerani (klerk) yang disumpah pula termasuk pegawai Kantor Pos ini ialah beberapa pengantar Pos.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        Setelah Kantor pos Batavia didirikan, maka empat tahun kemudian didirikan kantor pos Semarang untuk mengadakan Perhubungan Pos yang teratur
                    </p>
                </div>

                {/* Visual Block (Right) */}
                <div className="flex justify-center md:justify-start order-2">
                    <div className="w-full max-w-md rounded-lg overflow-hidden shadow-2xl border-4 border-gray-700">
                        {/* Placeholder Image: Kantor Pos Batavia */}
                        <img
                            src="/koleksi1.webp"
                            alt="Kantor Pos Batavia Tempo Dulu"
                            className="w-full h-auto object-cover grayscale"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x400/a0a0a0/000000?text=Kantor+Pos+Batavia+1746' }}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-8 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p className="mb-4">
                    ...antara kedua tempat itu dan untuk mempercepat pengirimannya. Rute perjalanan Pos kala itu melalui Krawang, Cirebon dan Pekalongan. Dari sejarah pos semasa kompeni dapat diteliti bahwa kata "**Kantor**" yang dikenal sekarang berasal dari kata *COMPTOIR* lama kelamaan menjadi "**Kantoor**" (Bahasa Belanda) dalam Bahasa Indonesia "Kantor" sedangkan kata "**Pos**" berasal dari kata kerja latin *Ponere* yang berubah menjadi *Posita* ini menjadi "**Posta**" dalam Bahasa Italia menjadi *Poste* dalam Bahasa Perancis dan *Post* dalam Bahasa Inggris, Belanda dan Jerman.
                </p>
                <p>
                    Istilah "*Post Comtpoir*" antara lain Nampak pula pada Cap tanggal jaman Pemerintahan Daendels yang kemudian dibelandakan menjadi "*Postkantoor*" dan menjadi istilah Indonesia adalah "**Kantor Pos**".
                </p>
            </div>
        </section>

        {/* Gustaaf Willem Baron Van Imhoff (Konten dari Gambar 212012.jpg) */}
        <section className="mb-12 bg-yellow-100 p-6 sm:p-10 rounded-xl shadow-inner border-l-4 border-yellow-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Visual Block (Left) */}
                <div className="order-1 flex justify-center md:justify-end">
                    <div className="w-full max-w-sm relative">
                        {/* Map & Compass Background */}
                        <div className="absolute inset-0 bg-gray-600 rounded-lg opacity-20" style={{ backgroundImage: "url('https://placehold.co/600x600/1e293b/7e8a9f?text=Map+Background')" }}></div>

                        {/* Compass Overlay */}
                        <div className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg">
                            <Map className="h-8 w-8 text-gray-700 rotate-12"/>
                        </div>

                        {/* Portrait */}
                        <div className="relative z-10 p-4">
                            <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-yellow-500 shadow-2xl mx-auto" style={{
                                backgroundImage: `url('https://placehold.co/400x400/d7e0f4/2E3192?text=Gustaaf+Willem')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                {/* Placeholder for portrait image inside the circle */}
                                <div className="w-full h-full bg-cover bg-center" style={{ 
                                    backgroundImage: `url('https://placehold.co/400x400/d7e0f4/2E3192?text=Gustaaf+Willem')`,
                                    mixBlendMode: 'multiply',
                                    opacity: 0.8
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Block (Right) */}
                <div className="order-2 text-gray-800 leading-relaxed">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-red-800 mb-2">
                        GUSTAAF WILLEM
                        <br />
                        BARON VAN IMHOFF
                    </h3>
                    <div className="text-lg font-semibold text-[#2E3192] mb-4">
                        1705 - 1750
                    </div>
                    <p className="text-sm sm:text-base mb-3">
                        Gustaaf Willem Baron van Imhoff merupakan Gubernur Jenderal. Dilahirkan di Leer (Jerman)
                    </p>
                    <p className="text-sm sm:text-base">
                        8 Agustus 1705 dan meninggal pada tanggal 1 November 1750 di Batavia. Gustaaf Willem Baron Van Imhoff membuka kantor pos pertama di Batavia.
                    </p>
                </div>
            </div>
        </section>
    </div>
);


// Component Title Block untuk Gedung Pos Tempo Dulu
const GedungPosTitleBlock = () => (
    <div className="bg-yellow-400 p-8 sm:p-12 mb-16 rounded-xl shadow-xl">
        <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Visual Kiri: Foto Gedung Pos Lama */}
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0">
                    <div className="bg-white p-4 rounded-lg shadow-2xl rotate-1 transform hover:rotate-0 transition-transform duration-300 border-4 border-gray-100">
                        {/* Placeholder Image: Gedung Pos Lama Hitam Putih */}
                        <img
                            src="/koleksi1.webp"
                            alt="Gedung Pos Tempo Dulu"
                            className="w-full max-w-xs object-cover"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/500x350/ffffff/000000?text=Post+Telegraaf+Kantoor' }}
                        />
                    </div>
                </div>

                {/* Title Kanan */}
                <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-end text-center lg:text-right">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-red-800 leading-none mb-4">
                        Gedung Pos
                        <br />
                        Tempo Dulu
                    </h1>
                    {/* Arrow Down */}
                    <ChevronDown className="h-10 w-10 text-red-800 mt-4 animate-bounce" />
                </div>
            </div>
        </div>
    </div>
);


// Content for the "GEDUNG POS TEMPO DULU" tab
const GedungPosTempoDuluContent = () => (
    <div className="py-8">
        {/* Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm mb-6">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <span className="font-bold text-[#2E3192]">MUSEUM POS INDONESIA</span>
            </div>
            <span className="text-gray-500">Gedung Pos Tempo Dulu</span>
        </div>

        {/* Title Block dari gambar 213821.jpg */}
        <GedungPosTitleBlock />

        {/* Arsitektur Kolonial */}


        {/* Transportasi Pos */}

    </div>
);


// --- MAIN COMPONENT ---

const PosSejarah: React.FC = () => {
    // Label dan Content dipertukarkan sesuai permintaan user
    const menuItems = [
        { id: 'perpossan', title: 'SEJARAH', subtitle: 'PERPOSSAN', icon: BookOpen, content: <SejarahPerpossanContent /> },
        // Nav Label: SEJARAH MUSEUM INDONESIA (karena kontennya Museum PTT)
        { id: 'kantor', title: 'SEJARAH MUSEUM', subtitle: 'INDONESIA', icon: Building, content: <SejarahKantorPosContent /> },
        // Nav Label: SEJARAH KANTOR POS (karena kontennya Batavia 1746)
        { id: 'museum', title: 'SEJARAH KANTOR', subtitle: 'POS', icon: Home, content: <SejarahMuseumPosContent /> },
        { id: 'gedung', title: 'GEDUNG POS', subtitle: 'TEMPO DULU', icon: Map, content: <GedungPosTempoDuluContent /> },
    ];

    // MODIFIKASI: Set default active tab ke 'perpossan' (index 0)
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
            // Simulasi navigasi ke halaman utama/reset
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