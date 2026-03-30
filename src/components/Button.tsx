import React from 'react';
import pagePlansRaw from '../data/PagePlan.json';

const Button = ({ data }: { data?: any }) => {
  if (!data || !data.items) return null;

  const allPlans = pagePlansRaw as any;
  const itemCount = data.items.length;

  const buttonStyle = (item: any) => {
    const isCircle = data.shape === 'circle';
    const finalRadius = isCircle ? '50%' : (data.borderRadius || '30px');
    const themeColor = allPlans[item.link]?.themeColor || item.color || '#ffffff';

    return {
      background: `linear-gradient(145deg, ${themeColor}15, ${themeColor}40)`, 
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      borderTopColor: 'rgba(255, 255, 255, 0.6)',
      borderLeftColor: 'rgba(255, 255, 255, 0.6)',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      color: item.textColor || '#1d1d1f',
      fontWeight: '700' as const,
      cursor: 'pointer',
      borderRadius: finalRadius,
      width: '100%',
      aspectRatio: '1 / 1',
      padding: '24px',
      boxShadow: `
        0 4px 6px rgba(0, 0, 0, 0.02),
        0 20px 40px ${themeColor}25
      `,
      transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
      position: 'relative' as const,
      userSelect: 'none' as const,
      overflow: 'hidden' as const,
      textDecoration: 'none' as const,
    };
  };

  const handleInternalLink = (item: any) => {
    if (item.scrollTo) {
      const element = document.getElementById(item.scrollTo);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (item.link && !item.link.startsWith('http')) {
      window.history.pushState({}, '', item.link);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
    }
  };

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${itemCount > 6 ? '120px' : '180px'}, ${itemCount > 4 ? '1fr' : '220px'}))`,
      justifyContent: 'center',
      gap: '30px', 
      width: '100%', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '0 20px' 
    }}>
      {data.items.map((item: any) => {
        const isExternal = item.link && item.link.startsWith('http');
        const themeColor = allPlans[item.link]?.themeColor || item.color || '#ffffff';

        const interactionEvents = {
          onMouseEnter: (e: any) => {
            e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
            e.currentTarget.style.background = `linear-gradient(145deg, ${themeColor}30, ${themeColor}60)`;
            e.currentTarget.style.boxShadow = `0 30px 60px ${themeColor}40`;
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
          },
          onMouseLeave: (e: any) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.background = `linear-gradient(145deg, ${themeColor}15, ${themeColor}40)`;
            e.currentTarget.style.boxShadow = `0 4px 6px rgba(0, 0, 0, 0.02), 0 20px 40px ${themeColor}25`;
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
          },
          onMouseDown: (e: any) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(0.96)';
          }
        };

        const Content = (
          <>
            <div style={{ 
              fontSize: itemCount > 7 ? '40px' : '56px', 
              marginBottom: '12px',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
            }}>
              {item.icon}
            </div>
            <div style={{ 
              fontSize: itemCount > 7 ? '16px' : '19px', 
              textAlign: 'center', 
              wordBreak: 'keep-all', 
              lineHeight: '1.2',
              letterSpacing: '-0.3px'
            }}>
              {item.name}
            </div>
            {item.subText && itemCount <= 6 && (
              <div style={{ 
                fontSize: '12px', 
                marginTop: '12px', 
                opacity: 0.6, 
                fontWeight: '600' 
              }}>
                {item.subText}
              </div>
            )}
            <div style={{
              position: 'absolute',
              top: '-20%',
              right: '-20%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
              pointerEvents: 'none'
            }} />
          </>
        );

        const commonStyle = buttonStyle(item);

        if (isExternal) {
          return (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" style={commonStyle} {...interactionEvents}>
              {Content}
            </a>
          );
        }

        return (
          <div key={item.id} onClick={() => handleInternalLink(item)} style={commonStyle} {...interactionEvents}>
            {Content}
          </div>
        );
      })}
    </div>
  );
};

export default Button;