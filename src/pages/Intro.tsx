import { introMeta } from '../content/metadata';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Education from '../components/Education';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Intro = () => {
  const color = getThemeColorForPath('/ngm');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <Gap data={{ height: '60px' }} />
      <Button data={introMeta.button} />
      <Gap data={{ height: '40px' }} />
      <Education data={{ ...introMeta.education, theme }} />
    </PageShell>
  );
};

export default Intro;

