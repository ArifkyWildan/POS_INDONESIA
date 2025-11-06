import { RefObject, FC } from 'react';
import { LucideIcon } from 'lucide-react';

// --- Type Definitions ---
export interface SectionProps {
  sectionRef: RefObject<HTMLElement>;
}

export interface NavItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

export interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export interface Logo {
  src: string;
  alt: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
}

export interface ScheduleItem {
  day: string;
  time: string;
}
