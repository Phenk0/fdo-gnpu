import styled from "styled-components";

export const PresentationCard = styled.div`
  background: var(--gradient-secondary);
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px 0;
  box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);

  @media screen and (min-width: 991px) {
    padding: 25px;
  }

  img {
    box-shadow: none !important;
  }
`;
