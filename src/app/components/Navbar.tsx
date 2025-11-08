import { useState, useEffect } from "react";

// Simple SVG Icon Components
const HomeIcon = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const LandmarkIcon = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const RedoIcon = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const ImageIcon = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const navItems = [
  { href: "/#hero", icon: HomeIcon, label: "Home", type: "link" as const },
  { href: "/#sejarah", icon: LandmarkIcon, label: "Sejarah", type: "modal" as const },
  { href: "/#rebranding", icon: RedoIcon, label: "Rebranding", type: "link" as const },
  { href: "/#gallery", icon: ImageIcon, label: "Galeri", type: "link" as const },
  { href: "/#testimonial", icon: MessageIcon, label: "Testimoni", type: "link" as const },
];

// Collection cards data
const sejarahCollections = [
  { id: 1, title: "CHAPTER VI", subtitle: "Awal Mula Pos Indonesia", image: "/museum.jpg" },
  { id: 2, title: "GLOBAL PROJECT ATLANTIS", subtitle: "Ekspansi Dunia", image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=300&fit=crop" },
  { id: 3, title: "MARY JAMES BROWN", subtitle: "Tokoh Penting", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop" },
  { id: 4, title: "NEW REVOLUTION AT 1942", subtitle: "Era Kemerdekaan", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop" },
  { id: 5, title: "ATLANTIS PROJECT", subtitle: "Era Modern", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop" },
  { id: 6, title: "ELIZABETH WILSON", subtitle: "Pelopor Wanita", image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=400&h=300&fit=crop" },
];

const Logo = () => (
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

const Navbar = () => {
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

    if (isMenuOpen || isSejarahModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen, isSejarahModalOpen, hash]);

  const getIsActive = (item: typeof navItems[0]) => {
    const currentAnchor = hash.replace("#", "");
    const itemAnchor = item.href.replace("/#", "");
    return (
      (item.href === "/" && pathname === "/" && (hash === "" || hash === "#" || hash === "#hero")) ||
      (item.href.startsWith("/#") && currentAnchor === itemAnchor) ||
      (item.href === "/#hero" && (hash === "" || hash === "#hero"))
    );
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.type === "modal") {
      e.preventDefault();
      setIsSejarahModalOpen(!isSejarahModalOpen);
      setIsMenuOpen(false);
    }
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsSejarahModalOpen(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slideInFromLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-fade-in {
          animation: fadeInOverlay 0.3s ease-out;
        }
        .animate-fade-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* Main Navbar - Design Original dari Kode Anda */}
      <nav className="fixed top-0 inset-x-0 bg-indigo-900 text-white z-50 flex justify-between items-center py-3 px-4 shadow-2xl sm:py-3 lg:top-0 lg:bottom-0 lg:left-0 lg:w-20 lg:right-auto lg:flex-col lg:py-6 lg:justify-start lg:items-center transition-all duration-300">
        
        <div className="text-white font-bold text-lg lg:hidden">POS IND</div>
        <div className="hidden lg:block">
          <Logo />
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden z-50 p-1"
          aria-label="Buka menu"
        >
          <MenuIcon />
        </button>

        {/* Desktop Navigation - Sesuai Kode Original */}
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:space-y-4 lg:w-full">
          {navItems.map((item) => {
            const isActive = getIsActive(item) || (isSejarahModalOpen && item.type === "modal");
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
                <Icon />
                <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap hidden lg:block">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Menu - Design Original */}
      <div className={`fixed inset-0 z-[60] bg-indigo-950 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white p-2"
          aria-label="Tutup menu"
        >
          <XIcon className="w-8 h-8" />
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
                className={`flex items-center w-full px-6 py-3 text-2xl font-medium rounded-lg transition-colors duration-200 ${isActive ? "text-white bg-indigo-700/50" : "text-indigo-200 hover:text-white"}`}
              >
                <Icon />
                <span className="ml-4">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Sejarah Modal Panel - NEW DESIGN */}
      {isSejarahModalOpen && (
        <div
          className="fixed inset-0 z-[55] bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={handleClickOutside}
        >
          <div
            className="absolute left-0 lg:left-20 top-0 bottom-0 w-full lg:w-[calc(100%-5rem)] max-w-7xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl overflow-y-auto animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsSejarahModalOpen(false)}
              className="absolute top-6 right-6 z-20 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2.5 transition-all duration-200 backdrop-blur-sm"
              aria-label="Tutup panel sejarah"
            >
              <XIcon />
            </button>

            {/* Header Section dengan Design Baru */}
            <div className="relative px-8 py-12 lg:px-16 lg:py-16 border-b border-white/5">
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-baseline gap-3 mb-4">
                  <div className="w-12 h-0.5 bg-indigo-500"></div>
                  <p className="text-indigo-300 text-sm font-medium tracking-widest uppercase">Chapter</p>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white uppercase tracking-tight mb-4">
                  Museum Pos Indonesia
                </h1>
                <p className="text-slate-400 text-base lg:text-lg max-w-2xl">
                  National Historical Studies in Postal
                </p>
              </div>
            </div>

            {/* Collection Grid dengan Design seperti Foto */}
            <div className="px-8 py-10 lg:px-16 lg:py-12">
              <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-xl font-semibold text-white/90 mb-8 uppercase tracking-wider flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-indigo-500"></div>
                  Collection
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {sejarahCollections.map((collection, index) => (
                  <div
                    key={collection.id}
                    className="group relative overflow-hidden rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-500 cursor-pointer border border-white/5 hover:border-indigo-500/30 animate-fade-up"
                    style={{ animationDelay: `${0.3 + index * 0.08}s` }}
                  >
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/20 transition-all duration-500"></div>
                    </div>

                    {/* Content Overlay - Design seperti foto */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <h3 className="text-white font-bold text-base lg:text-lg uppercase tracking-wide mb-1 drop-shadow-2xl leading-tight">
                        {collection.title}
                      </h3>
                      <p className="text-slate-300 text-xs drop-shadow-lg">{collection.subtitle}</p>
                    </div>

                    {/* Border Accent on Hover */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/30 transition-all duration-500 rounded-lg"></div>
                  </div>
                ))}
              </div>

              {/* Info Footer */}
              <div className="mt-12 p-6 bg-indigo-950/20 rounded-lg border border-indigo-500/10 animate-fade-up" style={{ animationDelay: '0.85s' }}>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Jelajahi perjalanan sejarah Pos Indonesia dari masa ke masa. 
                  Setiap koleksi menceritakan kisah penting dalam perkembangan layanan pos di Indonesia 
                  dan kontribusinya terhadap kemajuan bangsa.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;