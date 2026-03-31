import { galleryMeta } from '../content/metadata';
import PictureCard from '../components/PictureCard';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Gallery = () => {
  const color = getThemeColorForPath('/gallery');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <div style={{ height: '60px' }} />
      <PictureCard data={{ ...galleryMeta.galleryData, theme }} />
      <div style={{ height: '200px' }} />
    </PageShell>
  );
};

export default Gallery;

