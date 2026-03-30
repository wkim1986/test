const DeptIntro = ({ data }: { data?: any }) => {
  if (!data) return null;

  const theme = data.theme;
  const accentColor = theme?.main || '#222'; 

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '1000px', 
      textAlign: 'center', 
      padding: '0 20px', 
      margin: '0 auto' 
    }}>
      {data.age && (
        <div style={{ 
          display: 'inline-block', 
          padding: '4px 12px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '6px', 
          fontSize: '13px', 
          fontWeight: '600', 
          color: '#888', 
          marginBottom: '16px', 
          border: '1px solid #eee' 
        }}>
          {data.age}
        </div>
      )}
      
      <h2 style={{ 
        fontSize: '32px', 
        fontWeight: '800', 
        marginBottom: '20px', 
        color: accentColor, 
        letterSpacing: '-1px',
      }}>
        {data.title}
      </h2>
      
      <p style={{ 
        fontSize: '17px', 
        lineHeight: '1.7', 
        color: '#555', 
        wordBreak: 'keep-all', 
        whiteSpace: 'pre-line',
        maxWidth: '900px', 
        margin: '0 auto'
      }}>
        {data.description}
      </p>
    </div>
  );
};

export default DeptIntro;