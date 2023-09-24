import { AdditionalText } from './StakeholdersPersonnel.styled.tsx';
import stakeholdersPersonnel from '../../data/stakeholders.json';
import PersonnelMap from '../../features/main-container/PersonnelMap.tsx';

function StakeholdersPersonnel() {
  return (
    <>
      <h2>Склад ради стейкхолдерів спеціальності 012 Дошкільна освіта</h2>
      <PersonnelMap personnelList={stakeholdersPersonnel} />
      <AdditionalText>
        Склад ради стейкхолдерів спеціальності 012 Дошкільна освіта затверджено
        рішенням вченої ради факультету (протокол № 1 від 30.08.2022)
      </AdditionalText>
    </>
  );
}
export default StakeholdersPersonnel;
