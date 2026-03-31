import { introMeta } from '../content/metadata';
import Button from '../components/Button';
import Education from '../components/Education';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';
import { Spacer } from '../lib/pagesUtil';

const Intro = () => {
  const color = getThemeColorForPath('/intro');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <Button data={introMeta.button} />
      <Spacer />
      <Education data={{ ...introMeta.education, theme }} />
    </PageShell>
  );
};

export default Intro;

