"use client";

import React, { useState, FC } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Home, 
  Landmark, 
  BookOpen, 
  Images, 
  MapPin, 
  Menu, 
  X 
} from 'lucide-react';
import { NavbarProps, NavItem } from '../types'; // Impor tipe dari file types.ts

// --- 1. Navbar Component ---
const Navbar: FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'sejarah', icon: Landmark, label: 'Sejarah' },
    { id: 'rebranding', icon: BookOpen, label: 'Logo' },
    { id: 'gallery', icon: Images, label: 'Gallery' },
    { id: 'testimonial', icon: MessageCircle, label: 'Testimoni' },
    { id: 'jadwal', icon: MapPin, label: 'Lokasi' },
  ];

  const NavContent: FC = () => (
    <nav className="flex flex-col items-center justify-between h-full py-8">
      {/* Top Logo */}
      <div
        className="text-white font-bold text-2xl [writing-mode:vertical-rl] tracking-wider cursor-pointer"
        onClick={() => onNavigate('hero')}
      >
        POS IND
      </div>

      {/* Middle Navigation Icons */}
      <div className="flex flex-col items-center space-y-8">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              setIsMobileMenuOpen(false);
            }}
            className={`relative flex items-center justify-center p-3 rounded-lg transition-colors duration-200 ${
              activeSection === item.id
                ? 'bg-white text-[#223E8A]'
                : 'text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={item.label}
          >
            <item.icon size={24} />
          </motion.button>
        ))}
      </div>

      {/* Bottom Spacer */}
      <div />
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed top-0 left-0 z-50 h-screen w-24 bg-[#223E8A] shadow-lg hidden md:block">
        <NavContent />
      </aside>

      {/* Mobile Header & Menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#223E8A] shadow-lg flex items-center justify-between p-4">
        <h1 className="text-white font-bold text-xl">MUSEUM POS</h1>
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white z-50"
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="md:hidden fixed inset-0 z-30 bg-[#223E8A] pt-20"
        >
          <NavContent />
        </motion.div>
      )}
    </>
  );
};

export default Navbar;