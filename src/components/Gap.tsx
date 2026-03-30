import React from 'react';

const Gap = ({ data }: any) => {
  const height = data?.height || '0px';
  
  return (
    <div style={{ 
      height, 
      width: '100%', 
      flexShrink: 0,
      // Room의 gap(20px)을 상쇄하기 위해 위아래 마진을 음수로 적용
      margin: '-10px 0' 
    }} />
  );
};

export default Gap;