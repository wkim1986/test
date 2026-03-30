export const normalizePath = (path: string) => {
  if (!path) return '/';
  if (path !== '/' && path.endsWith('/')) return path.slice(0, -1);
  return path;
};

// 모바일 좌/우 스와이프 내비게이션 순서
export const pageOrder = [
  '/',
  '/N.G.M',
  '/kids',
  '/elementary',
  '/youth',
  '/staff',
  '/sermon',
  '/gallery',
  '/notice',
  '/laboratory',
] as const;

export const pageThemeColorByPath: Record<string, string> = {
  // 홈 타이틀이 검정색으로만 보이는 현상 개선
  '/': '#d4a373',
  '/N.G.M': '#33201d',
  '/kids': '#00e93a',
  // 노랑 계열을 더 진한 색으로 조정
  '/elementary': '#caa300',
  '/youth': '#00DEFF',
  '/staff': '#FF80BC',
  '/sermon': '#fae100',
  '/gallery': '#0004ff',
  '/notice': '#d4a373',
  '/laboratory': '#ff5e00',
};

export const getThemePalette = (baseColor: string) => {
  if (!baseColor) {
    return { main: '#000000', light: '#00000033', bg: '#0000000D', dark: '#000000' };
  }

  // PartLoader(PageBuilder)가 하던 테마 생성 로직을 그대로 재사용합니다.
  return {
    main: baseColor,
    light: `${baseColor}33`,
    bg: `${baseColor}0D`,
    dark: baseColor,
  };
};

export const getThemeColorForPath = (path: string) => {
  const normalized = normalizePath(path);
  return pageThemeColorByPath[normalized] || '#333';
};

