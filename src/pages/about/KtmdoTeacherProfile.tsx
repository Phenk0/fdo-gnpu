import personnelKTMDO from '../../data/personnel-ktmdo.json';
import TeacherProfile from '../../features/main-container/TeacherProfile.tsx';

function KtmdoTeacherProfile() {
  return <TeacherProfile departmentPersonnel={personnelKTMDO} />;
}

export default KtmdoTeacherProfile;
