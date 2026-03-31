import { kidsMeta } from '../content/metadata';
import DeptIntro from '../components/DeptIntro';
import Picture from '../components/Picture';
import Row from '../components/Row';
import ActivityList from '../components/ActivityList';
import TimeTable from '../components/TimeTable';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';
import { Spacer } from '../lib/pagesUtil';

const Kids = () => {
  const color = getThemeColorForPath('/kids');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <DeptIntro data={{ ...kidsMeta.kidsIntro, theme }} />
      <Spacer size={40} />
      <Picture data={kidsMeta.kidsPhoto} />
      <Spacer />
      <Row
        data={{
          children: [
            <ActivityList key="kids-activity" data={{ ...kidsMeta.kidsActivity, theme }} />,
            <TimeTable key="kids-time" data={{ ...kidsMeta.kidsTime, theme }} />,
          ],
        }}
      />
    </PageShell>
  );
};

export default Kids;

