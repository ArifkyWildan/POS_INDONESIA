import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

// ============================================
// 📌 INTERFACE & TYPES
// ============================================
interface SejarahModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CollectionItem {
  id: number;
  title: string;
  subtitle?: string;
  slug: string;
  imagePath: string;
  hoverStyle: 'solid' | 'gradient';
}

// ============================================
// 📊 DATA KOLEKSI - EDIT DI SINI!
// 📁 Path gambar relatif ke folder: public/images/collections/
// ============================================
const collectionData: CollectionItem[] = [
  {
    id: 1,
    title: 'CHAPTER VI',
    slug: 'chapter-vi',
    imagePath: '/images/collections/chapter-vi.jpg', // 🖼️ File: public/images/collections/chapter-vi.jpg
    hoverStyle: 'solid', // 🎨 Style: 'solid' atau 'gradient'
  },
  {
    id: 2,
    title: 'GLOBAL PROJECT',
    subtitle: 'ATLANTIS',
    slug: 'global-project-atlantis',
    imagePath: '/images/collections/global-project.jpg', // 🖼️ File: public/images/collections/global-project.jpg
    hoverStyle: 'gradient', // 🎨 Style: 'solid' atau 'gradient'
  },
  {
    id: 3,
    title: 'SYDNEY ELLIOT',
    slug: 'sydney-elliot',
    imagePath: '/images/collections/sydney-elliot.jpg', // 🖼️ File: public/images/collections/sydney-elliot.jpg
    hoverStyle: 'solid',
  },
  {
    id: 4,
    title: 'MARY JAMES',
    subtitle: 'BROWN',
    slug: 'mary-james-brown',
    imagePath: '/images/collections/mary-james.jpg', // 🖼️ File: public/images/collections/mary-james.jpg
    hoverStyle: 'gradient',
  },
  {
    id: 5,
    title: 'ELIZABETH',
    subtitle: 'WILSON',
    slug: 'elizabeth-wilson',
    imagePath: '/images/collections/elizabeth.jpg', // 🖼️ File: public/images/collections/elizabeth.jpg
    hoverStyle: 'solid',
  },
  {
    id: 6,
    title: 'NEW PROJECT',
    subtitle: 'ATLANTIS',
    slug: 'new-project-atlantis',
    imagePath: '/images/collections/new-project.jpg', // 🖼️ File: public/images/collections/new-project.jpg
    hoverStyle: 'gradient',
  },
];

// ============================================
// 🎬 ANIMATION VARIANTS
// ============================================

// Overlay fade in/out
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

// Modal slide up/down
const modalVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: { 
    opacity: 0, 
    y: 50,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

// Header text animation
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Grid container animation
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Individual grid item animation
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};