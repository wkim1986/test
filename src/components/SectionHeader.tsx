const SectionHeader = ({ data }: { data?: any }) => {
  if (!data) return null;

  const color = data?.theme?.main || '#000';
  
  const {
    title,
    subtitle,
    titleFontSize = '32px',
    titleFontWeight = '1000',
    titleColor = color,
    titleMargin = '15px',
    subtitleFontSize = '24px',
    subtitleFontWeight = 400,
    subtitleColor = '#888',
    subtitleMargin = '15px',
    lineWidth = '50px',
    lineHeight = '3px',
    align = 'center'
  } = data;

  return (
    <div style={{ textAlign: align, width: '100%' }}>
      
      <h2 style={{ 
        fontSize: titleFontSize, 
        fontWeight: titleFontWeight, 
        color: titleColor,
        marginBottom: titleMargin,
        wordBreak: 'keep-all',
        overflow: 'hidden',
        textOverflow: 'ellipsis' }}>
        {title}
      </h2>

      {subtitle && (
        <p style={{ 
          fontSize: subtitleFontSize,
          fontWeight: subtitleFontWeight,
          color: subtitleColor,
          marginBottom: subtitleMargin,
          wordBreak: 'keep-all' }}>
          {subtitle}
        </p>
      )}

      <div style={{ 
        width: lineWidth, 
        height: lineHeight, 
        backgroundColor: color,
        margin: '15px auto',
        borderRadius: '2px'
      }} />
    </div>
  );
};

export default SectionHeader;