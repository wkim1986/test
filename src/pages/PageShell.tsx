import type { ReactNode } from 'react';

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
  <main style={style}>
    {isEmpty ? <Placeholder /> : children}
  </main>
);

export default PageShell;
