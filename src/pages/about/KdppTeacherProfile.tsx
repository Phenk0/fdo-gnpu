import personnelKDPP from '../../data/personnel-kdpp.json';
import TeacherProfile from '../../features/main-container/TeacherProfile.tsx';

function KdppTeacherProfile() {
  return <TeacherProfile departmentPersonnel={personnelKDPP} />;
}

export default KdppTeacherProfile;
