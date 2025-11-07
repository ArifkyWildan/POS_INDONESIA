'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

// Tipe data untuk pesan chat
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Template QnA
interface QnATemplate {
  id: string;
  question: string;
  answer: string;
  relatedQuestions?: string[];
}

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

interface ChatbotWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuestions, setShowQuestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll otomatis ke bawah saat ada pesan baru
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Pesan sambutan pertama kali
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        text: 'Selamat datang di Museum Pos Indonesia! 👋\n\nSaya PosBot, asisten virtual museum. Silakan pilih pertanyaan di bawah ini atau tanyakan langsung kepada saya.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  // Fungsi untuk mencocokkan pertanyaan user dengan template
  const findMatchingTemplate = (userQuestion: string): QnATemplate | null => {
    const lowerQuestion = userQuestion.toLowerCase();
    
    // Cari pertanyaan yang cocok persis
    let match = chatTemplates.find(
      (template) => template.question.toLowerCase() === lowerQuestion
    );
    
    if (match) return match;

    // Cari berdasarkan kata kunci
    const keywords = lowerQuestion.split(' ');
    match = chatTemplates.find((template) => {
      const templateLower = template.question.toLowerCase();
      return keywords.some((keyword) => templateLower.includes(keyword) && keyword.length > 3);
    });

    return match || null;
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
        relatedQuestions = matchedTemplate.relatedQuestions || [];
      } else {
        botResponse =
          'Maaf, untuk informasi tersebut silakan hubungi kami melalui WhatsApp agar tim Museum Pos Indonesia bisa membantu Anda lebih lanjut. 📞';
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
  const handleManualInput = (e: React.FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector('input');
    if (input && input.value.trim()) {
      handleSendMessage(input.value.trim());
      input.value = '';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-lg">
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
          <X size={20} />
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
            {chatTemplates.slice(0, 3).map((template) => (
              <button
                key={template.id}
                onClick={() => handleSendMessage(template.question)}
                className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-900 px-3 py-2 rounded-full transition-colors border border-blue-200"
              >
                {template.question}
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
            <Send size={20} />
          </button>
        </form>
        
        {/* WhatsApp Button */}
        <button
          onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
          className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2"
        >
          <span>📞</span>
          Hubungi via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ChatbotWidget;