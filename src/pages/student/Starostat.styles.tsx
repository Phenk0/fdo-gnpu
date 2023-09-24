import styled from "styled-components";
export const StarostatContainer = styled.section`
  padding: 10px 20%;
  margin-bottom: 20px;
  @media screen and (max-width: 1000px) {
    padding: 5px 10%;
    margin-bottom: 10px;
  }
`;
export const Starota = styled.div`
  margin-bottom: 30px;
  background: var(--gradient-secondary);
  padding: 10px 5px;
  border-radius: 3rem 0;
  box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);

  h3 {
    font-size: 1.4rem;
  }

  img {
    width: 400px;
    @media screen and (max-width: 1000px) {
      width: 80%;
    }
  }
`;
