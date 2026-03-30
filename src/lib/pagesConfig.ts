export const normalizePath = (path: string) => {
  if (!path) return '/';
  if (path !== '/' && path.endsWith('/')) return path.slice(0, -1);
  return path;
};

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
  '/': '#d4a373',
  '/N.G.M': '#33201d',
  '/kids': '#00e93a',
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

