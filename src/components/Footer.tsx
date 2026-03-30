const Footer = ({ data }: { data?: any }) => {
  if (!data) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      width: '100%',
      backgroundColor: 'transparent',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '40px 24px',
      marginTop: 'auto',
      boxSizing: 'border-box',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {data.churchName && (
          <div style={{
            fontSize: '15px',
            fontWeight: '600',
            color: 'rgba(255, 255, 255, 0.7)',
            letterSpacing: '0.5px',
            marginBottom: '12px',
          }}>
            {data.churchName}
          </div>
        )}

        {data.content && (
          <div style={{
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.4)',
            fontWeight: '300',
            lineHeight: '1.5',
            marginBottom: '20px',
            wordBreak: 'keep-all',
            maxWidth: '650px',
            margin: '0 auto 20px'
          }}>
            {data.content}
          </div>
        )}

        <div style={{
          fontSize: '11px',
          color: 'rgba(255, 255, 255, 0.2)',
          letterSpacing: '0.2px',
          fontWeight: '300'
        }}>
          © {currentYear} {data.churchName}. {data.copyright}
        </div>

      </div>
    </footer>
  );
};

export default Footer;