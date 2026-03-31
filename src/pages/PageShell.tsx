import type { ReactNode } from 'react';

import { globalMeta } from '../content/metadata';
import Footer from '../components/Footer';

const style: React.CSSProperties = {
  ...globalMeta.layout.body,
  flex: '1 0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
};

const Placeholder = () => (
  <div style={{
    textAlign: 'center',
    padding: '100px 20px',
    color: '#aaa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  }}>
    <span style={{ fontSize: '100px' }}>🚧</span>
    <h1 style={{ color: '#888' }}>공사 중 ...</h1>
  </div>
);

const PageShell = ({ children, isEmptyBody }: {
  children?: ReactNode;
  isEmptyBody?: boolean;
}) => (
  <div>
    <main style={style}>
      {isEmptyBody ? <Placeholder /> : children}
    </main>

    {!isEmptyBody && (
      <footer style={globalMeta.layout.footer}>
        <Footer data={globalMeta.footer} />
      </footer>
    )}
  </div>
);

export default PageShell;
