import styled from "styled-components";

export const MainContentContainer = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 0px;
  }
  @media screen and (min-width: 1232px) {
    grid-template-columns: 7fr 3fr;
  }
`;
export const PageContainer = styled.main`
  margin: 10px;
  padding: 10px;
  text-align: center;

  @media screen and (max-width: 640px) {
    margin: 0;
  }
  h2 {
    color: var(--color-secondary);
    text-shadow: var(--text-shadow);
    margin: 2rem auto 2rem;
  }
  h3 {
    font-size: 1.3em;
    margin-bottom: 0.7em;
  }
  h4 {
    font-size: 1.2em;
    margin-bottom: 1em;
  }
  a {
    padding: 0 5px;
    color: var(--color-secondary-opacity);
    text-shadow: var(--text-shadow);
    font-size: 1.3rem;
    &:hover {
      color: var(--color-secondary-darker);
    }
  }
  p {
    text-align: justify;
    font-size: 1.2rem;
  }
  ul {
    list-style: none;
    padding-left: 20px;
    text-align: justify;
    li {
      font-size: 1.2rem;
      margin-bottom: inherit;
    }
  }
  img {
    box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);
  }
  hr {
    border-color: var(--color-primary);
  }
`;
