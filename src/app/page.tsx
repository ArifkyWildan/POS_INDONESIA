"use client";

import { Hero } from '@/app/components/Hero';
import { SejarahSection } from '@/app/components/SejarahSection';
import { RebrandingSection } from '@/app/components/RebrandingSection';
import { GallerySection } from '@/app/components/GallerySection';
import { TestimonialSection } from '@/app/components/TestimonialSection';
import { Footer } from '@/app/components/Footer';

/**
 * Main Home Page (Server Component)
 * Assembles all independent section components for a seamless scrolling experience.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <SejarahSection />
      <RebrandingSection />
      <GallerySection />
      <TestimonialSection />
      <Footer />
    </>
  );
}
