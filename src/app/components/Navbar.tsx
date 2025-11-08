"use client";

import {
  Home,
  Landmark,
  Redo,
  Image,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/#hero", icon: Home, label: "Home", type: "link" as const },
  { href: "/#sejarah", icon: Landmark, label: "Sejarah", type: "modal" as const },
  { href: "/#rebranding", icon: Redo, label: "Rebranding", type: "link" as const },
  { href: "/#gallery", icon: Image, label: "Galeri", type: "link" as const },
  { href: "/#testimonial", icon: MessageSquare, label: "Testimoni", type: "link" as const },
];

const Logo: React.FC = () => (
  <div className="flex flex-col items-center mb-6 lg:mb-12">
    <img
      src="/logoposind.png"
      alt="POS IND Logo"
      width={60}
      height={60}
      className="object-contain rounded-lg shadow-md w-[60px] h-[60px]"
      onError={(e) => {
        (e.target as HTMLImageElement).src =
          "https://placehold.co/60x60/312e81/ffffff?text=LOGO";
      }}
    />
  </div>
);

const Navbar: React.FC = () => {
  const [pathname, setPathname] = useState("");
  const [hash, setHash] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSejarahModalOpen, setIsSejarahModalOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
      setHash(window.location.hash);
    };
    handleLocationChange();
    window.addEventListener("hashchange", handleLocationChange);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen, hash]);

  const getIsActive = (item: (typeof navItems)[0]) => {
    const currentAnchor = hash.replace("#", "");
    const itemAnchor = item.href.replace("/#", "");
    return (
      (item.href === "/" &&
        pathname === "/" &&
        (hash === "" || hash === "#" || hash === "#hero")) ||
      (item.href.startsWith("/#") && currentAnchor === itemAnchor) ||
      (item.href === "/#hero" && (hash === "" || hash === "#hero"))
    );
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[0]
  ) => {
    if (item.type === "modal") {
      e.preventDefault();
      setIsSejarahModalOpen(true);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className="
          fixed top-0 inset-x-0 
          bg-indigo-900 text-white z-50 
          flex justify-between items-center py-3 px-4
          shadow-2xl
          sm:py-3
          lg:top-0 lg:bottom-0 lg:left-0 lg:w-20 lg:right-auto
          lg:flex-col lg:py-6 lg:justify-start lg:items-center
          transition-all duration-300
        "
      >
        <div className="text-white font-bold text-lg lg:hidden">POS IND</div>
        <div className="hidden lg:block">
          <Logo />
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden z-50 p-1"
          aria-label="Buka menu"
        >
          <Menu className="w-7 h-7" />
        </button>

        <div
          className="
            hidden lg:flex lg:flex-col lg:items-center 
            lg:space-y-4 lg:w-full
          "
        >
          {navItems.map((item) => {
            const isActive = getIsActive(item);
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.type === "link" ? item.href : "#"}
                onClick={(e) => handleNavClick(e, item)}
                title={item.label}
                className={`
                  group relative flex justify-center items-center
                  w-12 h-12 lg:w-full lg:py-3 
                  transition-all duration-300 rounded-xl cursor-pointer
                  ${
                    isActive
                      ? "text-white bg-indigo-700/40"
                      : "text-indigo-300 hover:text-white hover:bg-indigo-700/20"
                  }
                `}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                <span
                  className="
                    absolute left-full ml-3 top-1/2 -translate-y-1/2
                    px-3 py-1 bg-gray-800 text-white text-xs rounded-lg
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 pointer-events-none 
                    z-50 whitespace-nowrap hidden lg:block
                  "
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      <div
        className={`
          fixed inset-0 z-[60] bg-indigo-950 
          flex flex-col items-center justify-center
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white p-2"
          aria-label="Tutup menu"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item) => {
            const isActive = getIsActive(item);
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.type === "link" ? item.href : "#"}
                onClick={(e) => {
                  handleNavClick(e, item);
                  if (item.type === "link") {
                    setIsMenuOpen(false);
                  }
                }}
                title={item.label}
                className={`
                  flex items-center w-full px-6 py-3 
                  text-2xl font-medium rounded-lg
                  transition-colors duration-200
                  ${
                    isActive
                      ? "text-white bg-indigo-700/50"
                      : "text-indigo-200 hover:text-white"
                  }
                `}
              >
                <Icon className="w-7 h-7 mr-4" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default Navbar;
