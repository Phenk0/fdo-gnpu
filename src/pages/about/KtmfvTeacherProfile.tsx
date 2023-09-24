import personnelKTMFV from '../../data/personnel-ktmfv.json';
import TeacherProfile from '../../features/main-container/TeacherProfile.tsx';

function KtmfvTeacherProfile() {
  return <TeacherProfile departmentPersonnel={personnelKTMFV} />;
}

export default KtmfvTeacherProfile;
