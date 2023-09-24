import styled from 'styled-components';

export const Aside = styled.aside`
  text-align: center;
  margin: 0 10px;
  min-height: 100vh;
  font-size: 1.1em;
  padding-top: 1px;
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin: 0 10px 0 0;
  }
`;
export const AsideCard = styled.div`
  background: var(--gradient-secondary);
  padding: 5px 5px 10px;
  margin-top: 10px;
  box-shadow: -10px 10px 15px -15px rgb(0 0 0 / 80%);

  h4 {
    text-align: center;
    color: var(--color-secondary);
    text-shadow: var(--text-shadow);
  }
  //& > a {
  //  display: block;
  //  text-align: start;
  //}
  h5 {
    margin: 5px;
    color: var(--color-secondary-darker);
    text-shadow: var(--text-shadow);
    font-size: 1.1rem;
  }

  ul {
    padding: 0;
    margin: 0 0 10px;
    li {
      margin-bottom: 5px;
      & > .active {
        color: var(--color-secondary);
        text-shadow: var(--text-shadow);
        text-decoration: underline;
      }
    }
    li,
    li > a {
      list-style: none;
      text-align: start;
      color: var(--color-secondary-opacity);
      text-shadow: var(--text-shadow);
      //font-size: 1.3rem;
      &:hover {
        color: var(--color-secondary-darker);
      }
      &#war {
        color: black;
        transition: text-shadow 3s ease;
        &:hover {
          text-shadow: 0 0 10px crimson;
        }
      }
    }
    hr {
      border-color: var(--color-primary);
    }
  }
`;
