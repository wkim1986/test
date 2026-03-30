import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getThemeColorForPath, normalizePath } from '../lib/pagesConfig';

const Navbar = ({ data }: { data?: any }) => {
  const navItems = data?.items || [];
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = normalizePath(location.pathname);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [currentPath]);

  const handleNavClick = (path: string) => {
    setIsDrawerOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (navItems.length === 0) return null;

  const renderNavItem = (item: any, { asButton }: { asButton?: boolean } = {}) => {
    const normalizedItemPath = normalizePath(item.path);
    const isActive = currentPath === normalizedItemPath;
    const pageSpecificColor = getThemeColorForPath(normalizedItemPath);

    if (asButton) {
      return (
        <button
          key={item.id}
          type="button"
          className="navbar-drawerItem"
          onClick={() => handleNavClick(item.path)}
          style={{
            color: isActive ? pageSpecificColor : '#333',
            fontWeight: isActive ? 900 : 700,
          }}
        >
          <span>{item.name}</span>
          <span style={{ color: isActive ? pageSpecificColor : '#aaa', fontSize: 14 }}>{isActive ? '●' : '○'}</span>
        </button>
      );
    }

    return (
      <li
        key={item.id}
        onClick={() => handleNavClick(item.path)}
        style={{
          fontSize: '17px',
          fontWeight: isActive ? '700' : '500',
          cursor: 'pointer',
          color: isActive ? pageSpecificColor : '#333',
          transition: 'color 0.2s ease',
          borderBottom: isActive ? `2px solid ${pageSpecificColor}` : '2px solid transparent',
          paddingBottom: '4px',
          lineHeight: '1',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = pageSpecificColor;
        }}
        onMouseLeave={(e) => {
          if (!isActive) e.currentTarget.style.color = '#333';
        }}
      >
        {item.name}
      </li>
    );
  };

  return (
    <>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        {/* Desktop */}
        <div className="navbar-desktop" style={{ flex: 1 }}>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '30px',
              margin: 0,
              padding: 0,
              alignItems: 'center',
              flexWrap: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {navItems.map((item: any) => renderNavItem(item))}
          </ul>
        </div>

        {/* Mobile */}
        <div className="navbar-mobile" style={{ marginLeft: 'auto' }}>
          <button
            type="button"
            className="navbar-hamburgerBtn"
            aria-label="메뉴 열기"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`navbar-drawerOverlay ${isDrawerOpen ? 'open' : ''}`}
        onClick={() => setIsDrawerOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-label="모바일 메뉴"
      >
        <div className="navbar-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="navbar-drawerTitle">메뉴</div>
          {navItems.map((item: any) => renderNavItem(item, { asButton: true }))}
        </div>
      </div>
    </>
  );
};

export default Navbar;