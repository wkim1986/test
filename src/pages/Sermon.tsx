import { sermonMeta } from '../content/metadata';
import MediaCard from '../components/MediaCard';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Sermon = () => {
  const color = getThemeColorForPath('/sermon');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <MediaCard data={{ ...sermonMeta.sermonData, theme }} />
    </PageShell>
  );
};

export default Sermon;

