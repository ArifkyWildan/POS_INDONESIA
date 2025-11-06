"use client";

import { Home, Landmark, Redo, Image, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/#sejarah", icon: Landmark, label: "Sejarah" },
  { href: "/#rebranding", icon: Redo, label: "Rebranding" },
  { href: "/#galeri", icon: Image, label: "Galeri" },
  { href: "/#testimoni", icon: MessageSquare, label: "Testimoni" },
];

/**
 * Logo vertikal "POS IND" sesuai desain referensi.
 */
const Logo: React.FC = () => (
  <div className="flex flex-col items-center text-white font-semibold tracking-widest mb-12">
    {/* "POS" */}
    <span className="leading-tight">P</span>
    <span className="leading-tight">O</span>
    <span className="leading-tight">S</span>

    {/* Garis pemisah */}
    <div className="w-6 h-px bg-indigo-400 my-2" />

    {/* "IND" */}
    <span className="leading-tight">I</span>
    <span className="leading-tight">N</span>
    <span className="leading-tight">D</span>
  </div>
);

/**
 * Sidebar navigasi vertikal fix di kiri layar.
 * Warna: bg-indigo-900 (biru tua gelap)
 * Mengikuti hash (#) di URL untuk status aktif.
 */
export const Sidebar: React.FC = () => {
  const [pathname, setPathname] = useState("");
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
      setHash(window.location.hash);
    };

    handleLocationChange();
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  return (
    <nav className="fixed left-0 top-0 h-screen w-16 lg:w-20 bg-indigo-900 flex flex-col items-center py-6 shadow-2xl z-50">
      {/* Logo */}
      <Logo />

      <div className="w-full flex flex-col space-y-4">
        {navItems.map((item) => {
          const currentAnchor = hash.replace("#", "");
          const itemAnchor = item.href.replace("/#", "");
          const isActive =
            (item.href === "/" &&
              pathname === "/" &&
              (hash === "" || hash === "#")) ||
            (item.href.startsWith("/#") && currentAnchor === itemAnchor);

          const Icon = item.icon;

          return (
            <a
              key={item.href}
              href={item.href}
              title={item.label}
              className={`group relative w-full flex justify-center py-3 transition-colors duration-300 ${
                isActive
                  ? "text-white"
                  : "text-indigo-300 hover:text-white"
              }`}
            >
              <Icon className="w-6 h-6" />
              {/* Tooltip */}
              <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap hidden sm:block">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
