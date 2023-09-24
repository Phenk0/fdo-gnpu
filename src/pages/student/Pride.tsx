import { PrideContainer, Sportsman } from './Pride.styles.tsx';
import prideSportsmen from '../../data/pride.json';

function Pride() {
  return (
    <PrideContainer>
      <h2>Наша гордість</h2>
      {prideSportsmen.map(
        ({ name, sportTitle, qualification, imageUrl }, index) => {
          return (
            <Sportsman key={index}>
              <h3>{name}</h3>
              <img src={imageUrl} alt={name} />
              <h3>{sportTitle}</h3>
              <h4>{qualification}</h4>
            </Sportsman>
          );
        }
      )}
    </PrideContainer>
  );
}

export default Pride;
