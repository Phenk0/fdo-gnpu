import styled from 'styled-components';

export const DrawerContainer = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  padding: 20px 10px;
  box-sizing: border-box;
  transform: translateX(${({ $isOpen }) => ($isOpen ? 0 : -300)}px);
  transition: transform 0.22s ease-in;
  z-index: 1002;
  background: var(--gradient-primary);
  overflow: auto;
  box-shadow: 15px 0 15px -15px rgba(0, 0, 0, 0.8);

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 15px;

      a {
        color: #363f54;
        font-size: 30px;
        text-decoration: none;
        background-color: #fff;
        position: relative;
        padding: 0 20px 10px 20px;
        transition: opacity 0.3s;

        &:hover,
        .active {
          opacity: 0.7;
        }
      }
    }
  }
`;
