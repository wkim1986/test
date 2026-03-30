import { useEffect, useRef, useState } from 'react';

const PictureItem = ({ item, onSelect }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        cursor: 'pointer', transition: 'all 0.3s ease', borderRadius: '12px',
        overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #f0f0f0',
        boxShadow: 'none',
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const suppressCloseRef = useRef(false);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  if (!actualData || !actualData.categories) return null;

  const currentCategory = actualData.categories.find((cat: any) => cat.id === activeTab);
  const displayItems = currentCategory?.items || [];
  const gridCols = actualData.cols || 4;

  useEffect(() => {
    // 탭이 바뀌면 확대 상태를 초기화합니다.
    setSelectedIndex(null);
  }, [activeTab]);

  useEffect(() => {
    if (selectedIndex == null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedIndex]);

  const goPrev = () => {
    if (selectedIndex == null) return;
    const len = displayItems.length;
    if (len <= 0) return;
    setSelectedIndex((prev) => (prev == null ? null : (prev - 1 + len) % len));
  };

  const goNext = () => {
    if (selectedIndex == null) return;
    const len = displayItems.length;
    if (len <= 0) return;
    setSelectedIndex((prev) => (prev == null ? null : (prev + 1) % len));
  };

  useEffect(() => {
    if (selectedIndex == null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setSelectedIndex(null);
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
        return;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, activeTab, displayItems.length]);

  const onOverlayPointerDown = (e: import('react').PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return; // 우클릭 등 무시
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const onOverlayPointerUp = (e: import('react').PointerEvent<HTMLDivElement>) => {
    const start = pointerStartRef.current;
    pointerStartRef.current = null;
    if (!start) return;

    const dx = e.clientX - start.x; // -: left, +: right
    const dy = e.clientY - start.y;

    const SWIPE_THRESHOLD = 45;
    const VERTICAL_TOLERANCE = 90;

    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    if (Math.abs(dy) > VERTICAL_TOLERANCE && Math.abs(dy) > Math.abs(dx)) return;

    // 스와이프 후에는 click 이벤트로 모달이 닫히는 것을 방지
    suppressCloseRef.current = true;
    window.setTimeout(() => {
      suppressCloseRef.current = false;
    }, 220);

    if (dx < 0) goNext();
    else goPrev();
  };

  const selectedItem = selectedIndex != null ? displayItems[selectedIndex] : null;

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
            onSelect={() => setSelectedIndex(index)}
          />
        ))}
      </main>

      {selectedItem && selectedIndex != null && (
        <div 
          onClick={() => {
            if (suppressCloseRef.current) return;
            setSelectedIndex(null);
          }}
          onPointerDown={onOverlayPointerDown}
          onPointerUp={onOverlayPointerUp}
          style={{
            position: 'fixed',
            inset: 0,
            height: '100dvh',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            cursor: 'zoom-out',
            padding: 0,
            overflow: 'hidden',
            touchAction: 'none',
          }}
        >
          {/* 좌/우 전환 버튼 (모바일 터치 외에도 클릭 가능) */}
          <button
            type="button"
            aria-label="이전 사진"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            style={{
              position: 'absolute',
              left: 18,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(0,0,0,0.35)',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="다음 사진"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            style={{
              position: 'absolute',
              right: 18,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(0,0,0,0.35)',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            ›
          </button>
          <img 
            src={selectedItem.url} 
            alt="확대" 
            style={{
              maxWidth: '95vw',
              maxHeight: '82dvh',
              borderRadius: '4px',
              boxShadow: 'none',
              objectFit: 'contain',
              display: 'block',
            }} 
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