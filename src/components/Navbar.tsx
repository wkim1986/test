import React from 'react';
import pagePlansRaw from '../data/PagePlan.json'; 

const Navbar = ({ data }: { data?: any }) => {
  const navItems = data?.items || [];
  const currentPath = window.location.pathname;
  const allPlans = pagePlansRaw as any;

  const handleNavClick = (path: string) => {
    window.history.pushState({}, '', path);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (navItems.length === 0) return null;

  return (
    <nav style={{ display: 'flex', alignItems: 'center' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '30px', margin: 0, padding: 0, alignItems: 'center' }}>
        {navItems.map((item: any) => {
          const isActive = currentPath === item.path;
          const pageSpecificColor = allPlans[item.path]?.themeColor || '#333';

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
                lineHeight: '1'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = pageSpecificColor; }}
              onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#333'; }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;