import { AdditionalText } from './AcademicCouncil.styled.tsx';
import academicCouncilPersonnel from '../../data/academic-council.json';
import PersonnelMap from '../../features/main-container/PersonnelMap.tsx';

function AcademicCouncilPersonnel() {
  return (
    <>
      <h2>Вчена рада факультету</h2>
      <PersonnelMap personnelList={academicCouncilPersonnel} />
      <AdditionalText>
        Склад вченої ради факультету дошкільної освіти затверджено наказом
        ректора Глухівського НПУ ім. О.Довженка «Про затвердження складу вчених
        рад факультетів, інститутів» № 297 від 13.09.2022.
      </AdditionalText>
    </>
  );
}
export default AcademicCouncilPersonnel;
