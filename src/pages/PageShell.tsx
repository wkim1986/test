import type { ReactNode } from 'react';

import { globalMeta } from '../content/metadata';
import Footer from '../components/Footer';
import TopButton from '../components/TopButton';

const Placeholder = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '100px 20px',
        color: '#aaa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <span style={{ fontSize: '50px' }}>🚧</span>
      <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#888' }}>공사 중 ...</h2>
      <p style={{ fontSize: '14px', color: '#bbb' }}>새롭게 정비하여 찾아뵙겠습니다.</p>
    </div>
  );
};

const PageShell = ({
  children,
  isEmptyBody,
}: {
  children?: ReactNode;
  isEmptyBody?: boolean;
}) => {
  const layoutBody = globalMeta.layout?.body || {};
  const bodyStyle: React.CSSProperties = {
    width: '100%',
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundColor: layoutBody.backgroundColor || '#ffffff',
    ...layoutBody,
    paddingTop: 0, // 빌더(Room)가 하던 것처럼 상단 padding을 제거합니다.
    justifyContent: isEmptyBody ? 'center' : 'flex-start',
    minHeight: isEmptyBody ? '90vh' : 'auto',
    gap: '20px',
  };

  const footerWrapperStyle: React.CSSProperties = {
    ...globalMeta.layout?.footer,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    flexShrink: 0,
  };

  return (
    <div style={{ minHeight: '100dvh', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <main style={bodyStyle}>{isEmptyBody ? <Placeholder /> : children}</main>
      <footer style={footerWrapperStyle}>
        <Footer data={globalMeta.footer} />
        <TopButton />
      </footer>
    </div>
  );
};

export default PageShell;

