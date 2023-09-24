import styled from "styled-components";

export const Footer = styled.footer`
  padding: 2rem 3rem;
  background: var(--gradient-primary);
  box-shadow: 0px -15px 15px -15px rgb(0 0 0 / 80%);

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    z-index: 2;
    a {
      margin: 0 auto;
      max-width: 15%;
      img {
        max-height: 15vh;
      }
      &:hover {
        animation: bounceFooter 2s infinite linear;

        &:focus {
          outline: none;
        }
      }
    }
  }
  p {
    text-align: left;
    z-index: 2;
  }

  @keyframes bounceFooter {
    0% {
      transform: translateY(0%);
    }
    25% {
      transform: translateX(-2%) translateY(-2%);
    }
    50% {
      transform: translateY(0%);
    }
    75% {
      transform: translateX(2%) translateY(-2%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;
