import { useNavigate } from 'react-router-dom';

const Logo = ({ data }: { data?: any }) => {
  const navigate = useNavigate();
  const mode = data?.mode;
  const src = data?.src;
  const text = data?.text;
  const tagline = data?.tagline;
  const styles = data?.styles;

  const goToMain = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        minWidth: 0,
        maxWidth: '100%',
      }}
      onClick={goToMain}
    >
      {mode === "image" ? (
        <img
          src={src}
          alt={text}
          style={{ height: styles?.imgHeight || '40px', display: 'block', objectFit: 'contain' }}
        />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
          <h1 style={{
            margin: 0,
            fontSize: styles?.textSize || '22px',
            fontWeight: '900',
            color: styles?.textColor || '#111',
            letterSpacing: '-0.5px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {text}
          </h1>
          {tagline && (
            <span
              style={{
                fontSize: styles?.taglineSize || '12px',
                fontWeight: '500',
                color: styles?.taglineColor || '#888',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}
            >
              {tagline}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;