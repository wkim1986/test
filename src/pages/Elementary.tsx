import { elementaryMeta } from '../content/metadata';
import DeptIntro from '../components/DeptIntro';
import Gap from '../components/Gap';
import Picture from '../components/Picture';
import Row from '../components/Row';
import ActivityList from '../components/ActivityList';
import TimeTable from '../components/TimeTable';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Elementary = () => {
  const themeColor = getThemeColorForPath('/elementary');
  const theme = getThemePalette(themeColor);

  return (
    <PageShell>
      <Gap data={{ height: '50px' }} />
      <DeptIntro data={{ ...elementaryMeta.elementaryIntro, theme }} />
      <Gap data={{ height: '10px' }} />
      <Picture data={elementaryMeta.elementaryPhoto} />
      <Gap data={{ height: '20px' }} />
      <Row
        data={{
          gap: '40px',
          children: [
            <ActivityList key="elementary-activity" data={{ ...elementaryMeta.elementaryActivity, theme }} />,
            <TimeTable key="elementary-time" data={{ ...elementaryMeta.elementaryTime, theme }} />,
          ],
        }}
      />
    </PageShell>
  );
};

export default Elementary;

