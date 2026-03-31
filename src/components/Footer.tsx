const Footer = ({ data }: { data?: any }) => {
  if (!data) return null;

  return (
    <footer style={{
      width: '100%',
      backgroundColor: 'transparent',
      borderTop: '1px solid rgba(255, 255, 255)',
      padding: '40px 24px',
      marginTop: 'auto',
      boxSizing: 'border-box',
      textAlign: 'center' }}>

      <div style={{ margin: '0 auto' }}>

        {data.title && (
          <div style={{
            fontSize: '15px',
            fontWeight: '600',
            color: 'rgba(255, 255, 255, 0.7)',
            letterSpacing: '0.5px',
            marginBottom: '3px' }}>
            {data.title}
          </div>
        )}

        {data.content && (
          <div style={{
            fontSize: '15px',
            color: 'rgba(255, 255, 255, 0.5)',
            fontWeight: '400',
            marginBottom: '6px' }}>
            {data.content}
          </div>
        )}

        <div style={{
          fontSize: '15px',
          color: 'rgba(255, 255, 255, 0.5)',
          fontWeight: '400' }}>
          COPYRIGHT ⓒ {new Date().getFullYear()} {data.copyright}
        </div>

      </div>
      
    </footer>
  );
};

export default Footer;