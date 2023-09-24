import { MenuToggleBtn } from './MenuToggle.styles.tsx';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

type MenuToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};
function MenuToggle({ isOpen, onToggle }: MenuToggleProps) {
  return (
    <MenuToggleBtn $isOpen={isOpen} onClick={onToggle}>
      {isOpen ? <FaTimes /> : <FaBars />}
    </MenuToggleBtn>
  );
}
export default MenuToggle;
