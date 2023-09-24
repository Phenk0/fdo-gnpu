import styled from 'styled-components';
import Spinner from './Spinner.tsx';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: unset;
  padding: 0 15px;
  font-size: 1rem;
  background: var(--gradient-primary);
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', serif;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.3s;

  &:hover {
    background: var(--gradient-secondary);
    color: var(--color-secondary-darker);
    border: 1px solid var(--color-secondary-darker);
  }
`;
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(Spinner)`
  width: 30px;
  height: 30px;
`;
