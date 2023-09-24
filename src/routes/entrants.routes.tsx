import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import LazySuspense from '../ui/LazySuspense.tsx';

const Page404 = lazy(() => import('../ui/Page404.tsx'));
const EntrantsNews = lazy(() => import('../pages/entrants/EntrantsNews.tsx'));
const Introduction = lazy(() => import('../pages/entrants/Introduction.tsx'));
const Specialties = lazy(() => import('../pages/entrants/Specialties.tsx'));
const Rules = lazy(() => import('../pages/entrants/Rules.tsx'));
function Entrants() {
  return (
    <LazySuspense>
      <Routes>
        <Route index Component={Page404} />
        <Route path="news" Component={EntrantsNews} />
        <Route path="introduction" Component={Introduction} />
        <Route path="specialties" Component={Specialties} />
        <Route path="rules" Component={Rules} />
        <Route path="/*" Component={Page404} />
      </Routes>
    </LazySuspense>
  );
}

export default Entrants;
