import { useState } from 'react';

const Card = ({ item, theme }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        border: `1px solid ${isHovered ? theme.main : theme.border}`,
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        cursor: 'default',
        transform: (isHovered ? 'translateY(-10px)' : 'translateY(0)'),
        transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          backgroundColor: theme.light,
          color: theme.main,
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          fontWeight: '900',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'scale(1.1)' : 'none' }}>
          {item.letter}
        </div>

        <div style={{ color: theme.main, fontSize: '14px', fontWeight: '700', letterSpacing: '0.5px', opacity: 0.9 }}>
          {item.sub}
        </div>
      </div>

      <div style={{ marginTop: '5px' }}>
        <h3 style={{
          fontSize: '21px',
          fontWeight: '900',
          color: '#000',
          marginBottom: '10px' }}>
          {item.title}
        </h3>

        <p style={{
          color: '#333',
          lineHeight: '1.7',
          fontSize: '15px',
          wordBreak: 'keep-all' }}>
          {item.desc}
        </p>
      </div>

    </div>
  );
};

const SectionVision = ({ data }: { data?: any }) => {
  if (!data) return null;

  const {
    theme = {
      main: '#000',
      light: '#f9f5f0'
    },
    titleBoxMaxWidth = "1200px",
    titleBoxPadding = "0 20px",
    titleColor = '#fff',
    titleSize = '20px',
    titleWeight = data.titleWeight || '600',
    gridBorderColor = "#f0f0f0",
    gridMinMax = '280px'
  } = data;

  return (
    <div style={{ width: '100%' }}>

      <div style={{
        width: '100%',
        maxWidth: titleBoxMaxWidth,
        padding: titleBoxPadding,
        margin: '0 auto' }}>

        <div style={{
          background: `linear-gradient(135deg, ${theme.main} 0%, ${theme.main}dd 100%)`,
          padding: '50px 0px',
          borderRadius: '24px',
          marginBottom: '40px',
          textAlign: 'center',
          wordBreak: 'keep-all',
          color: titleColor,
          fontSize: titleSize,
          fontWeight: titleWeight }}>
            {data.title}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${gridMinMax}, 1fr))`, gap: '24px' }}>
          {data.items?.map((item: any) => (
            <Card
              key={item.letter}
              item={item}
              theme={{ ...theme, border: gridBorderColor }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionVision;