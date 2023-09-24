import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LazySuspense from '../ui/LazySuspense.tsx';

const SportLabPersonnel = lazy(
  () => import('../pages/science/SportLabPersonnel.tsx')
);
const SportLabPlan = lazy(() => import('../pages/science/SportLabPlan.tsx'));
const SportLabReport = lazy(
  () => import('../pages/science/SportLabReport.tsx')
);
const ChildHealthPersonnel = lazy(
  () => import('../pages/science/ChildHealthPersonnel.tsx')
);
const ChildHealthPlan = lazy(
  () => import('../pages/science/ChildHealthPlan.tsx')
);
const ChildHealthReport = lazy(
  () => import('../pages/science/ChildHealthReport.tsx')
);
const InternationalReport = lazy(
  () => import('../pages/science/InternationalReport.tsx')
);
const InternationalPlan = lazy(
  () => import('../pages/science/InternationalPlan.tsx')
);
const JeanMonnet = lazy(
  () => import('../pages/science/InternationalJeanMonnet.tsx')
);
const Lego = lazy(() => import('../pages/science/Lego.tsx'));
const Page404 = lazy(() => import('../ui/Page404.tsx'));

const Science = () => (
  <LazySuspense>
    <Routes>
      <Route index Component={Page404} />
      <Route
        path="research/sport-lab/personnel"
        Component={SportLabPersonnel}
      />
      <Route path="research/sport-lab/plan" Component={SportLabPlan} />
      <Route path="research/sport-lab/report" Component={SportLabReport} />
      <Route
        path="research/child-health/personnel"
        Component={ChildHealthPersonnel}
      />
      <Route path="research/child-health/plan" Component={ChildHealthPlan} />
      <Route
        path="research/child-health/report"
        Component={ChildHealthReport}
      />
      <Route path="international/report" Component={InternationalReport} />
      <Route path="international/plan" Component={InternationalPlan} />
      <Route path="international/jean-monnet" Component={JeanMonnet} />
      <Route path="lego" Component={Lego} />
      <Route path="/*" Component={Page404} />
    </Routes>
  </LazySuspense>
);
export default Science;
