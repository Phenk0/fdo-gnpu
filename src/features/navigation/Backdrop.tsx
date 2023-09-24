import { BackdropBtn } from './Backdrop.styles.tsx';

type BackdropComponentProps = {
  onClick: () => void;
};
const Backdrop = ({ onClick }: BackdropComponentProps) => (
  <BackdropBtn onClick={onClick} />
);
export default Backdrop;
