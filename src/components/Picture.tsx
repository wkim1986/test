const Picture = ({ data }: { data?: any }) => {
  if (!data || !data.src) return null;

  return (
    <div style={{ 
      width: '100%', 
      display: 'flex', 
      justifyContent: data.align || 'center'
    }}>
      <div style={{ 
        width: data.width || '100%', 
        maxWidth: data.maxWidth || '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ 
          width: '100%',
          height: data.height || 'auto',
          borderRadius: data.borderRadius || '8px',
          overflow: 'hidden'
        }}>
          {data.link ? (
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={data.src} 
                alt={data.alt || 'image'} 
                style={{ width: '100%', height: data.height ? '100%' : 'auto', objectFit: 'cover', display: 'block' }} 
              />
            </a>
          ) : (
            <img 
              src={data.src} 
              alt={data.alt || 'image'} 
              style={{ width: '100%', height: data.height ? '100%' : 'auto', objectFit: 'cover', display: 'block' }} 
            />
          )}
        </div>

        {data.caption && (
          <p style={{ 
            width: '100%',
            textAlign: 'center', 
            fontSize: '14px', 
            color: '#888', 
            marginTop: '10px',
            wordBreak: 'keep-all'
          }}>
            {data.caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default Picture;