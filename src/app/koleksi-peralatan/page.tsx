"use client";

import React from 'react';

// --- Konfigurasi Warna ---
const PRIMARY_BLUE = '#172b60';
const SECONDARY_BLUE = '#24459d';
const ACCENT_RED = '#883131';
const ACCENT_YELLOW = '#f0c766';

/**
 * Komponen untuk menampilkan satu item koleksi (Gerobak, Brievenbus, Bis Surat).
 */
interface CollectionItemProps {
  title: string;
  year: string;
  imageSrc: string;
  description: string | React.ReactElement;
  layout: 'left' | 'right';
  backgroundColor: string;
}

const CollectionItem: React.FC<CollectionItemProps> = ({
  title,
  year,
  imageSrc,
  description,
  layout,
  backgroundColor,
}) => {
  const isLeftLayout = layout === 'left';
  const isDarkBackground = backgroundColor === PRIMARY_BLUE;

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isLeftLayout ? 'row' : 'row-reverse',
    marginBottom: '20px',
    backgroundColor: backgroundColor,
    minHeight: '400px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const imageContainerStyle: React.CSSProperties = {
    flex: 1,
    overflow: 'hidden',
    position: 'relative',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const textContainerStyle: React.CSSProperties = {
    flex: 1,
    padding: '40px',
    color: isDarkBackground ? 'white' : PRIMARY_BLUE,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: isLeftLayout ? 'right' : 'left',
  };

  const yearStyle: React.CSSProperties = {
    fontSize: '18px',
    color: 'white',
    backgroundColor: ACCENT_RED,
    padding: '5px 15px',
    display: 'inline-block',
    fontWeight: 'bold',
    borderRadius: '4px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
    marginBottom: '10px',
  };

  const overlayContentStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '40px',
    [isLeftLayout ? 'left' : 'right']: '40px',
    zIndex: 10,
    textAlign: isLeftLayout ? 'left' : 'right',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    lineHeight: 1.6,
  };

  const OverlayContent = (
    <div style={overlayContentStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={yearStyle}>{year}</div>
    </div>
  );

  const BisSuratDescription = (
    <div>
      <p style={descriptionStyle}>
        Bis surat ini biasanya dipasang pada dinding Gedung Kantor Pos, memiliki pat standar berbentuk kotak yang terbuat dari bahan kayu, berukuran 30 cm dan dipergunakan pada jaman kolonial Belanda.
      </p>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <div style={{ 
          width: '100px', 
          height: '100px', 
          backgroundColor: PRIMARY_BLUE, 
          margin: '20px auto 10px',
          borderRadius: '4px'
        }} title="QR Code Placeholder"></div>
        <p style={{ fontSize: '12px', color: PRIMARY_BLUE, fontWeight: 'bold' }}>
          Untuk Koleksi Peralatan selanjutnya scan QR code disebelah!
        </p>
      </div>
    </div>
  );

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img 
          src={imageSrc} 
          alt={title} 
          style={imageStyle} 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/600x400/${isDarkBackground ? '444548' : 'a8a8a8'}/${isDarkBackground ? 'ffffff' : '000000'}?text=Gambar+${title}`;
          }}
        />
        {OverlayContent}
      </div>
      <div style={textContainerStyle}>
        {title === "Bis Surat Pembantu" ? BisSuratDescription : description}
      </div>
    </div>
  );
};

/**
 * Komponen Header
 */
const HeaderSection: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: ACCENT_RED,
    color: 'white',
    display: 'flex',
    padding: '50px 80px',
    minHeight: '450px',
    alignItems: 'center',
    marginBottom: '20px',
    borderRadius: '0 0 8px 8px',
  };

  const imagePlaceholderStyle: React.CSSProperties = {
    flex: 1,
    height: '350px',
    backgroundImage: `url('https://placehold.co/500x350/781b1b/ffffff?text=Timbangan+Surat+Kuno')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '8px',
    boxShadow: '0 8px 15px rgba(0,0,0,0.4)',
  };

  const textContainerStyle: React.CSSProperties = {
    flex: 1,
    paddingLeft: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '52px',
    fontWeight: 'bold',
    color: ACCENT_YELLOW,
    marginBottom: '20px',
  };

  const subTextStyle: React.CSSProperties = {
    fontSize: '16px',
    lineHeight: 1.8,
    borderLeft: '4px solid white',
    paddingLeft: '20px',
  };

  const listStyle: React.CSSProperties = {
    marginTop: '10px',
    listStyleType: 'disc',
    marginLeft: '20px',
  };

  const arrowStyle: React.CSSProperties = {
    width: '0', 
    height: '0', 
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderTop: '20px solid white',
    margin: '40px auto 0',
    cursor: 'pointer',
    opacity: 0.8,
  };

  return (
    <div style={headerStyle}>
      <div style={imagePlaceholderStyle}></div>
      <div style={textContainerStyle}>
        <div style={titleStyle}>Koleksi Peralatan</div>
        <div style={subTextStyle}>
          <p>
            Merupakan koleksi perlengkapan pos yang meliputi peralatan kantor, transportasi, hingga fasilitas layanan pos. Koleksi ini memberikan gambaran tentang evolusi teknologi dan metode kerja dalam layanan pos dari masa ke masa.
          </p>
          <ul style={listStyle}>
            <li>Timbangan Surat Kuno</li>
            <li>Gerobak Pos Kayu</li>
            <li>Kantor Pos Bergerak (Mobil/Sepeda)</li>
            <li>Alat Komunikasi Awal (Telepon/Telegraf)</li>
          </ul>
        </div>
        <div style={arrowStyle} title="Scroll ke bawah"></div>
      </div>
    </div>
  );
};

/**
 * Komponen Navbar
 */
const TopNavbar: React.FC = () => {
  const handleKembaliClick = () => {
    // Navigasi ke home page
    window.location.href = '/';
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: 'white',
    borderBottom: '1px solid #eee',
  };

  const backButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: PRIMARY_BLUE,
    fontWeight: 'bold',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    border: 'none',
    transition: 'background-color 0.2s',
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '30px',
    fontWeight: '900',
    letterSpacing: '3px',
  };

  const posStyle: React.CSSProperties = {
    color: PRIMARY_BLUE,
  };
  
  const indStyle: React.CSSProperties = {
    color: ACCENT_RED,
  };

  return (
    <div style={navStyle}>
      <button 
        style={backButtonStyle}
        onClick={handleKembaliClick}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        title="Kembali ke halaman Home"
      >
        <span style={{ marginRight: '8px', fontSize: '20px' }}>←</span>
        Kembali
      </button>

      <div style={logoStyle}>
        <span style={posStyle}>POS</span>
        <span style={indStyle}>IND</span>
      </div>

      <div style={{ width: '100px' }}></div> 
    </div>
  );
};

/**
 * Halaman Utama Koleksi Peralatan
 */
const CollectionsPage: React.FC = () => {
  const collectionData = [
    {
      title: "Gerobak Angkut",
      year: "1870",
      imageSrc: "/peralatan3.webp",
      description: "Merupakan alat angkut pos yang dipergunakan untuk membawa kiriman-kiriman pos seperti surat dan paket. Gerobak angkut ini dipergunakan di kantor Pos Maluku pada masa kolonial Belanda tahun 1870.",
      layout: 'left' as const,
      backgroundColor: ACCENT_YELLOW,
    },
    {
      title: "Brievenbus",
      year: "1890",
      imageSrc: "peralatan4.webp",
      description: (
        <>
          Brievenbus merupakan kotak surat yang sudah ada sejak tahun 1818 di Batavia (sekarang Jakarta). Kotak surat ini terbuat dari besi tuang baja di produksi di kota Liffi, Belanda. Kotak ini dapat menampung surat dengan berat sekitar 400 kg. Dipergunakan untuk kotak surat di jalan-jalan yang strategis. Kotak ini akan dikosongkan diproses dan dikirim 14/19/20.
        </>
      ),
      layout: 'right' as const,
      backgroundColor: PRIMARY_BLUE,
    },
    {
      title: "Bis Surat Pembantu",
      year: "1920", 
      imageSrc: "/peralatan1.webp",
      description: "",
      layout: 'left' as const,
      backgroundColor: ACCENT_YELLOW,
    },
  ];

  const mainContainerStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  };

  return (
    <div style={mainContainerStyle}>
      <TopNavbar />
      <div style={{ padding: '20px' }}>
        <HeaderSection />
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '20px' }}>
          {collectionData.map((item, index) => (
            <CollectionItem 
              key={index}
              title={item.title}
              year={item.year}
              imageSrc={item.imageSrc}
              description={item.description}
              layout={item.layout}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;