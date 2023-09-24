import styled from 'styled-components';

type GoBackContainerProps = { $position: 'start' | 'end' };
export const GoBackContainer = styled.div<GoBackContainerProps>`
  text-align: ${({ $position }) => $position};
  p {
    margin: 0;
    padding: 0 5px;
    color: var(--color-secondary-opacity);
    text-shadow: var(--text-shadow);
    display: inline-block;
    cursor: pointer;
    &:hover {
      color: var(--color-secondary-darker);
    }
  }
`;
