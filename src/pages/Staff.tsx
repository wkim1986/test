import { staffMeta } from '../content/metadata';
import Gap from '../components/Gap';
import StaffCard from '../components/StaffCard';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Staff = () => {
  const color = getThemeColorForPath('/staff');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <Gap data={{ height: '60px' }} />
      <StaffCard data={{ ...staffMeta.staffData, theme }} />
      <Gap data={{ height: '200px' }} />
    </PageShell>
  );
};

export default Staff;

