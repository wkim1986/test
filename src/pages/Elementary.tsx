import { elementaryMeta } from '../content/metadata';
import DeptIntro from '../components/DeptIntro';
import Picture from '../components/Picture';
import Row from '../components/Row';
import ActivityList from '../components/ActivityList';
import TimeTable from '../components/TimeTable';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Elementary = () => {
  const color = getThemeColorForPath('/elementary');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <div style={{ height: '50px' }} />
      <DeptIntro data={{ ...elementaryMeta.elementaryIntro, theme }} />
      <div style={{ height: '10px' }} />
      <Picture data={elementaryMeta.elementaryPhoto} />
      <div style={{ height: '20px' }} />
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

