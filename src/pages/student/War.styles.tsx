import styled from "styled-components";

export const HeroCard = styled.div`
  background: var(--gradient-secondary);
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px 0;
  box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);
  &::after {
    content: "";
    display: block;
    clear: both;
  }

  @media screen and (min-width: 991px) {
    padding: 25px;
  }

  img {
    max-height: 90vh;
    max-width: 50%;
    height: auto;
    display: inline-block;
    float: left;
    margin: 10px 10px 0 0;
    border: solid 10px black;
    filter: grayscale(1);
    transition: filter 2s ease;

    @media screen and (min-width: 991px) {
      max-width: 40%;
      border: solid 15px black;
    }
    &:hover {
      filter: grayscale(0);
    }
  }
`;
