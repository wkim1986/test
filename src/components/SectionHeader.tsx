import React from 'react';

const SectionHeader = ({ data }: { data?: any }) => {
  if (!data) return null;

  const theme = data.theme;
  const systemAccent = theme?.main || data.accentColor || '#000';
  
  const {
    title,
    subtitle,
    lineWidth = '50px',
    lineHeight = '3px',
    align = 'center',
    linePosition = 'bottom'
  } = data;
  
  const line = (
    <div style={{ 
      width: lineWidth, 
      height: lineHeight, 
      backgroundColor: systemAccent,
      margin: align === 'center' ? '15px auto' : '15px 0',
      borderRadius: '2px'
    }} />
  );

  return (
    <div style={{ 
      textAlign: align as any, 
      width: '100%'
    }}>
      {linePosition === 'top' && line}
      
      <h2 style={{ 
        fontSize: '32px', 
        fontWeight: '850', 
        color: systemAccent,
        margin: '0',
        letterSpacing: '-1px'
      }}>
        {title}
      </h2>

      {linePosition === 'middle' && line}

      {subtitle && (
        <p style={{ 
          color: '#888', 
          fontSize: '17px', 
          margin: '12px 0 0 0',
          lineHeight: '1.5',
          wordBreak: 'keep-all'
        }}>
          {subtitle}
        </p>
      )}

      {linePosition === 'bottom' && line}
    </div>
  );
};

export default SectionHeader;