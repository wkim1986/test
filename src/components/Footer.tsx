import React from 'react';

const Footer = ({ data }: { data?: any }) => {
  if (!data) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      width: '100%',
      backgroundColor: 'transparent', 
      borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
      padding: '40px 24px', 
      marginTop: 'auto', 
      boxSizing: 'border-box',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* 1. 상단: 브랜드 - 너무 튀지 않는 적당한 강조 */}
        {data.churchName && (
          <div style={{ 
            fontSize: '15px', // 👈 18px에서 줄임 (세련된 크기)
            fontWeight: '600', 
            color: 'rgba(255, 255, 255, 0.7)', 
            letterSpacing: '0.5px',
            marginBottom: '12px',
          }}>
            {data.churchName}
          </div>
        )}

        {/* 2. 중단: 주소 및 연락처 - 작지만 또렷하게 */}
        {data.content && (
          <div style={{ 
            fontSize: '13px', // 👈 14px에서 줄임 (푸터 표준 가독성)
            color: 'rgba(255, 255, 255, 0.4)', 
            fontWeight: '300',
            lineHeight: '1.5', 
            marginBottom: '20px', 
            wordBreak: 'keep-all',
            maxWidth: '650px',
            margin: '0 auto 20px'
          }}>
            {data.content}
          </div>
        )}

        {/* 3. 하단: 저작권 - 보조 정보답게 */}
        <div style={{ 
          fontSize: '11px', // 👈 13px에서 줄임 (군더더기 없는 크기)
          color: 'rgba(255, 255, 255, 0.2)',
          letterSpacing: '0.2px',
          fontWeight: '300'
        }}>
          © {currentYear} {data.churchName}. {data.copyright}
        </div>

      </div>
    </footer>
  );
};

export default Footer;