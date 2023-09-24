import Department from '../../features/main-container/Department.tsx';
import personnelKTMFV from '../../data/personnel-ktmfv.json';

function KtmfvDepartment() {
  return (
    <Department
      title="КАФЕДРА ДОШКІЛЬНОЇ ПЕДАГОГІКИ І ПСИХОЛОГІЇ"
      departmentPersonnel={personnelKTMFV}
    />
  );
}

export default KtmfvDepartment;
