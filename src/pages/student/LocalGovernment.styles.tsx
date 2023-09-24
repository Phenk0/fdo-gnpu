import styled from "styled-components";
export const GovernorsContainer = styled.section`
  padding: 10px 20%;
  margin-bottom: 20px;
  @media screen and (max-width: 1000px) {
    padding: 5px 10%;
    margin-bottom: 10px;
  }
`;
export const Governor = styled.div`
  margin-bottom: 30px;
  background: var(--gradient-secondary);
  padding: 10px 5px;
  border-radius: 3rem 0;
  box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);

  h3 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  img {
    width: 400px;
    @media screen and (max-width: 1000px) {
      width: 80%;
    }
  }
`;
