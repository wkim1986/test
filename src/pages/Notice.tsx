import { noticeMeta } from '../content/metadata';
import NoticeComponent from '../components/Notice';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Notice = () => {
  const color = getThemeColorForPath('/notice');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <NoticeComponent data={{ ...noticeMeta.noticeData, theme }} />
    </PageShell>
  );
};

export default Notice;

