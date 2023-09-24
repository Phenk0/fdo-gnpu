import Backdrop from './Backdrop.tsx';
import navLinks from '../../data/navbar.json';

import NavbarItem from './NavbarItem.tsx';
import { DrawerContainer } from './Drawer.styles.tsx';

type DrawerProps = {
  onClose: () => void;
  isOpen: boolean;
};
function Drawer({ onClose, isOpen }: DrawerProps) {
  return (
    <>
      <DrawerContainer $isOpen={isOpen}>
        <ul>
          {navLinks.map((item, index) => (
            <NavbarItem key={index} item={item} isOpen={isOpen} />
          ))}
        </ul>
      </DrawerContainer>
      {isOpen && <Backdrop onClick={onClose} />}
    </>
  );
}
export default Drawer;
