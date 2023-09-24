import { GovernorsContainer, Governor } from './LocalGovernment.styles.tsx';
import studentGovernors from '../../data/local-government.json';

function LocalGovernment() {
  return (
    <GovernorsContainer>
      <h2>Студентське самоврядування</h2>
      {studentGovernors.map(
        ({ name, jobTitle, qualification, imageUrl }, index) => {
          return (
            <Governor key={index}>
              <h3>{jobTitle}</h3>
              <img src={imageUrl} alt={jobTitle} />
              <h3>{name}</h3>
              <h4>{qualification}</h4>
            </Governor>
          );
        }
      )}
    </GovernorsContainer>
  );
}

export default LocalGovernment;
