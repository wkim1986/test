import { homeMeta } from '../content/metadata';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import Vision from '../components/Vision';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';
import { Spacer } from '../lib/pagesUtil';

const Home = () => {
  const color = getThemeColorForPath('/');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <div style={{ marginTop: "-60px" }} />
      <Hero data={homeMeta.hero} />
      <Spacer />
      <SectionHeader data={{ ...homeMeta.visionHeader, theme }} />
      <Spacer size={30} />
      <Vision data={{ ...homeMeta.vision, theme }} />
    </PageShell>
  );
};

export default Home;
