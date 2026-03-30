import { galleryMeta } from '../content/metadata';
import Gap from '../components/Gap';
import PictureCard from '../components/PictureCard';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Gallery = () => {
  const themeColor = getThemeColorForPath('/gallery');
  const theme = getThemePalette(themeColor);

  return (
    <PageShell>
      <Gap data={{ height: '60px' }} />
      <PictureCard data={{ ...galleryMeta.galleryData, theme }} />
      <Gap data={{ height: '200px' }} />
    </PageShell>
  );
};

export default Gallery;

