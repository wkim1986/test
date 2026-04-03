import intro from '../content/intro.json';
import MenuButtons from '../components/MenuButtons';
import Education from '../components/Education';

import PageShell from './PageShell';
import { getThemeByPath } from '../lib/pagesConfig';
import { Spacer } from '../lib/pagesUtil';

const Intro = () => {
  const theme = getThemeByPath('/');

  return (
    <PageShell>
      <MenuButtons data={intro.menuButtons} />
      <Spacer />
      <Education data={{ ...intro.education, theme }} />
    </PageShell>
  );
};

export default Intro;

