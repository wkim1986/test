import home from '../content/home.json';
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
      <Hero data={home.hero} />
      <Spacer />
      <SectionHeader data={{ ...home.header, theme }} />
      <Spacer size={30} />
      <SectionVision data={{ ...home.vision, theme }} />
    </PageShell>
  );
};

export default Home;
