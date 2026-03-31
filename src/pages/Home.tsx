import { homeMeta } from '../content/metadata';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import Vision from '../components/Vision';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Home = () => {
  const color = getThemeColorForPath('/');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <Hero data={homeMeta.hero} />
      <div style={{ height: '30px' }} />
      <SectionHeader data={{ ...homeMeta.visionHeader, theme }} />
      <div style={{ height: '30px' }} />
      <Vision data={{ ...homeMeta.vision, theme }} />
    </PageShell>
  );
};

export default Home;

