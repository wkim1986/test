import { useEffect, useState } from 'react';

const Hero = ({ data }: { data?: any }) => {
  if (!data) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    images = [],
    height = "500px",
    overlayOpacity = 0,
    titleSize = "70px",
    titleWeight = "300",
    titleTextColor = "#fff",
    titleOpacity = 1,
    subtitleSize = "30px",
    subtitleWeight = "300",
    subtitleTextColor = "#fff",
    subtitleOpacity = 1
  } = data;

  const slideInterval = (data?.interval || 3) * 1000;

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => setCurrentIndex(prev => (prev + 1) % images.length), slideInterval);
    return () => clearInterval(timer);
  }, [images.length, slideInterval]);

  return (
    <section style={{
      width: '100%',
      height,
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
            backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
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
          fontSize: titleSize,
          fontWeight: titleWeight,
          color: titleTextColor,
          opacity: titleOpacity,
          marginBottom: '20px',
          wordBreak: 'keep-all',
          transition: 'all 0.3s ease' }}>
          {data.title}
        </h1>

        <p style={{
          fontSize: subtitleSize,
          fontWeight: subtitleWeight,
          color: subtitleTextColor,
          opacity: subtitleOpacity,
          wordBreak: 'keep-all',
          transition: 'all 0.3s ease' }}>
          {data.subtitle}
        </p>

      </div>

    </section>
  );
};

export default Hero;