import { globalMeta } from '../content/metadata';
import Logo from './Logo';
import Navbar from './Navbar';

const SiteHeader = () => {
  const headerLayout = globalMeta.layout?.header || {};

  const headerHeight = headerLayout.height || '100px';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        height: headerHeight,
        padding: headerLayout.padding || '0 6%',
        backgroundColor: headerLayout.backgroundColor || '#ffffff',
        borderBottom: headerLayout.borderBottom || '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 'none',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <Logo data={globalMeta.logo} />
      <div style={{ flex: 1 }} />
      <Navbar items={globalMeta.navbar} />
    </div>
  );
};

export default SiteHeader;

