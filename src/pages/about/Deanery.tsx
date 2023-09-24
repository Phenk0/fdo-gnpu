import { DeanerySection, Teacher } from './Deanery.styles.tsx';
import deaneryPersonnel from '../../data/deanery.json';
import { FaPhone } from 'react-icons/fa6';
import { BsEnvelopeAt } from 'react-icons/bs';
function Deanery() {
  return (
    <>
      <DeanerySection>
        <h2>ДЕКАНАТ</h2>
        {deaneryPersonnel.map((teacher, index) => {
          const {
            name,
            jobTitle,
            qualification,
            imageUrl,
            contacts: { tel, email }
          } = teacher;

          return (
            <Teacher key={index}>
              <h3>{jobTitle}</h3>
              <img src={imageUrl} alt={name} />
              <h3>{name}</h3>
              <h4>{qualification}</h4>
              <address>
                Контакти:
                <br />
                <a href={`tel:${tel}`}>
                  <FaPhone style={{ verticalAlign: 'bottom' }} />
                  &nbsp;{tel}
                </a>
                ,
                <br />
                <a href={`mailto:${email}`}>
                  <BsEnvelopeAt style={{ verticalAlign: 'bottom' }} />
                  &nbsp;{email}
                </a>
              </address>
            </Teacher>
          );
        })}
      </DeanerySection>
      <DeanerySection>
        <h3>Графік роботи деканату:</h3>
        <p>Понеділок – четвер з 8:00 до 17:15 год.</p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>П'ятниця з 8:00 до 16:00 год.</p>
        <p>Обідня перерва: з 12:00 до 13:00 год.</p>
        <p>Видача довідок: четвер з 14:00 год.</p>
        <p>
          Прийом громадян деканом з особистих питань з 10:00 до 12:00 год
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          щоп'ятниці.
        </p>
        <p>
          Старостат проводиться деканом факультету щовівторка з 13:00 год
          (аудиторія №40).
        </p>
        <p>
          Збори студентського самоврядування факультету – кожен третій четвер
          місяця.
        </p>
      </DeanerySection>
    </>
  );
}

export default Deanery;
