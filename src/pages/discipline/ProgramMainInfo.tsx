import { AccreditationList } from './Program.styles.tsx';
import { Link } from 'react-router-dom';

type Props = {
  programInfo: {
    title: string;
    degree: string;
    qualification: string;
    specialty: string;
    guarantor: {
      name: string;
      linkTo: string;
      description: string;
    };
  };
};
function ProgramMainInfo({
  programInfo: { title, degree, qualification, specialty, guarantor }
}: Props) {
  return (
    <AccreditationList>
      <li>
        <b>Освітньо-професійна програма:</b> «{title}»
      </li>
      <li>
        <b>Освітній ступінь:</b> {degree}
      </li>
      <li>
        <b>Тип освітньої програми:</b> Освітньо-професійна
      </li>
      <li>
        <b>Галузь знань:</b> 01 Освіта/Педагогіка
      </li>
      <li>
        <b>Спеціальність:</b> {specialty}
      </li>
      <li>
        <b>Кваліфікація:</b> {qualification}
      </li>
      <li>
        <b>Гарант освітньої програми:</b>
        <Link to={guarantor.linkTo}> {guarantor.name}</Link>,{' '}
        {guarantor.description}
      </li>
    </AccreditationList>
  );
}
export default ProgramMainInfo;
