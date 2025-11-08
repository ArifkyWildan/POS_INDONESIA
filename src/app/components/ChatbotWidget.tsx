'use client';

import React, { useState, useRef, useEffect } from 'react';

// --- Ikon SVG ---
// Ikon untuk tombol chat, dibuat ulang dari gambar yang diberikan
const PosBotIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Badan bubble oranye */}
    <path 
      d="M71.5 39.5C71.5 57.4493 57.4493 71.5 39.5 71.5C34.223 71.5 29.2132 70.334 24.787 68.2134C19.897 72.8287 13.5011 75.3364 6.5 76C7.81895 68.3188 9.57143 61.218 12.115 55.102C9.52599 50.2731 8 45.0347 8 39.5C8 21.5507 22.0507 7.5 39.5 7.5C57.4493 7.5 71.5 21.5507 71.5 39.5Z" 
      fill="#F97316" // Orange-600
    />
    {/* Headset (putih) */}
    <rect x="20" y="27" width="40" height="30" rx="15" fill="white"/>
    {/* Mata (lingkaran dalam oranye) */}
    <circle cx="32" cy="42" r="5" fill="#F97316"/>
    <circle cx="48" cy="42" r="5" fill="#F97316"/>
    {/* Mata (lingkaran luar putih) */}
    <circle cx="32" cy="42" r="8" stroke="white" strokeWidth="3"/>
    <circle cx="48" cy="42" r="8" stroke="white" strokeWidth="3"/>
    {/* Senyum (putih) */}
    <path 
      d="M30 51C30 49.8954 34.0294 49 39.5 49C44.9706 49 49 49.8954 49 51" 
      stroke="white" 
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Mikrofon (biru) */}
    <circle cx="58" cy="45" r="7" fill="#2563EB"/>
    <path d="M54 43C53 37 49 29 42 28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

// Ikon X (Tutup)
const XIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Ikon Send (Kirim)
const SendIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
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

// --- Komponen Jendela Chat ---
interface ChatbotWidgetProps {
  onClose: () => void;
}

const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showQuestions, setShowQuestions] = useState<boolean>(true);
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

  // Fungsi untuk mencocokkan pertanyaan user dengan template
  const findMatchingTemplate = (userQuestion: string): QnATemplate | null => {
    const lowerQuestion = userQuestion.toLowerCase();
    
    // Cari pertanyaan yang cocok persis
    let match = chatTemplates.find(
      (template) => template.question.toLowerCase() === lowerQuestion
    );
    
    if (match) return match;

    // Cari berdasarkan kata kunci (logika sederhana)
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

        // Beri skor lebih tinggi untuk kata kunci yang relevan
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
    // Tambahkan pesan user
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setShowQuestions(false);
    setIsTyping(true);

    // Simulasi bot typing dengan delay
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
          'Maaf, untuk informasi tersebut silakan hubungi kami melalui WhatsApp agar tim Museum Pos Indonesia bisa membantu Anda lebih lanjut. 📞';
        
        // Tampilkan pertanyaan umum jika tidak ada kecocokan
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

      // Tampilkan pertanyaan terkait jika ada
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
    <div className="fixed bottom-24 right-6 w-full max-w-sm h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200">
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
          onClick={onClose}
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
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
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
                className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-900 px-3 py-2 rounded-full transition-colors border border-blue-200"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={handleManualInput} className="flex gap-2">
          <input
            type="text"
            name="chatInput" // Tambahkan name untuk akses form
            placeholder="Ketik pertanyaan Anda..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={isTyping}
            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors"
            aria-label="Kirim pesan"
          >
            <SendIcon size={20} />
          </button>
        </form>
        
        {/* WhatsApp Button */}
        <button
          onClick={() => window.open('https://wa.me/6281234567890', '_blank')} // Ganti dengan nomor WA asli
          className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2"
        >
          {/* Ikon WhatsApp SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
          Hubungi via WhatsApp
        </button>
      </div>
    </div>
  );
};


// --- Tombol Floating "Need Help?" ---
interface ChatbotButtonProps {
  onClick: () => void;
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tombol Ikon */}
      <button
        onClick={onClick}
        className="w-16 h-16 rounded-full bg-orange-500 shadow-lg flex items-center justify-center text-white transform transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300 active:scale-95"
        aria-label="Buka chat bantuan"
      >
        <div className="w-12 h-12">
            <PosBotIcon />
        </div>
      </button>

      {/* Tooltip "Need Help?" saat hover */}
      <div className="absolute bottom-1/2 translate-y-1/2 right-20 w-auto p-0 m-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="relative bg-blue-900 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md">
          Need Help?
          {/* Segitiga pointer untuk speech bubble */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0
            border-t-8 border-t-transparent
            border-b-8 border-b-transparent
            border-l-8 border-l-blue-900">
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Komponen Utama Aplikasi ---
const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const toggleChat = (): void => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="">
      {/* Render Tombol atau Jendela Chat secara kondisional */}
      {!isChatOpen ? (
        <ChatbotButton onClick={toggleChat} />
      ) : (
        <ChatbotWidget onClose={toggleChat} />
      )}
    </div>
  );
}

export default App;