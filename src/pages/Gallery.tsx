import { galleryMeta } from '../content/metadata';
import PictureCard from '../components/PictureCard';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Gallery = () => {
  const color = getThemeColorForPath('/gallery');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <PictureCard data={{ ...galleryMeta.galleryData, theme }} />
    </PageShell>
  );
};

export default Gallery;

