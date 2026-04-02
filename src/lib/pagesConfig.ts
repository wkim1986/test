export const normalizePath = (path: string) => {
  if (!path) return '/';
  if (path !== '/' && path.endsWith('/')) return path.slice(0, -1);
  return path;
};

export const pageOrder = [
  '/',
  '/intro',
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
  '/intro': '#455A64',
  '/kids': '#00C853',
  '/elementary': '#FFAB00',
  '/youth': '#2979FF',
  '/staff': '#8D6E63',
  '/sermon': '#6A1B9A',
  '/gallery': '#00B8D4',
  '/notice': '#FF6D00',
  '/lab': '#C62828',
};

export const getThemeByPath
 = (path: string) => {
  const normalized = normalizePath(path);
  const color = pageThemeColorByPath[normalized] || '#333';

  return {
    main: color,
    bg: `${color}0D`,     // alpha 5%
    light: `${color}33`,  // alpha 20%
    dark: color,
  };
};


// Deprecated
export const getThemePalette = (color: string) => {
  return {
    main: color,
    bg: `${color}0D`,     // alpha 5%
    light: `${color}33`,  // alpha 20%
    dark: color,
  };
};

// Deprecated
export const getThemeColorForPath = (path: string) => {
  const normalized = normalizePath(path);
  return pageThemeColorByPath[normalized] || '#333';
};
