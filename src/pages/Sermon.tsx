import { sermonMeta } from '../content/metadata';
import Gap from '../components/Gap';
import MediaCard from '../components/MediaCard';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Sermon = () => {
  const color = getThemeColorForPath('/sermon');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <Gap data={{ height: '60px' }} />
      <MediaCard data={{ ...sermonMeta.sermonData, theme }} />
      <Gap data={{ height: '200px' }} />
    </PageShell>
  );
};

export default Sermon;

