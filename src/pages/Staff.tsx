import { staffMeta } from '../content/metadata';
import StaffCard from '../components/StaffCard';

import PageShell from './PageShell';
import { getThemeColorForPath, getThemePalette } from '../lib/pagesConfig';

const Staff = () => {
  const color = getThemeColorForPath('/staff');
  const theme = getThemePalette(color);

  return (
    <PageShell>
      <div style={{ height: '60px' }} />
      <StaffCard data={{ ...staffMeta.staffData, theme }} />
      <div style={{ height: '200px' }} />
    </PageShell>
  );
};

export default Staff;

