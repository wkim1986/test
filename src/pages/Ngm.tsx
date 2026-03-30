import { ngmMeta } from '../content/metadata';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Education from '../components/Education';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Ngm = () => {
  const themeColor = getThemeColorForPath('/N.G.M');
  const theme = getThemePalette(themeColor);

  return (
    <PageShell>
      <Gap data={{ height: '60px' }} />
      <Button data={ngmMeta.button} />
      <Gap data={{ height: '40px' }} />
      <Education data={{ ...ngmMeta.education, theme }} />
    </PageShell>
  );
};

export default Ngm;

