import { useState, useEffect } from 'react';

const VisionCard = ({ item, theme, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 120);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        border: `1px solid ${isHovered ? theme.accentColor : '#f0f0f0'}`,
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        cursor: 'default',
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? (isHovered ? 'translateY(-10px)' : 'translateY(0)') 
          : 'translateY(20px)',
        transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)', 
        boxShadow: 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          backgroundColor: theme.lightBg, 
          color: theme.accentColor,
          width: '42px', height: '42px', borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '20px', fontWeight: '900',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'scale(1.1)' : 'none'
        }}>
          {item.letter}
        </div>
        <div style={{ 
          color: theme.accentColor, 
          fontSize: '12px', 
          fontWeight: '700', 
          letterSpacing: '0.5px',
          opacity: 0.5
        }}>
          {item.sub}
        </div>
      </div>

      <div style={{ marginTop: '5px' }}>
        <h3 style={{ 
          fontSize: '19px', 
          fontWeight: '800', 
          color: '#111', 
          marginBottom: '10px',
        }}>
          {item.title}
        </h3>
        <p style={{ 
          color: '#666', 
          lineHeight: '1.7', 
          fontSize: '15px', 
          margin: 0, 
          wordBreak: 'keep-all' 
        }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
};

const Vision = ({ data, themeColor }: { data?: any, themeColor?: string }) => {
  if (!data) return null;

  const accentColor = themeColor || data.theme?.main || '#000';
  const lightBg = data.theme?.light || '#f9f5f0';

  return (
    <div style={{ width: '100%' }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px', 
        fontFamily: 'Pretendard, sans-serif'
      }}>
        <div style={{ 
          padding: '50px 40px', 
          background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)`,
          color: '#fff', 
          borderRadius: '24px', 
          textAlign: 'center', 
          marginBottom: '40px' 
        }}>
          <p style={{ 
            fontSize: '20px', 
            lineHeight: '1.7', 
            margin: 0, 
            fontWeight: '600', 
            wordBreak: 'keep-all',
            opacity: 0.95 
          }}>
            {data.banner}
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px' 
        }}>
          {data.items?.map((item: any, index: number) => (
            <VisionCard 
              key={item.letter} 
              item={item} 
              theme={{ accentColor, lightBg }} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;