import { useState } from 'react';
import './NavbarItem.styles.tsx';
import {
  Plain,
  SidebarContent,
  SidebarItem,
  SidebarTitle,
  SidebarLink,
  ToggleBtn
} from './NavbarItem.styles.tsx';
import { FaChevronDown } from 'react-icons/fa6';

type NavbarItemProps = {
  isOpen?: boolean;
  item: {
    title: string;
    path: string;
    children?: NavbarItemProps['item'][];
  };
};
function NavbarItem({ item, isOpen }: NavbarItemProps) {
  const [open, setOpen] = useState(false);
  if (item.children) {
    return (
      <SidebarItem
        className={open ? 'open' : ''}
        onMouseLeave={() => isOpen && setOpen(false)}
      >
        <SidebarTitle>
          {item.path ? (
            <SidebarLink
              to={item.path}
              onClick={(e) => {
                if (item.path !== 'about') e.preventDefault();
              }}
              style={{ cursor: 'default' }}
            >
              {item.title}
            </SidebarLink>
          ) : (
            <div>{item.title}</div>
          )}
          <ToggleBtn onClick={() => setOpen(!open)}>
            <FaChevronDown size="0.8em" />
          </ToggleBtn>
        </SidebarTitle>
        <SidebarContent>
          {item.children.map((child, index) => (
            <NavbarItem key={index} item={child} />
          ))}
        </SidebarContent>
      </SidebarItem>
    );
  } else {
    return (
      <Plain>
        <SidebarLink to={item.path}>{item.title}</SidebarLink>
      </Plain>
    );
  }
}
export default NavbarItem;
