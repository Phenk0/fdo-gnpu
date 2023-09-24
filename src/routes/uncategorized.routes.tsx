import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import LazySuspense from '../ui/LazySuspense.tsx';
const MapPage = lazy(() => import('../pages/etc/MapPage.tsx'));
const Military = lazy(() => import('../pages/etc/Military.tsx'));
const TrustMailbox = lazy(() => import('../pages/etc/TrustMailbox.tsx'));
const DynamicAnnouncement = lazy(
  () => import('../features/announcements/DynamicAnnouncement.tsx')
);
const VacanciesList = lazy(() => import('../pages/etc/VacanciesList.tsx'));
const Announcements = lazy(
  () => import('../pages/announcements/AnnouncementsAll.tsx')
);
const Comments = lazy(() => import('../pages/etc/Comments.tsx'));
const AlumniAssociation = lazy(
  () => import('../pages/etc/AlumniAssociation.tsx')
);
const Page404 = lazy(() => import('../ui/Page404.tsx'));

function Uncategorized() {
  return (
    <LazySuspense>
      <Routes>
        <Route index element={<Navigate replace to="announcements-all" />} />
        <Route path="announcements-all" Component={Announcements} />
        <Route path="announcements-all/:id" Component={DynamicAnnouncement} />
        <Route path="trust-mailbox" Component={TrustMailbox} />
        <Route path="vacancies-list" Component={VacanciesList} />
        <Route path="comments" Component={Comments} />
        <Route path="alumni-association" Component={AlumniAssociation} />
        <Route path="military-record" Component={Military} />
        <Route path="map" Component={MapPage} />
        <Route path="*" Component={Page404} />
      </Routes>
    </LazySuspense>
  );
}

export default Uncategorized;
