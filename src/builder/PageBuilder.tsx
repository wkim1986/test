import React, { useState, useEffect, useLayoutEffect } from 'react';
import PartLoader from './PartLoader';
import Room from './Room';
import pagePlansRaw from '../data/PagePlan.json';
import metadata from '../data/MetaData.json';

const PageBuilder = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    const interval = setInterval(() => {
      if (currentPath !== window.location.pathname) handleLocationChange();
    }, 50);

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      clearInterval(interval);
    };
  }, [currentPath]);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPath]);

  const currentPageData = (pagePlansRaw as any)[currentPath] || (pagePlansRaw as any)["/"];
  const activePlan = currentPageData.plan;
  const themeColor = currentPageData.themeColor;

  return (
    <div style={{ 
      width: '100%', 
      display: 'flex',
      flexDirection: 'column',
      /* 💡 minHeight를 통해 화면을 꽉 채우고, 자식인 Footer를 밀어낼 준비를 합니다. */
      minHeight: '100dvh',
      position: 'relative'
    }}>
      {activePlan.map((plan: any) => (
        <Room 
          key={`${currentPath}-${plan.roomKey}`} 
          styleData={(metadata as any).layout[plan.roomKey]}
          roomKey={plan.roomKey}
          themeColor={themeColor} 
        >
          {plan.parts.map((item: any, idx: number) => {
            const isObj = typeof item === 'object' && item !== null;
            const name = isObj ? item.name : item;

            return (
              <PartLoader 
                key={`${plan.roomKey}-${idx}`} 
                partName={name} 
                roomName={plan.roomKey} 
                dataKey={isObj ? item.dataKey : undefined} 
                parts={isObj ? item.parts : undefined}
                pageThemeColor={themeColor}
                {...(isObj ? item : {})} 
              />
            );
          })}
        </Room>
      ))}
    </div>
  );
};

export default PageBuilder;