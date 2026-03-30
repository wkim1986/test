import React, { useState } from 'react';

const PictureItem = ({ item, onImageClick, accentColor }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onClick={() => onImageClick(item.url)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        cursor: 'pointer', transition: 'all 0.3s ease', borderRadius: '12px',
        overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #f0f0f0',
        boxShadow: isHovered ? '0 12px 24px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
        <img 
          src={item.url} 
          alt={item.title} 
          style={{ 
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)'
          }} 
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: isHovered ? 'rgba(0,0,0,0.2)' : 'transparent',
          transition: 'background-color 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'
        }}>
          <span style={{ 
            fontSize: '24px', 
            opacity: isHovered ? 1 : 0, 
            transform: isHovered ? 'scale(1)' : 'scale(0.8)',
            transition: 'all 0.3s'
          }}>🔍</span>
        </div>
      </div>

      <div style={{ padding: '12px 15px' }}>
        <div style={{ 
          fontWeight: '600', fontSize: '15px', color: '#333',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
        }}>
          {item.title}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
          {item.date && (
            <span style={{ fontSize: '12px', color: '#bbb' }}>{item.date}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ cat, isActive, onClick, accentColor }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '0 10px 15px 10px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer',
        fontSize: '17px', fontWeight: isActive ? '700' : '500',
        color: (isActive || isHovered) ? accentColor : '#aaa',
        borderBottom: `3px solid ${isActive ? accentColor : 'transparent'}`,
        marginBottom: '-1px', transition: 'all 0.25s ease', outline: 'none'
      }}
    >
      {cat.label}
    </button>
  );
};

const PictureCard = ({ data, themeColor }: { data?: any, themeColor?: string }) => {
  const actualData = data?.galleryData || data;

  const accentColor = 
    themeColor || 
    actualData?.accentColor || 
    data?.accentColor || 
    data?.theme?.main || 
    actualData?.theme?.main || 
    '#3498db';

  const [activeTab, setActiveTab] = useState(actualData?.categories?.[0]?.id);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  if (!actualData || !actualData.categories) return null;

  const currentCategory = actualData.categories.find((cat: any) => cat.id === activeTab);
  const displayItems = currentCategory?.items || [];
  const gridCols = actualData.cols || 4;

  return (
    <div style={{ 
      width: '100%', maxWidth: '1200px', margin: '0 auto', 
      padding: '0 5%', fontFamily: 'Pretendard, sans-serif'
    }}>
      <header style={{ marginBottom: '40px', textAlign: 'center' }}> 
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#111', margin: '0 0 12px 0' }}>
          {actualData.title}
        </h1>
        {actualData.description && (
          <p style={{ fontSize: '16px', color: '#777', margin: 0 }}>{actualData.description}</p>
        )}
      </header>

      <nav style={{ 
        display: 'flex', justifyContent: 'center', gap: '25px', 
        marginBottom: '40px', borderBottom: '1px solid #eee' 
      }}>
        {actualData.categories.map((cat: any) => (
          <TabButton
            key={cat.id}
            cat={cat}
            isActive={activeTab === cat.id}
            onClick={() => setActiveTab(cat.id)}
            accentColor={accentColor}
          />
        ))}
      </nav>

      <main style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${gridCols}, 1fr)`, 
        gap: '20px' 
      }}>
        {displayItems.map((item: any, index: number) => (
          <PictureItem 
            key={`${activeTab}-${index}`}
            item={item}
            onImageClick={setSelectedImg}
            accentColor={accentColor}
          />
        ))}
      </main>

      {selectedImg && (
        <div 
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 10000, cursor: 'zoom-out', padding: '20px'
          }}
        >
          <img 
            src={selectedImg} 
            alt="확대" 
            style={{ maxWidth: '95%', maxHeight: '95%', borderRadius: '4px', boxShadow: '0 0 40px rgba(0,0,0,0.5)' }} 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {actualData.footer && (
        <footer style={{ textAlign: 'center', color: '#bbb', marginTop: '40px', fontSize: '13px' }}>
          {actualData.footer}
        </footer>
      )}
    </div>
  );
};

export default PictureCard;