import { youthMeta } from '../content/metadata';
import DeptIntro from '../components/DeptIntro';
import Picture from '../components/Picture';
import Row from '../components/Row';
import ActivityList from '../components/ActivityList';
import TimeTable from '../components/TimeTable';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';
import { Spacer } from '../lib/pagesUtil';

const Youth = () => {
  const color = getThemeColorForPath('/youth');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <DeptIntro data={{ ...youthMeta.youthIntro, theme }} />
      <Spacer size={40} />
      <Picture data={youthMeta.youthPhoto} />
      <Spacer />
      <Row
        data={{
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

