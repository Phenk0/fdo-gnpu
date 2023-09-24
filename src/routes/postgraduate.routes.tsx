import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import LazySuspense from '../ui/LazySuspense.tsx';
const Page404 = lazy(() => import('../ui/Page404.tsx'));
const Onp = lazy(() => import('../pages/postgraduate/Onp.tsx'));
const Plans = lazy(() => import('../pages/postgraduate/Plans.tsx'));
const SyllabusPostgraduate = lazy(
  () => import('../pages/postgraduate/Syllabus.tsx')
);
const Postgraduates = lazy(
  () => import('../pages/postgraduate/Postgraduates.tsx')
);
const Personnel = lazy(() => import('../pages/postgraduate/Personnel.tsx'));
function Postgraduate() {
  return (
    <LazySuspense>
      <Routes>
        <Route index Component={Page404} />
        <Route path="onp" Component={Onp} />
        <Route path="plans" Component={Plans} />
        <Route path="syllabus" Component={SyllabusPostgraduate} />
        <Route path="postgraduates" Component={Postgraduates} />
        <Route path="personnel" Component={Personnel} />
        <Route path="/*" Component={Page404} />
      </Routes>
    </LazySuspense>
  );
}
export default Postgraduate;
