import { homeMeta } from '../content/metadata';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import SectionVision from '../components/SectionVision';

import PageShell from './PageShell';
import { getThemeByPath } from '../lib/pagesConfig';
import { Spacer } from '../lib/pagesUtil';

const Home = () => {
  const theme = getThemeByPath('/');

  return (
    <PageShell>
      <div style={{ marginTop: "-60px" }} />
      <Hero data={homeMeta.hero} />
      <Spacer />
      <SectionHeader data={{ ...homeMeta.header, theme }} />
      <Spacer size={30} />
      <SectionVision data={{ ...homeMeta.vision, theme }} />
    </PageShell>
  );
};

export default Home;
