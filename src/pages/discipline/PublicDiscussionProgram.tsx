import { mapPrograms, programs23_24DO, programs23_24FV } from './Programs.tsx';
import GoBackButton from '../../ui/GoBackButton.tsx';
import { FaRegEnvelope } from 'react-icons/fa6';

function PublicDiscussion() {
  return (
    <>
      <GoBackButton position="start" />
      <h2>ГРОМАДСЬКЕ ОБГОВОРЕННЯ ОСВІТНІЙ ПРОГРАМ</h2>
      <h2>Пропонуються до громадського обговорення проєкти ОПП</h2>
      <h3>Спеціальність 012 Дошкільна освіта</h3>
      {mapPrograms(programs23_24DO)}
      <h3>Спеціальність 014 Середня освіта (Фізична культура)</h3>
      {mapPrograms(programs23_24FV)}
      <br />
      <h3>
        Пропозиції та зауваження просимо надсилати на адресу{' '}
        <a href="mailto:dfdo@gnpu.edu.ua">
          dfdo@gnpu.edu.ua{' '}
          <FaRegEnvelope size="1.2em" style={{ verticalAlign: 'bottom' }} />
        </a>
      </h3>
    </>
  );
}
export default PublicDiscussion;
