import { youthMeta } from '../content/metadata';
import DeptIntro from '../components/DeptIntro';
import Gap from '../components/Gap';
import Picture from '../components/Picture';
import Row from '../components/Row';
import ActivityList from '../components/ActivityList';
import TimeTable from '../components/TimeTable';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Youth = () => {
  const themeColor = getThemeColorForPath('/youth');
  const theme = getThemePalette(themeColor);

  return (
    <PageShell>
      <Gap data={{ height: '50px' }} />
      <DeptIntro data={{ ...youthMeta.youthIntro, theme }} />
      <Gap data={{ height: '10px' }} />
      <Picture data={youthMeta.youthPhoto} />
      <Gap data={{ height: '20px' }} />
      <Row
        data={{
          gap: '40px',
          children: [
            <ActivityList key="youth-activity" data={{ ...youthMeta.youthActivity, theme }} />,
            <TimeTable key="youth-time" data={{ ...youthMeta.youthTime, theme }} />,
          ],
        }}
      />
    </PageShell>
  );
};

export default Youth;

