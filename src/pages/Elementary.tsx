import { elementaryMeta } from '../content/metadata';
import DeptIntro from '../components/DeptIntro';
import Picture from '../components/Picture';
import Row from '../components/Row';
import ActivityList from '../components/ActivityList';
import TimeTable from '../components/TimeTable';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';
import { Spacer } from '../lib/pagesUtil';



const Elementary = () => {
  const color = getThemeColorForPath('/elementary');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <DeptIntro data={{ ...elementaryMeta.elementaryIntro, theme }} />
      <Spacer size={40} />
      <Picture data={elementaryMeta.elementaryPhoto} />
      <Spacer />
      <Row
        data={{
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

