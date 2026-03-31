import { useState } from 'react';
import { motion } from 'framer-motion';

const NoticeItem = ({ item, accentColor }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        marginBottom: '20px',
        borderRadius: '12px',
        backgroundColor: '#fff',
        overflow: 'hidden',
        boxShadow: isOpen
          ? '0 8px 24px rgba(0,0,0,0.08)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease'
      }}
    >

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '20px 25px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: isOpen ? '#fafafa' : '#fff'
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '6px' }}>
            {item.isImportant && (
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#fff',
                  backgroundColor: accentColor,
                  padding: '2px 8px',
                  borderRadius: '4px'
                }}
              >
                NEW
              </span>
            )}
            <span style={{ fontSize: '13px', color: '#aaa' }}>
              {item.date}
            </span>
          </div>

          <h3
            style={{
              fontSize: '17px',
              fontWeight: isOpen ? '700' : '600',
              color: '#111',
              margin: 0
            }}
          >
            {item.title}
          </h3>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: isOpen ? accentColor : '#ccc' }}
        >
          ▾
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        style={{
          overflow: 'hidden',
          backgroundColor: '#fcfcfc'
        }}
      >
        <div style={{ padding: '0 25px 25px 25px' }}>
          <div
            style={{
              fontSize: '15px',
              lineHeight: '1.8',
              color: '#444',
              whiteSpace: 'pre-wrap',
              wordBreak: 'keep-all'
            }}
          >
            {item.content}
          </div>

          {item.link && (
            <div style={{ marginTop: '20px' }}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#eee',
                  color: '#333',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                관련 링크 바로가기
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Notice = ({ data, themeColor }: { data?: any; themeColor?: string }) => {
  if (!data) return null;
  const accentColor = themeColor || data.theme?.main || '#000';

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px',
        fontFamily: 'Pretendard, sans-serif'
      }}
    >
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '800',
            color: '#111',
            margin: '0 0 12px 0'
          }}
        >
          {data.title}
        </h1>
        <p style={{ fontSize: '16px', color: '#777', margin: 0 }}>
          {data.description}
        </p>
      </header>

      <main>
        {data.items?.map((item: any, index: number) => (
          <NoticeItem key={index} item={item} accentColor={accentColor} />
        ))}
      </main>

      {data.footer && (
        <footer
          style={{
            textAlign: 'center',
            color: '#bbb',
            marginTop: '60px',
            fontSize: '13px'
          }}
        >
          {data.footer}
        </footer>
      )}
    </div>
  );
};

export default Notice;