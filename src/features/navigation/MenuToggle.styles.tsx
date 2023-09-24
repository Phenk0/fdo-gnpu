import styled, { css } from 'styled-components';

type MenuToggleProps = {
  $isOpen: boolean;
};
export const MenuToggleBtn = styled.i<MenuToggleProps>`
  position: fixed;
  top: 100px;
  left: ${({ $isOpen }) => ($isOpen ? '320px' : '20px')};
  font-size: 2.3em;
  cursor: pointer;
  transition:
    opacity,
    left 0.22s ease-in;
  z-index: 1002;
  color: ${({ $isOpen }) =>
    $isOpen ? css`var(--color-primary)` : css`var(--color-secondary-darker)`};
  padding: 20px;

  @media screen and (max-width: 800px) {
    top: 90px;
  }
  @media screen and (max-width: 526px) {
    top: 70px;
  }

  &:hover {
    opacity: 0.7;
  }

  svg {
    -webkit-animation: rotating 5s linear infinite;
    -moz-animation: rotating 5s linear infinite;
    -ms-animation: rotating 5s linear infinite;
    -o-animation: rotating 5s linear infinite;
    animation: rotating 5s linear infinite;
  }

  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
