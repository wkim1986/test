import { introMeta } from '../content/metadata';
import Button from '../components/Button';
import Education from '../components/Education';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Intro = () => {
  const color = getThemeColorForPath('/intro');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <div style={{ height: '60px' }} />
      <Button data={introMeta.button} />
      <div style={{ height: '40px' }} />
      <Education data={{ ...introMeta.education, theme }} />
    </PageShell>
  );
};

export default Intro;

