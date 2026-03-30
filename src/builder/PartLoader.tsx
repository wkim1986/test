import React from 'react';
import { PART_ROUTES } from '../data/Routes';
import metadata from '../data/MetaData.json';

// 🎨 [색상 요리사] HEX 색상을 받아 명도를 조절하는 함수
// 별도의 라이브러리 없이 브라우저의 HSL 기능을 활용합니다.
const getThemePalette = (baseColor: string) => {
  if (!baseColor) return null;
  
  // 기본적으로 4가지 톤을 생성합니다.
  return {
    main: baseColor,                         // 기준색 (버튼 등)
    light: `${baseColor}33`,                // 20% 투명도 (연한 강조)
    bg: `${baseColor}0D`,                   // 5% 투명도 (아주 연한 배경용)
    dark: baseColor,                         // 진한색 (나중에 고도화 가능)
  };
};

interface PartLoaderProps {
  partName: string;
  roomName: string;
  dataKey?: string;
  parts?: any[];
  pageThemeColor?: string;
  [key: string]: any;
}

const PartLoader = (props: PartLoaderProps) => {
  const { partName, roomName, dataKey, parts, pageThemeColor, ...extraProps } = props;
  
  const Target = (PART_ROUTES as any)[partName];
  
  if (!Target) {
    return (
      <div style={{ padding: '20px', border: '1px dashed red', textAlign: 'center', color: '#666' }}>
        [ {roomName.toUpperCase()} ] {partName} 미등록
      </div>
    );
  }

  // ⭐ 자동 배색 엔진 가동
  // PagePlan.json에서 온 색상을 4가지 조화로운 세트로 요리합니다.
  const themePalette = getThemePalette(pageThemeColor || "#000000");

  let renderedChildren = null;
  if (parts && Array.isArray(parts)) {
    renderedChildren = parts.map((p, i) => (
      <PartLoader 
        key={i} 
        partName={p.name}
        roomName={roomName} 
        dataKey={p.dataKey} 
        pageThemeColor={pageThemeColor} 
        {...p} 
      />
    ));
  }

  const key = dataKey || partName.charAt(0).toLowerCase() + partName.slice(1);

  // 3. 데이터 병합 (계산된 테마 세트를 'theme'이라는 이름으로 전달)
  const data = { 
    ...((metadata as any)[key] || {}), 
    theme: themePalette, // 👈 이제 컴포넌트에서 props.data.theme.main 등으로 사용!
    ...extraProps,
    children: renderedChildren 
  };

  return <Target data={data} />;
};

export default PartLoader;