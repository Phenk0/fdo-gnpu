import styled from "styled-components";
import { Link } from "react-router-dom";
export const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  background-color: #fff;

  @media screen and (max-width: 800px) {
    width: auto;
    padding: 0;
  }
  @media screen and (max-width: 526px) {
    font-size: 0.6rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    padding-left: 20px;

    h1 {
      color: var(--color-secondary);
      font-size: 2.5em;
      text-shadow: 1px 1px 2px red, 0 0 1em #725f09, 0 0 0.2em #c8af22;
    }

    h3 {
      font-size: 1.5em;
      color: var(--color-secondary);
      text-shadow: var(--text-shadow);
    }
  }
`;
export const Logo = styled.img`
  margin: auto;
  max-width: 12em;
  //font-size: x-large;
`;

export const Gaudeamus = styled.div`
  padding: 1em 0;
  color: white;
  text-align: center;
  font-weight: bold;
  font-style: italic;
  background: var(--gradient-primary);
  box-shadow: 0 15px 15px -15px rgb(0 0 0 / 80%);

  p {
    margin: 0;
  }
`;
