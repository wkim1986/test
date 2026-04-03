import { useNavigate } from 'react-router-dom';

const MenuButtons = ({ data }: { data?: any }) => {
  if (!(data?.items)) return null;
  
  const {
    borderRadius = "50%",
    fontSize = "20px",
    subFontSize = "12px",
    margin = "12px 0 0 -3px",
    gridTemplateColumnSize = "180px",
    items = []
  } = data;

  const style = (item: any): React.CSSProperties => ({
    background: item.color,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: item.textColor || "#000",
    fontWeight: 700,
    borderRadius: borderRadius,
    aspectRatio: '1 / 1',
    transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
    overflow: 'hidden',
    userSelect: 'none',
    textDecoration: 'none',
    cursor: 'pointer'
  });

  const navigate = useNavigate();
  const move = (link: any) => {
    if (!link) return;
    navigate(link);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${gridTemplateColumnSize}, 1fr))`,
      gap: '30px',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px' }}>

      {items.map((item: any) => {

        const mouseEvents = {
          onMouseEnter: (e: any) => e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)',
          onMouseLeave: (e: any) => e.currentTarget.style.transform = 'translateY(0) scale(1)',
          onMouseDown: (e: any) => e.currentTarget.style.transform = 'translateY(-4px) scale(0.96)'
        };

        const Content = (
          <>
            <div style={{ fontSize, textAlign: 'center', wordBreak: 'keep-all', lineHeight: '1.2' }}>
              {item.name}
            </div>

            { item.subText && (
              <div style={{ fontSize: subFontSize, margin }}>
                {item.subText}
              </div>
            )}
          </>
        );

        if (item?.link?.startsWith('http'))
          return (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" style={style(item)} {...mouseEvents}>
              {Content}
            </a>
          );
        else
          return (
            <div key={item.id} onClick={() => move(item)} style={style(item)} {...mouseEvents}>
              {Content}
            </div>
          );
      })}
    </div>
  );
};

export default MenuButtons;
