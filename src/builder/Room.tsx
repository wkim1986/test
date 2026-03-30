import React from 'react';
import TopButton from '../components/TopButton';

interface RoomProps {
  styleData: any;
  roomKey?: string;
  themeColor?: string;
  children: React.ReactNode;
}

const Room = ({ styleData, roomKey, themeColor, children }: RoomProps) => {
  const isHeader = roomKey === "header";
  const isBody = roomKey === "body";
  const isFooter = roomKey === "footer";

  const isEmptyBody = isBody && React.Children.count(children) === 0;

  const containerStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
    ...styleData,

    ...(isHeader && {
      flexDirection: "row",
      justifyContent: "space-between", 
      alignItems: "center",
      width: "100%",
      height: styleData?.height || "10px",
      zIndex: 9999,
      padding: styleData?.padding || '0 10px', 
      backgroundColor: styleData?.backgroundColor || "#fff",
      boxShadow: styleData?.boxShadow || "0 2px 15px rgba(0,0,0,0.08)",
    }),

    ...(isBody && {
      flexDirection: "column",
      flex: "1 0 auto",
      paddingTop: "0",
      minHeight: isEmptyBody ? "90vh" : "auto", // 비어있을 때 최소 높이 확보
      justifyContent: isEmptyBody ? "center" : "flex-start",
      gap: "20px",
    }),

    ...(isFooter && {
      flexDirection: "column",
      marginTop: 'auto',
      flexShrink: 0,
    }),
  };

  return (
    <section style={containerStyle}>
      {isEmptyBody ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '100px 20px', 
          color: '#aaa',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px'
        }}>
          <span style={{ fontSize: '50px' }}>🚧</span>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#888' }}>
            공사 중 ...
          </h2>
          <p style={{ fontSize: '14px', color: '#bbb' }}>
            새롭게 정비하여 찾아뵙겠습니다.
          </p>
        </div>
      ) : (
        children
      )}
      
      {isFooter && <TopButton />}
    </section>
  );
};

export default Room;