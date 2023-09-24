import styled from "styled-components";

export const Visitcard = styled.article`
  display: flex;
  justify-content: space-around;
  //margin: 0 auto 20px auto;
  figure {
    width: 45%;
    max-height: 50vh;
    @media screen and (max-width: 800px) {
      margin: 20px 5px;
      width: 50%;
    }
    img {
      width: initial;
      height: initial;
      max-height: 50vh;
      max-width: 95%;
    }
  }
  p {
    width: 45%;
    text-align: justify;
    font-style: italic;
    font-size: 1.2em;
    span {
      display: block;
      width: auto;
      text-align: right;
    }
  }
`;
export const Article = styled.article`
  p {
    span {
      text-align: center;
      font-style: italic;
    }
  }
`;
