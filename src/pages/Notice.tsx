import { noticeMeta } from '../content/metadata';
import Gap from '../components/Gap';
import NoticeComponent from '../components/Notice';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Notice = () => {
  const color = getThemeColorForPath('/notice');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <Gap data={{ height: '60px' }} />
      <NoticeComponent data={{ ...noticeMeta.noticeData, theme }} />
      <Gap data={{ height: '200px' }} />
    </PageShell>
  );
};

export default Notice;

