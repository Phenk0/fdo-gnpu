import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarLink = styled(NavLink)`
  color: #fff;
  &.active {
    text-shadow: 0 0 7px white;
    text-decoration: underline;
  }
`;

export const ToggleBtn = styled.i`
  cursor: pointer;
  transition: transform 0.3s;
`;
export const SidebarTitle = styled.div`
  display: flex;
  color: #fff;
  font-size: 1.2em;
  justify-content: flex-start;
  align-items: center;

  span i {
    display: inline-block;
    width: 1.5em;
  }
`;
export const SidebarContent = styled.div`
  padding-top: 0.25em;
  height: 0;
  overflow: hidden;
`;
export const SidebarItem = styled.div`
  padding: 0.75em 1em;
  display: block;
  transition: background-color 0.15s;
  border-radius: 5px;

  svg {
    height: 2.5rem;
    width: 2.5rem;
    fill: white;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.open > ${SidebarTitle} ${ToggleBtn} {
    transform: rotate(180deg);
  }
  &.open > ${SidebarContent} {
    height: auto;
  }
`;
export const Plain = styled(SidebarItem)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  .active {
    text-shadow: 0 0 4px white;
  }
`;
