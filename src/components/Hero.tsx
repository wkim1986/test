import { useEffect, useState } from 'react';

const Hero = ({ data }: { data?: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = data?.images || [];
  const slideIntervalMs = (data?.interval || 5) * 1000;

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, slideIntervalMs);
    return () => clearInterval(timer);
  }, [images.length, slideIntervalMs]);

  if (!data) return null;

  return (
    <section style={{
      width: data.width || '100%',
      maxWidth: data.maxWidth || 'none',
      margin: '0 auto',
      height: data.height || '450px',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: data.borderRadius || '0px',
      backgroundColor: data.backgroundColor || '#000',
    }}>
      {images.map((src: string, i: number) => (
        <div 
          key={i} 
          style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            opacity: i === currentIndex ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: i === currentIndex ? 1 : 0,
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: `rgba(0,0,0,${data.overlayOpacity || 0})`,
            zIndex: 2
          }} />
          
          <img 
            src={src} 
            alt={`slide-${i}`} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: data.displayMode === 'full' ? 'cover' : 'contain', 
              backgroundColor: 'transparent'
            }} 
          />
        </div>
      ))}

      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        textAlign: 'center',
        color: data.textColor || '#fff',
        width: '100%',
        pointerEvents: 'none'
      }}>
        <h1 style={{ 
          fontSize: data.titleSize || '48px', 
          fontWeight: data.titleWeight || '900', 
          opacity: data.titleOpacity ?? 1,
          marginBottom: '20px', 
          wordBreak: 'keep-all',
          transition: 'all 0.3s ease'
        }}>
          {data.title}
        </h1>

        <p style={{ 
          fontSize: data.subtitleSize || '20px', 
          fontWeight: data.subtitleWeight || '400',
          opacity: data.subtitleOpacity ?? 0.9,
          wordBreak: 'keep-all',
          transition: 'all 0.3s ease'
        }}>
          {data.subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;