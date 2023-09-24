import { Link } from 'react-router-dom';
import { GoBackContainer } from './GoBackButton.styles.tsx';
import { FaArrowLeft } from 'react-icons/fa6';

type Props = { position: 'start' | 'end' };
const GoBackButton = ({ position }: Props) => (
  <GoBackContainer $position={position}>
    <p>
      <Link to=".." relative="path">
        <FaArrowLeft size="1.2em" style={{ verticalAlign: 'text-bottom' }} />{' '}
        Повернутися на попередню сторінку
      </Link>
    </p>
  </GoBackContainer>
);

export default GoBackButton;
