import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import LazySuspense from '../ui/LazySuspense.tsx';

const Page404 = lazy(() => import('../ui/Page404.tsx'));
const LocalGovernment = lazy(
  () => import('../pages/student/LocalGovernment.tsx')
);
const Starostat = lazy(() => import('../pages/student/Starostat.tsx'));
const Rating = lazy(() => import('../pages/student/Rating.tsx'));
const Science = lazy(() => import('../pages/student/Science.tsx'));
const Extracurricular = lazy(
  () => import('../pages/student/Extracurricular.tsx')
);
const StudentWar = lazy(() => import('../pages/student/War.tsx'));
const Pride = lazy(() => import('../pages/student/Pride.tsx'));
function Student() {
  return (
    <LazySuspense>
      <Routes>
        <Route index Component={Page404} />
        <Route path="local-government" Component={LocalGovernment} />
        <Route path="starostat" Component={Starostat} />
        <Route path="rating" Component={Rating} />
        <Route path="science" Component={Science} />
        <Route path="extracurricular" Component={Extracurricular} />
        <Route path="war" Component={StudentWar} />
        <Route path="pride" Component={Pride} />
        <Route path="/*" Component={Page404} />
      </Routes>
    </LazySuspense>
  );
}
export default Student;
