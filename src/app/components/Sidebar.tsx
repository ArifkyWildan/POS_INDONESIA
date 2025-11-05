"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Landmark, Redo, Image, MessageSquare } from 'lucide-react';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/#sejarah', icon: Landmark, label: 'Sejarah' },
  { href: '/#rebranding', icon: Redo, label: 'Rebranding' },
  { href: '/#galeri', icon: Image, label: 'Galeri' },
  { href: '/#testimoni', icon: MessageSquare, label: 'Testimoni' },
];

/**
 * Fixed vertical sidebar navigation with icon-based links.
 * Uses indigo-900 to match the reference image's dark blue aesthetic.
 */
export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-screen w-16 lg:w-20 bg-indigo-900 flex flex-col items-center py-6 shadow-2xl z-50">
      {/* Top Logo Placeholder */}
      <div className="text-white font-heading text-xl mb-12 transform rotate-90 hidden lg:block">
        POS IND
      </div>
      <div className="w-full flex flex-col space-y-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.includes(item.href.replace('/#', '')));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.label}
              className={`group relative w-full flex justify-center py-3 transition-colors duration-300
                ${isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-indigo-300 hover:bg-indigo-700 hover:text-white'
                }
              `}
            >
              <Icon className="w-6 h-6" />
              {/* Tooltip on hover for mobile/small screens */}
              <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap hidden sm:block">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};