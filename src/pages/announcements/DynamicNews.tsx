import LazySuspense from '../../ui/LazySuspense.tsx';
import { lazy } from 'react';
const DynamicAnnouncement = lazy(
  () => import('../../features/announcements/DynamicAnnouncement.tsx')
);
function DynamicNews() {
  return (
    <LazySuspense>
      <DynamicAnnouncement annoType="news" />
    </LazySuspense>
  );
}

export default DynamicNews;
