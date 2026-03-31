import { homeMeta, globalMeta } from '../content/metadata';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import Vision from '../components/Vision';
import Footer from '../components/Footer';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';
import { Spacer } from '../lib/pagesUtil';

const Home = () => {
  const color = getThemeColorForPath('/');
  const theme = getThemePalette(color);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      <div style={{ flex: 1 }}>
        <PageShell>
          <div style={{ marginTop: "-60px" }} />
          <Hero data={homeMeta.hero} />
          <Spacer />
          <SectionHeader data={{ ...homeMeta.visionHeader, theme }} />
          <Spacer size={30} />
          <Vision data={{ ...homeMeta.vision, theme }} />
        </PageShell>
      </div>

      <footer style={globalMeta.layout.footer}>
        <Footer data={globalMeta.footer} />
      </footer>

    </div>
  );
};

export default Home;
