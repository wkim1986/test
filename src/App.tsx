import React, { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { globalMeta } from './content/metadata';
import SiteHeader from './components/SiteHeader';

import Home from './pages/Home';
import Intro from './pages/Intro';
import Kids from './pages/Kids';
import Elementary from './pages/Elementary';
import Youth from './pages/Youth';
import Staff from './pages/Staff';
import Sermon from './pages/Sermon';
import Gallery from './pages/Gallery';
import Notice from './pages/Notice';
import _Construction from './pages/_Construction';

import { normalizePath, pageOrder } from './lib/pagesConfig';

const SWIPE_THRESHOLD_PX = 60;
const VERTICAL_TOLERANCE_PX = 80;

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  const headerHeight = globalMeta.layout?.header?.height || '100px';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);
    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  const startPointRef = useRef<{ x: number; y: number } | null>(null);

  const swipeToPage = (direction: 'left' | 'right') => {
    const currentPath = normalizePath(location.pathname);
    const currentIndex = pageOrder.findIndex((p) => normalizePath(p) === currentPath);
    if (currentIndex === -1) return;

    const delta = direction === 'left' ? 1 : -1;
    const nextIndex = (currentIndex + delta + pageOrder.length) % pageOrder.length;

    navigate(pageOrder[nextIndex]);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile) return;

    const touch = e.touches[0];
    if (!touch) return;

    startPointRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    if (!startPointRef.current) return;

    const touch = e.changedTouches[0];
    if (!touch) return;

    const dx = touch.clientX - startPointRef.current.x; // -: left, +: right
    const dy = touch.clientY - startPointRef.current.y;
    startPointRef.current = null;

    if (Math.abs(dx) < SWIPE_THRESHOLD_PX) return;
    if (Math.abs(dy) > VERTICAL_TOLERANCE_PX && Math.abs(dy) > Math.abs(dx)) return;

    if (dx < 0) swipeToPage('left');
    else swipeToPage('right');
  };

  const touchHandlers = isMobile
    ? { onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd }
    : {};

  return (
    <div
      {...touchHandlers}
      style={{
        minHeight: '100dvh',
        backgroundColor: globalMeta.layout?.body?.backgroundColor || '#ffffff',
        touchAction: 'pan-y',
      }}
    >
      <SiteHeader />

      <div style={{ paddingTop: headerHeight }}>
        <div className="routeView" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/Intro" element={<Intro />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/elementary" element={<Elementary />} />
            <Route path="/youth" element={<Youth />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/sermon" element={<Sermon />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/lab" element={<_Construction />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;