import styled from 'styled-components';

export const Address = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background: var(--gradient-primary);

  a {
    color: #fff;
    padding: 10px 10px;
  }
  .optional {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;
