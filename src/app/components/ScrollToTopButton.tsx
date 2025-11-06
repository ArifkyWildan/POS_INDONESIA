"use client";

import React, { useState, useEffect, FC } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

// --- ScrollToTop Button ---
const ScrollToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 bg-orange-500 text-white p-3 rounded-full shadow-lg"
      onClick={scrollToTop}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
      whileHover={{ scale: 1.1, backgroundColor: '#f97316' }} // Same as hover
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      aria-label="Scroll to top"
    >
      {/* UPDATED Icon to match screenshot */}
      <MessageCircle size={24} />
    </motion.button>
  );
};

export default ScrollToTopButton;