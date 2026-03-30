const ActivityList = ({ data }: { data?: any }) => {
  if (!data?.items || data.items.length === 0) return null;

  const theme = data.theme; 
  const accentColor = theme?.main || '#000'; 
  const isComplexType = typeof data.items[0] === 'object';

  return (
    <div style={{ width: '100%', padding: '0 10px', fontFamily: 'Pretendard, sans-serif' }}>
      {data.title && (
        <h3 style={{ 
          fontSize: '17px', 
          fontWeight: '700', 
          marginBottom: '15px', 
          color: '#333', 
          borderLeft: `4px solid ${accentColor}`, 
          paddingLeft: '10px' 
        }}>
          {data.title}
        </h3>
      )}
      
      {/* 상단 선 두께 2px, 색상 #333으로 통일 */}
      <div style={{ borderTop: '2px solid #333', backgroundColor: '#fff' }}>
        {data.items.map((item: any, idx: number) => (
          <div key={idx} style={{ 
            padding: '15px 10px', 
            borderBottom: '1px solid #f2f2f2',
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: '12px' 
          }}>
            {isComplexType ? (
              <>
                <div style={{ 
                  fontSize: '18px', 
                  fontWeight: '900', 
                  color: accentColor, 
                  minWidth: '25px', // 숫자 정렬을 위해 너비 고정
                  lineHeight: '1.2'
                }}>
                  {item.letter}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#333', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ 
                    fontSize: '13px', 
                    color: '#666', 
                    lineHeight: '1.5',
                    whiteSpace: 'pre-line' // \n 줄바꿈 적용
                  }}>
                    {item.content}
                  </div>
                </div>
              </>
            ) : (
              <div style={{ fontSize: '14px', color: '#444' }}>
                <span style={{ color: accentColor, marginRight: '8px' }}>•</span>
                {item}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;