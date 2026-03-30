import { useState } from 'react';

const ProfileItem = ({ item, accentColor }: any) => (
  <div style={{
    display: 'flex', gap: '35px', padding: '30px', backgroundColor: '#fff',
    alignItems: 'center', borderRadius: '16px', border: '1px solid #f0f0f0',
    boxShadow: 'none',
    transition: 'transform 0.3s ease',
  }}>
    {item.image && (
      <div style={{ flexShrink: 0, width: '180px', height: '220px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    )}
    <div style={{ flex: 1, textAlign: 'left' }}>
      <div style={{ fontSize: '14px', fontWeight: '700', color: accentColor, marginBottom: '6px' }}>
        {item.role}
      </div>
      <div style={{ fontSize: '24px', fontWeight: '800', color: '#111', marginBottom: '14px' }}>
        {item.name}
      </div>
      <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', margin: 0, whiteSpace: 'pre-wrap' }}>
        {item.desc}
      </p>
    </div>
  </div>
);

const DefaultItem = ({ item, accentColor }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#fff', padding: '20px', borderRadius: '12px',
        border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', gap: '6px',
        boxShadow: 'none',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.3s ease', textAlign: 'center'
      }}
    >
      <div style={{ fontSize: '12px', fontWeight: '700', color: accentColor }}>
        {item.role}
      </div>
      <div style={{ fontSize: '17px', fontWeight: '700', color: '#222' }}>
        {item.name}
      </div>
      {item.sub && <div style={{ fontSize: '12px', color: '#bbb' }}>{item.sub}</div>}
    </div>
  );
};

const TabButton = ({ cat, isActive, onClick, accentColor }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '0 10px 15px 10px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer',
        fontSize: '17px', fontWeight: isActive ? '700' : '500',
        color: (isActive || isHovered) ? accentColor : '#aaa',
        borderBottom: `3px solid ${isActive ? accentColor : 'transparent'}`,
        marginBottom: '-1px', transition: 'all 0.25s ease', outline: 'none'
      }}
    >
      {cat.label}
    </button>
  );
};

const StaffCard = ({ data, themeColor }: { data?: any, themeColor?: string }) => {
  const actualData = data?.staffData || data;

  const accentColor =
    themeColor ||
    actualData?.accentColor ||
    data?.accentColor ||
    data?.theme?.main ||
    actualData?.theme?.main ||
    '#7a0039';

  const [activeTab, setActiveTab] = useState(actualData?.categories?.[0]?.id);

  if (!actualData || !actualData.categories) return null;

  const currentCategory = actualData.categories.find((cat: any) => cat.id === activeTab);
  const globalCols = actualData.cols || 4;

  const groups = currentCategory?.items.reduce((acc: any, item: any) => {
    const key = item.sub || 'default';
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 5%', fontFamily: 'Pretendard, sans-serif' }}>
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#111", margin: "0 0 12px 0" }}>
          {actualData.title}
        </h1>
        {actualData.description && (
          <p style={{ fontSize: '16px', color: '#777', margin: 0 }}>{actualData.description}</p>
        )}
      </header>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '40px', borderBottom: '1px solid #eee' }}>
        {actualData.categories.map((cat: any) => (
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
        {Object.keys(groups || {}).map((groupKey) => {
          const isProfileGroup = groups[groupKey].some((item: any) => item.type === 'profile');
          return (
            <section key={groupKey} style={{ marginBottom: '50px' }}>
              {groupKey !== 'default' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ width: '4px', height: '16px', backgroundColor: accentColor, borderRadius: '2px' }} />
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#444', margin: 0 }}>{groupKey}</h3>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: isProfileGroup ? '1fr' : `repeat(${globalCols}, 1fr)`, gap: '15px' }}>
                {groups[groupKey].map((item: any, idx: number) => (
                  <div key={idx}>
                    {item.type === 'profile' ? (
                      <ProfileItem item={item} accentColor={accentColor} />
                    ) : (
                      <DefaultItem item={item} accentColor={accentColor} />
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {actualData.footer && (
        <footer style={{ textAlign: 'center', color: '#bbb', marginTop: '40px', fontSize: '13px' }}>
          {actualData.footer}
        </footer>
      )}
    </div>
  );
};

export default StaffCard;