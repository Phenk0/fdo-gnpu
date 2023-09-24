import Department from '../../features/main-container/Department.tsx';

import personnelKDPP from '../../data/personnel-kdpp.json';

function KdppDepartment() {
  return (
    <Department
      title="КАФЕДРА ДОШКІЛЬНОЇ ПЕДАГОГІКИ І ПСИХОЛОГІЇ"
      departmentPersonnel={personnelKDPP}
    />
  );
}

export default KdppDepartment;
