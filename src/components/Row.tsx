const Row = ({ data }: { data?: any }) => {
  if (!data || !data.children) return null;

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      gap: data.gap || '30px', // 설계도의 gap 값을 사용, 없으면 30px
      width: '100%', 
      maxWidth: '1100px', 
      margin: '0 auto', 
      padding: '0 20px',
      alignItems: 'flex-start'
    }}>
      {data.children.map((child: any, idx: number) => (
        <div key={idx} style={{ flex: 1, minWidth: '300px' }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Row;