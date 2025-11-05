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
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Sejarah Pos Indonesia Section */}
      <SejarahSection />

      {/* 3. Rebranding Logo Pos Indonesia Section */}
      <RebrandingSection />

      {/* 4. Gallery / Event Showcase Cards Section */}
      <GallerySection />

      {/* 5. Testimonial Section */}
      <TestimonialSection />

      {/* 6. Footer (Operational Hours and Map) */}
      <Footer />
    </>
  );
}