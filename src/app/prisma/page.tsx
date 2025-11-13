"use client";

/**
 * Komponen utama untuk menampilkan Halaman Layanan Prangko Prisma.
 * Menggunakan Tailwind CSS untuk styling responsif.
 */
import React, { useState } from 'react';
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});
// Definisi warna kustom Pos Indonesia
const COLOR_DARK = '#172b60'; // Biru tua
const COLOR_BLUE = '#24459d'; // Biru sedang
const COLOR_ACCENT = '#eab308'; // Kuning emas

const App = () => {
    const [fileName, setFileName] = useState('');

    // --- Utility Components ---

    const BackButton = () => (
        <a href="/" className={`flex items-center text-sm font-semibold px-4 py-2 rounded-full border transition duration-200 
            text-[${COLOR_DARK}] border-[${COLOR_DARK}] hover:bg-[${COLOR_DARK}] hover:text-white`}>
            {/* SVG Arrow Left (Ikon Panah) */}
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Kembali ke Beranda
        </a>
    );

    // FIX: Tambahkan tipe eksplisit untuk props children
    const TitleBar = ({ children }: { children: React.ReactNode }) => (
        <div className={`bg-[${COLOR_DARK}] py-3 px-4 rounded-t-xl -mt-10 mb-6 inline-block shadow-lg`}>
            {children}
        </div>
    );

    // FIX: Tambahkan tipe eksplisit untuk props StampImage
    const StampImage = ({ src, alt, className }: { src?: string; alt: string; className?: string }) => (
        <img
            src={src || 'https://placehold.co/100x120/eab308/172b60?text=PRISMA'}
            alt={alt}
            // Tambahkan tipe untuk event onError agar sesuai dengan React
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = 'https://placehold.co/100x120/eab308/172b60?text=PRISMA'; }} // Fallback
            className={`object-cover shadow-xl border-2 border-[${COLOR_ACCENT}] rounded-lg ${className || ''}`}
        />
    );

    // --- Handler untuk Simulasi Upload File ---
    // FIX: Tambahkan tipe eksplisit untuk event (React.ChangeEvent<HTMLInputElement>)
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
            // Di lingkungan nyata, di sini akan ada proses upload ke server
        } else {
            setFileName('');
        }
    };

    return (
        <div className="min-h-screen bg-[#f0f4f8] font-sans text-gray-800 antialiased">
            
            {/* Header dengan Logo Pos Indonesia */}
            <header className="bg-white border-b-2 border-gray-200 py-4 mb-8">
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    <BackButton />
                    <div className="text-4xl md:text-5xl font-black tracking-tight">
                        <span className={`text-[${COLOR_DARK}] ${bebasNeue.className}`}>MUSEUM POS INDONESIA</span>
                       
                    </div>
                </div>
            </header>
            
            {/* Area Judul */}
            <div className="container mx-auto px-4 md:px-8 pb-8">
                <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight text-[${COLOR_DARK}]`}>
                    PRANGKO PRISMA
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mt-2">Personalitas Anda di Atas Kertas Pos</p>
            </div>

            <main className="container mx-auto px-4 md:px-8 py-4">

                {/* Bagian 1: Pengertian Prangko Prisma */}
                <section id="pengertian" className="mb-16">
                    <div className="shadow-xl transition duration-300 hover:shadow-2xl bg-white p-6 md:p-10 rounded-xl mb-12">
                        <TitleBar>
                            <h3 className="text-2xl font-bold uppercase tracking-wider text-white">APA ITU PRANGKO PRISMA?</h3>
                        </TitleBar>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-2/3">
                                <p className="text-base mb-4">
                                    Prangko Prisma (Prangko Identitas Milik Anda) adalah sebuah inovasi layanan dari Pos Indonesia yang memungkinkan masyarakat untuk membuat prangko dengan foto atau gambar pribadi mereka. 
                                    Layanan ini menggabungkan fungsi filateli tradisional dengan sentuhan personal yang unik.
                                </p>
                                <p className="mb-4 text-gray-700">
                                    Prangko Prisma sah digunakan sebagai alat bayar pengiriman pos, sama seperti prangko biasa, namun menjadikannya kenang-kenangan yang sangat berharga. Ini adalah cara sempurna untuk mengabadikan momen spesial seperti pernikahan, wisuda, atau ulang tahun, dan membagikannya melalui surat atau koleksi.
                                </p>

                                {/* Fitur Utama */}
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                        <p className={`font-bold text-lg text-[${COLOR_DARK}]`}>100% Sah</p>
                                        <p className="text-sm text-gray-600">Alat Bayar Kiriman Pos</p>
                                    </div>
                                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-300">
                                        <p className={`font-bold text-lg text-[${COLOR_DARK}]`}>Desain Bebas</p>
                                        <p className="text-sm text-gray-600">Gunakan Foto Anda Sendiri</p>
                                    </div>
                                    <div className="p-3 bg-red-50 rounded-lg border border-red-300">
                                        <p className={`font-bold text-lg text-[${COLOR_DARK}]`}>Kenang-kenangan</p>
                                        <p className="text-sm text-gray-600">Abadikan Momen Berharga</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/3 flex flex-col items-center pt-8 md:pt-0">
                                <p className={`text-sm font-semibold italic text-[${COLOR_BLUE}] mb-2`}>Contoh Prangko Prisma</p>
                                <StampImage 
                                    src="/prisma.jpg" 
                                    alt="Contoh Prangko Prisma dengan Foto Pribadi" 
                                    className="w-40 h-52 border-4 border-dashed border-gray-400"
                                />
                                <p className="text-xs text-gray-500 mt-2">Dikelilingi oleh bingkai resmi Pos Indonesia.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Bagian 2: Area Unggah File & Pemesanan */}
                <section id="kreasi-anda">
                    <div className="shadow-xl transition duration-300 hover:shadow-2xl bg-white p-6 md:p-10 rounded-xl">
                        <div className={`bg-gradient-to-r from-[${COLOR_ACCENT}] to-yellow-600 py-3 px-4 rounded-t-xl -mt-10 mb-6 inline-block shadow-lg`}>
                            <h3 className={`text-2xl font-bold uppercase tracking-wider text-[${COLOR_DARK}]`}>KREASIKAN PRANGKO ANDA</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            
                            {/* Kolom Kiri: Input File */}
                            <div className={`lg:col-span-1 p-6 bg-[#f0f4f8] rounded-lg border-2 border-dashed border-[${COLOR_BLUE}]`}>
                                <h4 className={`text-xl font-bold text-[${COLOR_DARK}] mb-4`}>1. Unggah Foto Terbaik Anda</h4>
                                <p className="text-sm text-gray-600 mb-4">Pastikan foto berkualitas tinggi (min. 300 dpi) dan berformat JPEG/PNG. Wajah harus terlihat jelas.</p>

                                <label 
                                    htmlFor="file-upload" 
                                    className={`block w-full cursor-pointer py-3 px-4 text-center rounded-lg font-semibold 
                                               text-white bg-[${COLOR_BLUE}] hover:bg-[${COLOR_DARK}] transition duration-200 shadow-md`}
                                >
                                    {fileName ? `File Terpilih: ${fileName.substring(0, 20)}${fileName.length > 20 ? '...' : ''}` : 'Pilih Foto untuk Prangko'}
                                </label>
                                <input 
                                    id="file-upload" 
                                    type="file" 
                                    accept="image/png, image/jpeg"
                                    className="hidden" 
                                    onChange={handleFileChange}
                                />
                                
                                {fileName && (
                                    <p className="mt-3 text-xs text-green-600 flex items-center justify-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Foto berhasil dipilih.
                                    </p>
                                )}
                            </div>

                            {/* Kolom Tengah & Kanan: Langkah Pemesanan */}
                            <div className="lg:col-span-2">
                                <h4 className={`text-xl font-bold text-[${COLOR_DARK}] mb-4`}>2. Proses dan Pengiriman</h4>
                                <ol className="space-y-4">
                                    <li className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border-l-4 border-yellow-500">
                                        <div className="flex-shrink-0 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">A</div>
                                        <p className="flex-1">Pilih desain bingkai prangko resmi yang tersedia. Tentukan nominal dan jumlah lembar cetak.</p>
                                    </li>
                                    <li className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border-l-4 border-yellow-500">
                                        <div className="flex-shrink-0 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">B</div>
                                        <p className="flex-1">Isi data diri dan alamat pengiriman dengan lengkap untuk memproses pesanan Anda.</p>
                                    </li>
                                    <li className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border-l-4 border-yellow-500">
                                        <div className="flex-shrink-0 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">C</div>
                                        <p className="flex-1">Lakukan pembayaran. Setelah pembayaran dikonfirmasi, Pos Indonesia akan mencetak dan mengirimkan Prangko Prisma Anda.</p>
                                    </li>
                                </ol>

                                <button
                                    onClick={() => console.log("Simulasi: Silakan unggah foto Anda terlebih dahulu untuk melanjutkan ke proses pemesanan.")}
                                    className={`mt-8 w-full py-4 text-xl rounded-lg font-extrabold shadow-lg transition duration-300 
                                                ${fileName 
                                                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                    disabled={!fileName}
                                >
                                    LANJUTKAN KE PEMESANAN
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-2">
                                    {fileName ? 'Klik untuk memproses pesanan Anda.' : 'Silakan unggah foto untuk mengaktifkan tombol pemesanan.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-12"></div> {/* Spacer */}

            </main>
            
            {/* Footer Sederhana */}
            <footer className="bg-white border-t border-gray-200 py-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Pos Indonesia. Layanan Filateli Digital.
            </footer>

        </div>
    );
};

export default App;