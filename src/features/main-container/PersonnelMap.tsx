import { PersonnelListContainer } from './PersonnelMap.styles.tsx';

type PersonnelMapProps = {
  personnelList: {
    name: string;
    qualification: string;
    councilTitle: string;
  }[];
};
function PersonnelMap({ personnelList }: PersonnelMapProps) {
  return (
    <PersonnelListContainer>
      {personnelList.map(({ name, qualification, councilTitle }, index) => {
        return (
          <li key={index}>
            <b>{name}</b>, {qualification} – <i>{councilTitle}</i>
            {index !== personnelList.length - 1 ? ';' : '.'}
          </li>
        );
      })}
    </PersonnelListContainer>
  );
}
export default PersonnelMap;
