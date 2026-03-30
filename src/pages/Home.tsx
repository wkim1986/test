import { homeMeta } from '../content/metadata';
import Hero from '../components/Hero';
import Gap from '../components/Gap';
import SectionHeader from '../components/SectionHeader';
import Vision from '../components/Vision';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Home = () => {
  const themeColor = getThemeColorForPath('/');
  const theme = getThemePalette(themeColor);

  return (
    <PageShell>
      <Hero data={homeMeta.hero} />
      <Gap data={{ height: '30px' }} />
      <SectionHeader data={{ ...homeMeta.visionHeader, theme }} />
      <Gap data={{ height: '10px' }} />
      <Vision data={{ ...homeMeta.vision, theme }} />
    </PageShell>
  );
};

export default Home;

