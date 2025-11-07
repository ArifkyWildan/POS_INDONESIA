import React from 'react';

/**
 * Komponen Ikon Chatbot
 * Ini adalah SVG kustom yang dibuat agar terlihat seperti logo di foto.
 * Anda bisa simpan di file ini atau pindah ke file terpisah (misal: Icons.tsx)
 */
export const ChatbotIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    {/* Atribut SVG 'fill-rule' dan 'clip-rule' diubah menjadi
      camelCase 'fillRule' dan 'clipRule' di JSX.
    */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5,3 A3.5,3.5 0 0 0 14 6.5 A3.5,3.5 0 0 0 10.5,3 A3.5,3.5 0 0 0 7,6.5 C4.24,6.5 2,8.74 2,11.5 C2,14.26 4.24,16.5 7,16.5 H16 L20,20 V16.5 H17 C19.76,16.5 22,14.26 22,11.5 C22,8.74 19.76,6.5 17,6.5 A3.5,3.5 0 0 0 17.5,3 Z M9.5,11.5 A1.5,1.5 0 1 0 6.5,11.5 A1.5,1.5 0 1 0 9.5,11.5 Z M17.5,11.5 A1.5,1.5 0 1 0 14.5,11.5 A1.5,1.5 0 1 0 17.5,11.5 Z"
    />
  </svg>
);

/**
 * Tipe Properti untuk Tombol Chatbot
 */
interface ChatbotButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Anda bisa menambahkan props kustom di sini jika perlu
  // contoh: onChatOpen: () => void;
}

/**
 * Komponen Tombol Chatbot (Reusable)
 * Menggunakan Tailwind CSS untuk styling.
 */
const ChatbotButton: React.FC<ChatbotButtonProps> = ({ onClick, ...props }) => {
  return (
    <button
      aria-label="Buka obrolan"
      className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
      onClick={onClick}
      {...props}
    >
      <ChatbotIcon className="w-12 h-12 text-white" />
    </button>
  );
};

// Ekspor ChatbotButton sebagai default agar mudah diimpor
export default ChatbotButton;