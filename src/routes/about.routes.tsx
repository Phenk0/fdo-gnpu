import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import LazySuspense from '../ui/LazySuspense.tsx';

const AboutFaculty = lazy(() => import('../pages/about/AboutFaculty.tsx'));
const Deanery = lazy(() => import('../pages/about/Deanery.tsx'));
const KdppDepartment = lazy(() => import('../pages/about/KdppDepartment.tsx'));
const KtmdoDepartment = lazy(
  () => import('../pages/about/KtmdoDepartment.tsx')
);
const KtmfvDepartment = lazy(
  () => import('../pages/about/KtmfvDepartment.tsx')
);
const KdppTeacherProfile = lazy(
  () => import('../pages/about/KdppTeacherProfile.tsx')
);
const KtmdoTeacherProfile = lazy(
  () => import('../pages/about/KtmdoTeacherProfile.tsx')
);
const KtmfvTeacherProfile = lazy(
  () => import('../pages/about/KtmfvTeacherProfile.tsx')
);
const AcademicCouncil = lazy(
  () => import('../pages/about/AcademicCouncilPersonnel.tsx')
);
const AcademicCouncilWorkPlan = lazy(
  () => import('../pages/about/AcademicCouncilWorkPlan.tsx')
);
const Regulations = lazy(() => import('../pages/about/Regulations.tsx'));
const StakeholdersPersonnel = lazy(
  () => import('../pages/about/StakeholdersPersonnel.tsx')
);
const StakeholdersPlan = lazy(
  () => import('../pages/about/StakeholdersPlan.tsx')
);
const StakeholdersProvisions = lazy(
  () => import('../pages/about/StakeholdersProvisions.tsx')
);
const CareerGuidance = lazy(() => import('../pages/about/CareerGuidance.tsx'));
const Mtb = lazy(() => import('../pages/about/Mtb.tsx'));
const Page404 = lazy(() => import('../ui/Page404.tsx'));

function About() {
  return (
    <LazySuspense>
      <Routes>
        <Route index Component={AboutFaculty} />
        <Route path="deanery" Component={Deanery} />
        <Route path="departments/kdpp" Component={KdppDepartment} />
        <Route path={'departments/kdpp/:id'} Component={KdppTeacherProfile} />
        <Route path="departments/ktmdo" Component={KtmdoDepartment} />
        <Route path={'departments/ktmdo/:id'} Component={KtmdoTeacherProfile} />
        <Route path="departments/ktmfv" Component={KtmfvDepartment} />
        <Route path={'departments/ktmfv/:id'} Component={KtmfvTeacherProfile} />
        <Route path="academic-council-personnel" Component={AcademicCouncil} />
        <Route
          path="academic-council-work-plan"
          Component={AcademicCouncilWorkPlan}
        />
        <Route path="regulations" Component={Regulations} />
        <Route
          path="stakeholders/personnel"
          Component={StakeholdersPersonnel}
        />
        <Route path="stakeholders/plan" Component={StakeholdersPlan} />
        <Route
          path="stakeholders/provisions"
          Component={StakeholdersProvisions}
        />
        <Route path="proforientation" Component={CareerGuidance} />
        <Route path="mtb" Component={Mtb} />
        <Route path="/*" Component={Page404} />
      </Routes>
    </LazySuspense>
  );
}

export default About;
