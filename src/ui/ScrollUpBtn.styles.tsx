import styled from 'styled-components';
export const BackToTop = styled.button`
  bottom: 60px;
  right: 60px;
  position: fixed;
  z-index: 1002;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: var(--color-secondary);
  background-image: var(--gradient-primary);
  opacity: 0.5;
  border: none;
  border-radius: 50%;
  transition: 200ms;
  transform: translateX(50%) translateY(50%);

  @media screen and (min-width: 768px) {
    bottom: 80px;
    right: 80px;
    width: 75px;
    height: 75px;
    svg {
      width: 30px;
      height: 30px;
    }
  }

  svg {
    fill: white;
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
  }

  &:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    opacity: 1;
    width: 65px;
    height: 65px;
    @media screen and (min-width: 768px) {
      width: 80px;
      height: 80px;
    }

    svg {
      animation: bounce 2s infinite linear;
    }
    &:focus {
      outline: none;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateX(-50%) translateY(-50%);
    }
    25% {
      transform: translateX(-50%) translateY(-65%);
    }
    50% {
      transform: translateX(-50%) translateY(-50%);
    }
    75% {
      transform: translateX(-50%) translateY(-35%);
    }
    100% {
      transform: translateX(-50%) translateY(-50%);
    }
  }
`;
