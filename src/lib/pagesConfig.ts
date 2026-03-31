export const normalizePath = (path: string) => {
  if (!path) return '/';
  if (path !== '/' && path.endsWith('/')) return path.slice(0, -1);
  return path;
};

export const pageOrder = [
  '/',
  '/ngm',
  '/kids',
  '/elementary',
  '/youth',
  '/staff',
  '/sermon',
  '/gallery',
  '/notice',
  '/lab',
] as const;

export const pageThemeColorByPath: Record<string, string> = {
  '/': '#6D4C41',
  '/ngm': '#455A64',
  '/kids': '#00C853',
  '/elementary': '#FFAB00',
  '/youth': '#2979FF',
  '/staff': '#8D6E63',
  '/sermon': '#6A1B9A',
  '/gallery': '#00B8D4',
  '/notice': '#FF6D00',
  '/lab': '#C62828',
}

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

