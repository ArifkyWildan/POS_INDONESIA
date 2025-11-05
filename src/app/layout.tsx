import './globals.css'; // Assuming Tailwind CSS is imported here
import { ReactNode } from 'react';
import { Inter, Oswald } from 'next/font/google';
import { Sidebar } from './components/Sidebar';

// Configure fonts for use with Tailwind CSS variables
const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata = {
  title: 'Museum Pos Indonesia - Official Site',
  description: 'Situs resmi Museum Pos Indonesia di Bandung. Jelajahi sejarah pos dan filateli Indonesia.',
};

/**
 * Root Layout Component (Server Component)
 * Sets up the main page structure: fixed sidebar and scrollable content area.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${oswald.variable} scroll-smooth`}>
      <body className="bg-white text-gray-900 antialiased font-body">
        <div className="flex min-h-screen">
          {/* Fixed Sidebar is always present */}
          <Sidebar />

          {/* Main content area. The ml-16/ml-20 compensates for the fixed sidebar width. */}
          <main className="flex-1 ml-16 lg:ml-20 relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}