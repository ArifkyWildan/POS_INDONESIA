'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Star } from 'lucide-react';

// --- Ikon Gambar (Sesuai Permintaan User) ---
// Catatan: URL gambar ini (/chatbot-icon.png, /chatbot-popup.png) tidak akan dimuat di lingkungan ini.
const PosBotIcon: React.FC = () => (
    <img 
        src="/chatbot-icon.png"
        alt="PosBot Icon" 
        width="78" 
        height="78" 
        className="w-full h-full object-contain"
    />
);
const PosBotHover: React.FC = () => (
    <img 
        src="/chatbot-popup.png" 
        alt="PosBot Popup" 
        width="112" 
        height="74" 
        className="block w-full h-full object-contain"
    />
);
// --- Akhir Ikon Gambar ---

// Ikon X (Tutup)
const XIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
    <X size={size} className={className} />
);

// Ikon Send (Kirim)
const SendIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
    <Send size={size} className={className} />
);

// Ikon Bintang (Rating)
const StarIcon: React.FC<{ size?: number; className?: string; fill?: string }> = ({ size = 24, className = "", fill = "none" }) => (
    <Star size={size} className={className} fill={fill} />
);

// --- Tipe Data ---
interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

interface QnATemplate {
    id: string;
    question: string;
    answer: string;
    relatedQuestions?: string[];
}

// --- Data Template QnA ---
const chatTemplates: QnATemplate[] = [
    {
        id: '1',
        question: 'Apa jadwal operasional museum?',
        answer:
            'Jadwal operasional Museum Pos Indonesia adalah:\n🕘 Senin – Jumat: 09.00 – 15.00 WIB\n🕘 Sabtu: 09.00 – 15.00 WIB\n📅 Minggu/Hari Besar: Tutup',
        relatedQuestions: ['Bagaimana cara melakukan reservasi?', 'Di mana lokasi museum?'],
    },
    {
        id: '2',
        question: 'Di mana lokasi museum?',
        answer:
            'Museum Pos Indonesia berlokasi di Gedung Kantor Pusat PTT, Jalan Cilaki No.73, Bandung 40115.\n📍 Lokasinya berada di sisi kanan bawah Gedung Sate.',
        relatedQuestions: ['Apa jadwal operasional museum?', 'Berapa biaya masuk museum?'],
    },
    {
        id: '3',
        question: 'Apakah perlu reservasi sebelum berkunjung?',
        answer:
            'Untuk kunjungan individu tidak perlu reservasi. Namun, untuk rombongan (sekolah, komunitas, atau institusi), kami sarankan melakukan reservasi agar pelayanan lebih optimal.',
        relatedQuestions: ['Bagaimana cara melakukan reservasi?', 'Berapa biaya masuk museum?'],
    },
    {
        id: '4',
        question: 'Bagaimana cara melakukan reservasi?',
        answer:
            'Anda bisa mengisi formulir di halaman reservasi online yang tersedia di website kami. Setelah itu, tim kami akan menghubungi Anda melalui WhatsApp untuk konfirmasi jadwal.',
        relatedQuestions: ['Apakah perlu reservasi sebelum berkunjung?', 'Apa jadwal operasional museum?'],
    },
    {
        id: '5',
        question: 'Berapa biaya masuk museum?',
        answer: 'Kunjungan ke Museum Pos Indonesia gratis alias tidak dikenakan biaya masuk. 🎉',
        relatedQuestions: ['Apa saja koleksi di Museum Pos Indonesia?', 'Di mana lokasi museum?'],
    },
    {
        id: '6',
        question: 'Apa saja koleksi di Museum Pos Indonesia?',
        answer:
            'Museum ini memiliki koleksi bersejarah seperti perangko kuno, timbangan surat, alat telegraf, hingga replika ruang kerja pos zaman kolonial. 📮',
        relatedQuestions: ['Apakah ada pemandu tur di museum?', 'Berapa biaya masuk museum?'],
    },
    {
        id: '7',
        question: 'Apakah ada pemandu tur di museum?',
        answer: 'Ya, tersedia pemandu tur untuk rombongan yang melakukan reservasi terlebih dahulu.',
        relatedQuestions: ['Bagaimana cara melakukan reservasi?', 'Apa saja koleksi di Museum Pos Indonesia?'],
    },
    {
        id: '8',
        question: 'Bagaimana jika saya ingin tahu lebih lanjut?',
        answer:
            'Untuk informasi lebih lanjut, Anda dapat menghubungi kami melalui WhatsApp di nomor resmi yang tersedia di website.\n📞 Klik tombol "Hubungi via WhatsApp" untuk terhubung langsung.',
        relatedQuestions: [],
    },
];

// --- Komponen Modal Konfirmasi Penutupan (Disesuaikan) ---
interface CloseConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
}

const CloseConfirmationModal: React.FC<CloseConfirmationModalProps> = ({ onConfirm, onCancel }) => (
    // Ukuran diperkecil ke max-w-[256px] (setara max-w-xs, tapi lebih spesifik)
    // Padding sedikit dikurangi (p-4)
    <div className="bg-white rounded-xl shadow-2xl max-w-[280px] w-full p-4 space-y-3">
        <h3 className="text-lg font-bold text-gray-800">Konfirmasi Penutupan</h3>
        <p className="text-sm text-gray-600">Apakah Anda yakin ingin menutup PosBot?</p>
        <div className="flex justify-end space-x-2">
            <button
                onClick={onCancel}
                className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
                Batal
            </button>
            <button
                onClick={onConfirm}
                className="px-3 py-1.5 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
            >
                Ya, Tutup
            </button>
        </div>
    </div>
);

// --- Komponen Modal Rating (Disesuaikan) ---
interface RatingModalProps {
    onClose: () => void;
}

const RatingModal: React.FC<RatingModalProps> = ({ onClose }) => {
    const [rating, setRating] = useState<number>(0);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleSubmit = () => {
        // Simulasi pengiriman data rating (tidak ada backend)
        console.log(`Rating diberikan: ${rating} bintang.`);
        setIsSubmitted(true);
        setTimeout(onClose, 1500); // Tutup setelah 1.5 detik
    };

    return (
        // Ukuran diperkecil ke max-w-[280px] (setara max-w-xs, tapi lebih spesifik)
        // Padding sedikit dikurangi (p-5)
        <div className="bg-white rounded-xl shadow-2xl max-w-[280px] w-full p-5 space-y-4 text-center">
            <h3 className="text-xl font-extrabold text-blue-900">Nilai Pengalaman Anda</h3>
            
            {!isSubmitted ? (
                <>
                    <p className="text-sm text-gray-600">Bagaimana penilaian Anda terhadap layanan PosBot?</p>
                    <div className="flex justify-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => setRating(star)}
                                className="p-1 transition-transform hover:scale-110"
                                aria-label={`Beri rating ${star} bintang`}
                            >
                                <StarIcon
                                    size={30} // Ukuran bintang diperkecil
                                    className={`cursor-pointer ${
                                        star <= rating ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                                    fill={star <= rating ? 'currentColor' : 'none'}
                                />
                            </button>
                        ))}
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{rating > 0 ? `Anda memberi ${rating} bintang.` : 'Silakan pilih bintang'}</p>
                    <button
                        onClick={handleSubmit}
                        disabled={rating === 0}
                        className={`w-full py-2 rounded-full text-sm text-white font-semibold transition-colors ${
                            rating > 0 ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-300 cursor-not-allowed'
                        }`}
                    >
                        Kirim Rating
                    </button>
                </>
            ) : (
                <div>
                    <svg className="mx-auto text-green-500 w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p className="text-lg font-semibold text-green-700">Terima kasih atas penilaian Anda!</p>
                </div>
            )}

        </div>
    );
};


// --- Komponen Jendela Chat (Sekarang mengelola modal internal) ---
interface ChatbotWidgetProps {
    onClose: () => void; // Final closure function dari App
}

const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onClose }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [showQuestions, setShowQuestions] = useState<boolean>(true);
    
    // State baru untuk modal internal
    const [showCloseConfirm, setShowCloseConfirm] = useState<boolean>(false);
    const [showRatingModal, setShowRatingModal] = useState<boolean>(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll otomatis ke bawah saat ada pesan baru
    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Pesan sambutan pertama kali
    useEffect(() => {
        if (messages.length === 0) {
            const welcomeMessage: Message = {
                id: 'welcome',
                text: 'Selamat datang di Museum Pos Indonesia! 👋\n\nSaya PosBot, asisten virtual museum. Silakan pilih pertanyaan di bawah ini atau tanyakan langsung kepada saya.',
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages([welcomeMessage]);
        }
    }, []);

    // --- LOGIKA MODAL INTERNAL ---
    const handleTryClose = (): void => {
        setShowCloseConfirm(true);
    };

    const handleCancelClose = (): void => {
        setShowCloseConfirm(false);
    };

    const handleConfirmClose = (): void => {
        setShowCloseConfirm(false); 
        setShowRatingModal(true); // Buka modal rating
    };

    const handleCloseRating = (): void => {
        setShowRatingModal(false);
        onClose(); // Panggil fungsi penutupan utama (dari App)
    };
    // --- AKHIR LOGIKA MODAL INTERNAL ---


    // Fungsi untuk mencocokkan pertanyaan user dengan template
    const findMatchingTemplate = (userQuestion: string): QnATemplate | null => {
        const lowerQuestion = userQuestion.toLowerCase();

        let match = chatTemplates.find(
            (template) => template.question.toLowerCase() === lowerQuestion
        );

        if (match) return match;

        const keywords = ['jadwal', 'lokasi', 'reservasi', 'biaya', 'koleksi', 'pemandu', 'operasional', 'tiket', 'masuk', 'gratis'];
        const userKeywords = lowerQuestion.split(' ').filter(k => k.length > 3);

        let bestMatch: QnATemplate | null = null;
        let maxScore = 0;

        chatTemplates.forEach((template) => {
            let currentScore = 0;
            const templateKeywords = template.question.toLowerCase().split(' ');

            userKeywords.forEach(uk => {
                if (templateKeywords.includes(uk)) {
                    currentScore++;
                }
            });

            keywords.forEach(k => {
                if (lowerQuestion.includes(k) && template.question.toLowerCase().includes(k)) {
                    currentScore += 2;
                }
            });

            if (currentScore > maxScore) {
                maxScore = currentScore;
                bestMatch = template;
            }
        });

        return bestMatch;
    };

    // Handler ketika user mengirim pesan atau klik quick question
    const handleSendMessage = (text: string) => {
        const userMessage: Message = {
            id: Date.now().toString(),
            text,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setShowQuestions(false);
        setIsTyping(true);

        setTimeout(() => {
            const matchedTemplate = findMatchingTemplate(text);

            let botResponse: string;
            let relatedQuestions: string[] = [];

            if (matchedTemplate) {
                botResponse = matchedTemplate.answer;
                const allQuestions = chatTemplates.map(t => t.question);
                relatedQuestions = matchedTemplate.relatedQuestions?.filter(q => allQuestions.includes(q)) || [];
            } else {
                botResponse =
                    'Maaf, saya hanya bisa menjawab pertanyaan seputar informasi dasar Museum Pos Indonesia. Untuk informasi lebih lanjut, silakan hubungi kami melalui WhatsApp agar tim kami bisa membantu Anda lebih lanjut. 📞';

                relatedQuestions = [
                    chatTemplates.find(t => t.id === '1')?.question || 'Apa jadwal operasional museum?',
                    chatTemplates.find(t => t.id === '2')?.question || 'Di mana lokasi museum?',
                    chatTemplates.find(t => t.id === '5')?.question || 'Berapa biaya masuk museum?'
                ];
            }

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);

            if (relatedQuestions.length > 0) {
                setTimeout(() => {
                    const followUpMessage: Message = {
                        id: (Date.now() + 2).toString(),
                        text: 'Apakah Anda ingin tahu tentang hal lain? 😊',
                        sender: 'bot',
                        timestamp: new Date(),
                    };
                    setMessages((prev) => [...prev, followUpMessage]);
                    setShowQuestions(true);
                }, 500);
            }
        }, 1000 + Math.random() * 1000); // Random delay 1-2 detik
    };

    // Handler untuk input manual user
    const handleManualInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.elements.namedItem('chatInput') as HTMLInputElement;
        if (input && input.value.trim()) {
            handleSendMessage(input.value.trim());
            input.value = '';
        }
    };

    // Mendapatkan 3 pertanyaan populer pertama
    const questionsToShow: string[] = chatTemplates.slice(0, 3).map(t => t.question);

    return (
        <div className="fixed bottom-20 right-4 w-full max-w-xs h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-lg text-white">
                        PB
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">PosBot</h3>
                        <p className="text-xs text-blue-200">Asisten Museum Pos Indonesia</p>
                    </div>
                </div>
                <button
                    onClick={handleTryClose} // <-- Menggunakan handler internal
                    className="hover:bg-blue-800 p-2 rounded-full transition-colors"
                    aria-label="Tutup chat"
                >
                    <XIcon size={20} />
                </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                                message.sender === 'user'
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-white text-gray-800 shadow-md border border-gray-100'
                                }`}
                        >
                            <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                            <span
                                className={`text-xs mt-1 block ${
                                    message.sender === 'user' ? 'text-blue-200' : 'text-gray-400'
                                    }`}
                            >
                                {message.timestamp.toLocaleTimeString('id-ID', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-100">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {showQuestions && !isTyping && (
                <div className="px-4 py-3 bg-white border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2 font-medium">Pertanyaan Populer:</p>
                    <div className="flex flex-wrap gap-2">
                        {questionsToShow.map((question) => (
                            <button
                                key={question}
                                onClick={() => handleSendMessage(question)}
                                className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-900 px-3 py-2 rounded-full transition-colors border border-blue-200 whitespace-nowrap"
                            >
                                {question}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200">
                <form onSubmit={handleManualInput} className="flex gap-2">
                    <input
                        type="text"
                        name="chatInput" 
                        placeholder="Ketik pertanyaan Anda..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
                        disabled={isTyping || showCloseConfirm || showRatingModal} // Disable input saat modal aktif
                    />
                    <button
                        type="submit"
                        disabled={isTyping || showCloseConfirm || showRatingModal} // Disable button saat modal aktif
                        className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors"
                        aria-label="Kirim pesan"
                    >
                        <SendIcon size={20} />
                    </button>
                </form>

                {/* WhatsApp Button */}
                <button
                    onClick={() => window.open('https://wa.me/6281234567890', '_blank')} 
                    className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                    {/* Ikon WhatsApp SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    Hubungi via WhatsApp
                </button>
            </div>

            {/* --- MODAL INTERNAL CHATBOT --- */}
            {(showCloseConfirm || showRatingModal) && (
                // Latar belakang diubah: opacity lebih rendah dan backdrop-blur-sm
                <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm flex items-center justify-center p-4">
                    {showCloseConfirm && (
                        <CloseConfirmationModal
                            onConfirm={handleConfirmClose}
                            onCancel={handleCancelClose}
                        />
                    )}

                    {showRatingModal && (
                        <RatingModal onClose={handleCloseRating} />
                    )}
                </div>
            )}
        </div>
    );
};


// --- Tombol Floating (Icon dan Hover kembali menggunakan Gambar) ---
interface ChatbotButtonProps {
    onClick: () => void;
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ onClick }) => {
    return (
        <div className="fixed bottom-6 right-6 z-40 group">
            {/* Tombol Ikon */}
            <button
                onClick={onClick}
                className="w-20 h-20 rounded-full flex items-center justify-center text-white transform transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300 active:scale-95 p-0 bg-transparent"
                aria-label="Buka chat bantuan"
            >
                <div className="w-[78px] h-[78px] flex items-center justify-center">
                    <PosBotIcon />
                </div>
            </button>

            {/* Tooltip Hover (Menggunakan gambar PosBotHover asli) */}
            <div className="absolute bottom-1/2 translate-y-1/2 right-10 w-auto p-0 m-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="relative w-[112px] h-[74px]"> 
                    <PosBotHover />
                </div>
            </div>
        </div>
    );
};


// --- Komponen Utama Aplikasi (Disimplifikasi) ---
const App: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

    // Handler untuk membuka/menutup chat secara final
    const toggleChat = (): void => {
        setIsChatOpen((prev) => !prev);
    };

    return (
        <div className="font-sans">
            {/* Render Tombol atau Jendela Chat secara kondisional */}
            {!isChatOpen ? (
                <ChatbotButton onClick={toggleChat} />
            ) : (
                // Meneruskan toggleChat sebagai onClose untuk penutupan final setelah rating
                <ChatbotWidget onClose={toggleChat} />
            )}
        </div>
    );
}

export default App;