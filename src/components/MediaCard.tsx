import { useEffect, useState, useMemo } from 'react';

const getYoutubeId = (url: string) => {
  if (!url) return '';
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : url;
};

const TabButton = ({ cat, isActive, onClick, accentColor }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '0 10px 15px 10px',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontSize: '17px',
        fontWeight: isActive ? '700' : '500',
        color: (isActive || isHovered) ? accentColor : '#aaa',
        borderBottom: `3px solid ${isActive ? accentColor : 'transparent'}`,
        marginBottom: '-1px',
        transition: 'all 0.25s ease',
        outline: 'none'
      }}
    >
      {cat.label}
    </button>
  );
};

const VideoItem = ({ item, accentColor, onVideoClick }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoId = useMemo(() => getYoutubeId(item.youtubeId), [item.youtubeId]);
  const thumbUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      onClick={() => onVideoClick(videoId)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'pointer', transition: 'all 0.3s ease', borderRadius: '15px',
        overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #f0f0f0',
        boxShadow: 'none',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '16/9', backgroundColor: '#eee', overflow: 'hidden' }}>
        <img
          src={thumbUrl}
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
          transition: 'background-color 0.3s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            width: '45px', height: '45px', backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none'
          }}>
            <div style={{
              borderTop: '7px solid transparent',
              borderBottom: '7px solid transparent',
              borderLeft: `12px solid ${accentColor}`,
              marginLeft: '4px'
            }} />
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <div style={{
          fontWeight: '700', fontSize: '17px', color: '#111',
          marginBottom: '8px', lineHeight: '1.4',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
        }}>
          {item.title}
        </div>
        <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>{item.scripture}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '12px' }}>
          <span style={{ fontSize: '14px', color: accentColor, fontWeight: '600' }}>{item.preacher}</span>
          <span style={{ fontSize: '12px', color: '#bbb' }}>{item.date}</span>
        </div>
      </div>
    </div>
  );
};

const MediaCard = ({ data, themeColor }: { data?: any, themeColor?: string }) => {
  const [activeTab, setActiveTab] = useState(data?.categories?.[0]?.id);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  if (!data || !data.categories) return null;

  const currentCategory = data.categories.find((cat: any) => cat.id === activeTab);
  const accentColor = themeColor || data.accentColor || data.theme?.main || '#4B2600';
  const globalCols = data.cols || 3;

  useEffect(() => {
    if (!selectedVideo) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedVideo]);

  const groups = useMemo(() => {
    return currentCategory?.items.reduce((acc: any, item: any) => {
      const key = item.sub || 'default';
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  }, [currentCategory]);

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 5%', fontFamily: 'Pretendard, sans-serif' }}>
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#111', margin: '0 0 12px 0' }}>
          {data.title}
        </h1>
        {data.description && (
          <p style={{ fontSize: '16px', color: '#777', margin: 0 }}>{data.description}</p>
        )}
      </header>

      <nav style={{
        display: 'flex', justifyContent: 'center', gap: '25px',
        marginBottom: '40px', borderBottom: '1px solid #eee'
      }}>
        {data.categories.map((cat: any) => (
          <TabButton
            key={cat.id}
            cat={cat}
            isActive={activeTab === cat.id}
            onClick={() => setActiveTab(cat.id)}
            accentColor={accentColor}
          />
        ))}
      </nav>

      <main>
        {Object.keys(groups || {}).map((groupKey) => (
          <section key={groupKey} style={{ marginBottom: '50px' }}>
            {groupKey !== 'default' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '3px', height: '14px', backgroundColor: accentColor, borderRadius: '2px' }} />
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#444', margin: 0 }}>{groupKey}</h3>
              </div>
            )}

            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${globalCols}, 1fr)`,
              gap: '24px'
            }}>
              {groups[groupKey].map((item: any, index: number) => (
                <VideoItem
                  key={`${activeTab}-${index}`}
                  item={item}
                  accentColor={accentColor}
                  onVideoClick={setSelectedVideo}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            height: '100dvh',
            backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 10000,
            cursor: 'zoom-out',
            padding: '16px',
            overflow: 'hidden',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%', maxWidth: '900px', aspectRatio: '16/9',
              maxHeight: '82dvh',
              backgroundColor: '#000', borderRadius: '8px', overflow: 'hidden',
              boxShadow: 'none', position: 'relative'
            }}
          >
            <iframe
              width="100%" height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              allowFullScreen
              title="Youtube Video Player"
            />
          </div>
        </div>
      )}

      {data.footer && (
        <footer style={{ textAlign: 'center', color: '#bbb', marginTop: '40px', fontSize: '13px' }}>
          {data.footer}
        </footer>
      )}
    </div>
  );
};

export default MediaCard;