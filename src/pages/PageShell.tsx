import type { ReactNode } from 'react';
import Footer from '../components/Footer';

import { globalMeta } from '../content/metadata';

const style: React.CSSProperties = {
  ...globalMeta.layout.body,
  flex: '1 0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const Placeholder = () => (
  <div style={{
    textAlign: 'center',
    padding: '120px',
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

const PageShell = ({ children, isEmpty }: {
  children?: ReactNode;
  isEmpty?: boolean;
}) => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

    <div style={{ flex: 1 }}>
      <main style={style}>
        {isEmpty ? <Placeholder /> : children}
      </main>
    </div>

    <footer style={globalMeta.layout.footer}>
      <Footer data={globalMeta.footer} />
    </footer>
    
  </div>
);

export default PageShell;
