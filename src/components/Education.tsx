const Education = ({ data }: { data?: any }) => {
  if (!data) return null;

  const theme = data.theme;
  const accentColor = theme?.main || '#000';
  const lightBg = theme?.bg || '#f8f9fa';
  const baseBorder = `3px solid #000`;

  const renderIcon = (icon: string) => {
    if (!icon) return null;
    if (icon.startsWith('http')) {
      return (
        <div style={{
          width: '45px', height: '45px', backgroundColor: accentColor,
          WebkitMaskImage: `url(${icon})`, maskImage: `url(${icon})`,
          WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center', maskPosition: 'center',
          WebkitMaskSize: 'contain', maskSize: 'contain',
        }} />
      );
    }
    return <div style={{ fontSize: '36px', color: accentColor }}>{icon}</div>;
  };

  return (
    <div style={{ 
      width: '100%', maxWidth: '1400px', margin: '0 auto', 
      border: baseBorder, display: 'flex', flexDirection: 'column', 
      color: '#000', backgroundColor: '#fff', fontFamily: 'Pretendard, sans-serif'
    }}>
      
      {/* 1. 상단 비전 섹션 */}
      <div style={{ padding: '60px 40px', borderBottom: baseBorder, backgroundColor: lightBg, textAlign: 'center' }}>
        <span style={{ fontWeight: '800', color: accentColor, letterSpacing: '3px', fontSize: '13px' }}>{data.vision.tag}</span>
        <h2 style={{ fontSize: '48px', fontWeight: '900', marginTop: '12px', color: accentColor }}>{data.vision.title}</h2>
      </div>

      {/* 2. 정체성 그리드 */}
      <div style={{ display: 'flex', borderBottom: baseBorder }}>
        <div style={{ flex: '1.2', padding: '40px 50px', borderRight: baseBorder, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {data.vision.desc.map((text: string, idx: number) => (
            <p key={idx} style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '15px', fontWeight: '500', wordBreak: 'keep-all' }}>{text}</p>
          ))}
        </div>
        <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {data.identity?.map((item: any, idx: number) => (
            <div key={item.id} style={{ 
              padding: '30px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              borderBottom: idx < 2 ? baseBorder : 'none', borderRight: idx % 2 === 0 ? baseBorder : 'none',
            }}>
              <div style={{ marginBottom: '15px' }}>{renderIcon(item.icon)}</div>
              <h5 style={{ fontWeight: '900', fontSize: '17px', marginBottom: '12px' }}>{item.title}</h5>
              {item.lines?.map((line: string, i: number) => (
                <div key={i} style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>{line}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3. 커리큘럼 섹션 */}
      <div style={{ borderBottom: baseBorder, padding: '50px 40px' }}>
        <h4 style={{ textAlign: 'center', fontSize: '24px', fontWeight: '900', marginBottom: '35px', color: accentColor }}>{data.curriculumTitle}</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
          {data.curriculum?.map((item: any, idx: number) => (
            <div key={idx} style={{ backgroundColor: '#FFF', padding: '25px 20px', border: baseBorder, boxShadow: 'none' }}>
              <h5 style={{ fontWeight: '900', margin: '10px 0', fontSize: '18px' }}>{item.title}</h5>
              <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#444' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. 하단 선언문 섹션 (줄바꿈 적용 핵심) */}
      <div style={{ display: 'flex', minHeight: '350px' }}>
        <div style={{ flex: '1.2', padding: '50px 40px', borderRight: baseBorder, backgroundColor: lightBg, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {data.declarations.map((item: any, idx: number) => (
            <div key={idx} style={{ marginBottom: idx === 0 ? '40px' : '0' }}>
              <h5 style={{ color: accentColor, fontWeight: '900', marginBottom: '12px', fontSize: '15px' }}>{item.label}</h5>
              <p style={{ 
                fontSize: '17px', lineHeight: '1.8', fontWeight: '600', color: '#000', margin: 0,
                // ✨ 이 부분이 \n 을 줄바꿈으로 바꿔줍니다
                whiteSpace: 'pre-line', 
                wordBreak: 'keep-all'
              }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* 슬로건 영역 */}
        <div style={{ flex: '0.8', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', backgroundColor: '#000' }}>
          <h2 style={{ 
            color: '#fff', fontSize: '26px', fontWeight: '900', textAlign: 'center', lineHeight: '1.6', 
            // ✨ 슬로건에도 적용 가능
            whiteSpace: 'pre-line', letterSpacing: '1px' 
          }}>
            {data.slogan}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Education;