const TimeTable = ({ data }: { data?: any }) => {
  if (!data?.times || data.times.length === 0) return null;

  const theme = data.theme;
  const accentColor = theme?.main || '#000';

  return (
    <div style={{ width: '100%', fontFamily: 'Pretendard, sans-serif' }}>
      <div style={{ width: '100%', padding: '0 10px' }}>
        <h3 style={{
          fontSize: '17px',
          fontWeight: '700',
          marginBottom: '15px',
          color: '#333',
          borderLeft: `4px solid ${accentColor}`,
          paddingLeft: '10px'
        }}>
          {data.title || '예배 시간'}
        </h3>

        <div style={{ borderTop: '2px solid #333', backgroundColor: '#fff' }}>
          {data.times.map((item: any, idx: number) => (
            <TableRow key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ item }: any) => (
  <div style={{
    display: 'flex',
    padding: '15px 10px',
    borderBottom: '1px solid #f2f2f2',
    fontSize: '14px',
    alignItems: 'center'
  }}>
    <div style={{
      flex: 1,
      fontWeight: '700',
      color: '#333'
    }}>
      {item.label}
    </div>

    <div style={{
      flex: 1.5,
      color: '#666',
      textAlign: 'center'
    }}>
      {item.time}
    </div>

    <div style={{
      flex: 1,
      color: '#888',
      textAlign: 'right'
    }}>
      {item.location}
    </div>
  </div>
);

export default TimeTable;