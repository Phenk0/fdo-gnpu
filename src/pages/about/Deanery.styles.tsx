import styled from "styled-components";
export const DeanerySection = styled.div`
  padding: 5px 10%;
  margin-bottom: 10px;
  @media screen and (min-width: 1000px) {
    padding: 10px 20%;
    margin-bottom: 20px;
  }
`;
export const Teacher = styled.div`
  margin: 0 auto 30px;
  max-width: 600px;
  background: var(--gradient-secondary);
  padding: 10px 5px;
  border-radius: 3rem 0;
  box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);

  h3 {
    font-size: 1.4rem;

    &:first-child {
      text-shadow: 0 0 3px #fff;
    }
  }

  h4 {
    font-size: 1.2rem;
  }

  p {
    text-align: center !important;
    padding: 0 10px;
  }

  address {
    font-size: 1.2rem;

    a {
      color: black;
      text-shadow: none;
    }
  }

  img {
    width: 80%;
    @media screen and (min-width: 1000px) {
      max-width: 400px;
    }
  }
`;
