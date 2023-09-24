import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import LazySuspense from '../ui/LazySuspense.tsx';

const EducationalSchedule = lazy(
  () => import('../pages/discipline/EducationalSchedule.tsx')
);
const AttestationSchedule = lazy(
  () => import('../pages/discipline/AttestationSchedule.tsx')
);
const ExamsSchedule = lazy(
  () => import('../pages/discipline/SessionSchedule.tsx')
);
const Programs = lazy(() => import('../pages/discipline/Programs.tsx'));
const PublicDiscussion = lazy(
  () => import('../pages/discipline/PublicDiscussionProgram.tsx')
);
const PreschoolEnglishProgram = lazy(
  () => import('../pages/discipline/PreschoolEnglishProgram.tsx')
);
const PreschoolPhysicalProgram = lazy(
  () => import('../pages/discipline/PreschoolPhysicalProgram.tsx')
);
const PhysicalSportTouristProgram = lazy(
  () => import('../pages/discipline/PhysicalSportTouristProgram.tsx')
);
const RegulatoryOK = lazy(() => import('../pages/discipline/RegulatoryOk.tsx'));
const SelectiveOK = lazy(() => import('../pages/discipline/SelectiveOk.tsx'));
const Dual = lazy(() => import('../pages/discipline/Dual.tsx'));
const GuestLectures = lazy(
  () => import('../pages/discipline/GuestLectures.tsx')
);
const GuestLecture = lazy(() => import('../pages/discipline/GuestLecture.tsx'));
const SemiAttestation = lazy(
  () => import('../pages/discipline/ResultsAttestationSemi.tsx')
);
const FinalAttestation = lazy(
  () => import('../pages/discipline/ResultsAttestationFinal.tsx')
);
const Practices = lazy(() => import('../pages/discipline/Practices.tsx'));
const Page404 = lazy(() => import('../ui/Page404.tsx'));

function Discipline() {
  return (
    <LazySuspense>
      <Routes>
        <Route index Component={Page404} />
        <Route path="educational-schedule" Component={EducationalSchedule} />
        <Route
          path="examination/attestation-schedule"
          Component={AttestationSchedule}
        />
        <Route path="examination/session-schedule" Component={ExamsSchedule} />
        <Route path="programs">
          <Route index Component={Programs} />
          <Route path="public-discussion" Component={PublicDiscussion} />
          <Route path="preschool-english" Component={PreschoolEnglishProgram} />
          <Route
            path="preschool-physical"
            Component={PreschoolPhysicalProgram}
          />
          <Route
            path="physical-education-and-organization-of-sports-mass-and-tourist-work"
            Component={PhysicalSportTouristProgram}
          />
        </Route>
        <Route path="regulatory-ok" Component={RegulatoryOK} />
        <Route path="selective-ok" Component={SelectiveOK} />
        <Route path="dual" Component={Dual} />
        <Route path="practices" Component={Practices} />
        <Route path="guest-lectures" Component={GuestLectures} />
        <Route path="guest-lectures/:id" Component={GuestLecture} />
        <Route path="results-attestation/semi" Component={SemiAttestation} />
        <Route path="results-attestation/final" Component={FinalAttestation} />
        <Route path="/*" Component={Page404} />
      </Routes>
    </LazySuspense>
  );
}
export default Discipline;
