import Department from '../../features/main-container/Department.tsx';
import personnelKTMDO from '../../data/personnel-ktmdo.json';

function KtmdoDepartment() {
  return (
    <Department
      title="КАФЕДРА ДОШКІЛЬНОЇ ПЕДАГОГІКИ І ПСИХОЛОГІЇ"
      departmentPersonnel={personnelKTMDO}
    />
  );
}

export default KtmdoDepartment;
