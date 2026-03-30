import { kidsMeta } from '../content/metadata';
import DeptIntro from '../components/DeptIntro';
import Gap from '../components/Gap';
import Picture from '../components/Picture';
import Row from '../components/Row';
import ActivityList from '../components/ActivityList';
import TimeTable from '../components/TimeTable';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Kids = () => {
  const themeColor = getThemeColorForPath('/kids');
  const theme = getThemePalette(themeColor);

  return (
    <PageShell>
      <Gap data={{ height: '50px' }} />
      <DeptIntro data={{ ...kidsMeta.kidsIntro, theme }} />
      <Gap data={{ height: '10px' }} />
      <Picture data={kidsMeta.kidsPhoto} />
      <Gap data={{ height: '20px' }} />
      <Row
        data={{
          gap: '40px',
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

