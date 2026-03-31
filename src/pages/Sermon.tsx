import { sermonMeta } from '../content/metadata';
import MediaCard from '../components/MediaCard';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Sermon = () => {
  const color = getThemeColorForPath('/sermon');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <div style={{ height: '60px' }} />
      <MediaCard data={{ ...sermonMeta.sermonData, theme }} />
      <div style={{ height: '200px' }} />
    </PageShell>
  );
};

export default Sermon;

