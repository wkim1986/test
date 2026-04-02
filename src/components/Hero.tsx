import { useEffect, useState } from 'react';

const Hero = ({ data }: { data?: any }) => {
  if (!data) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = data?.images || [];
  const slideInterval = (data?.interval || 3) * 1000;

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => setCurrentIndex(prev => (prev + 1) % images.length), slideInterval);
    return () => clearInterval(timer);
  }, [images.length, slideInterval]);

  return (
    <section style={{
      width: data.width || '100%',
      height: data.height || '500px',
      position: 'relative',
      overflow: 'hidden' }}>

      {images.map((src: string, i: number) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            transition: 'opacity 1.5s ease-in-out',
            opacity: i === currentIndex ? 1 : 0,
            zIndex: i === currentIndex ? 1 : 0 }}>

          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            backgroundColor: `rgba(0,0,0,${data.overlayOpacity || 0})`,
            zIndex: 1}} />

          <img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ))}

      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        textAlign: 'center',
        width: '100%',
        pointerEvents: 'none' }}>

        <h1 style={{
          fontSize: data.titleSize || '70px',
          fontWeight: data.titleWeight || '300',
          color: data.titleTextColor || '#fff',
          opacity: data.titleOpacity ?? 1,
          marginBottom: '20px',
          wordBreak: 'keep-all',
          transition: 'all 0.3s ease' }}>
          {data.title}
        </h1>

        <p style={{
          fontSize: data.subtitleSize || '30px',
          fontWeight: data.subtitleWeight || '300',
          color: data.subtitleTextColor || '#fff',
          opacity: data.subtitleOpacity ?? 1,
          wordBreak: 'keep-all',
          transition: 'all 0.3s ease' }}>
          {data.subtitle}
        </p>

      </div>

    </section>
  );
};

export default Hero;