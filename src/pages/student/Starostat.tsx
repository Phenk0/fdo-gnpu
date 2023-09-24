import starostat from '../../data/starostat.json';
import { StarostatContainer, Starota } from './Starostat.styles.tsx';

function Starostat() {
  return (
    <StarostatContainer>
      <h2>Старостат</h2>
      {starostat.map(({ name, group, imageURL }, index) => {
        return (
          <Starota key={index}>
            <h3>Староста {group} групи</h3>
            <img src={imageURL} alt={group} />
            <h3>{name}</h3>
          </Starota>
        );
      })}
    </StarostatContainer>
  );
}

export default Starostat;
