import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`   
   :root {
    &, &.light-mode {
      --color-primary: #edac2c;
      --color-secondary: #800e0e;
      --color-tertiary: #c97c38;
      //  --color-primary-darker: #fd424b;
      --color-secondary-darker: #800E0EB2;
      //  --color-tertiary-darker: #4bbb7d;
      //  --color-primary-opacity: #edac2c2d;
      --color-secondary-opacity: #800e0e8c;
      //--color-tertiary-opacity: #c97c383a;
      --text-shadow: var(--color-primary) 1px 0 7px;
      --gradient-primary: linear-gradient(90deg, #8d2222d6 0%, var(--color-primary) 100%);
      --gradient-secondary: linear-gradient(129deg, #f8d9af33 0%, #f7c971 100%);
    }
  }

  html {
    @media screen and (min-width: 1600px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 800px) {
      font-size: 0.9rem;
    }
    @media screen and (max-width: 650px) {
      font-size: 0.8rem;
    }
  }

  body {
    margin: 0;
    background-color: #fedcac;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #303030;

    #root {
      max-width: 2000px;
      background-color: white;
      box-shadow: 0 0 15px -5px black;
      margin: 0 auto;
    }

    img {
      max-width: 100%;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  a {
    text-decoration: none;
    color: #303030;
  }

  * {
    box-sizing: border-box;
  }

  .main {
    display: flex;
    height: 100vh;
  }


  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--color-secondary-darker) var(--color-primary);
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: var(--color-primary);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary-darker);
    border-radius: 20px;
    border: 3px solid var(--color-primary);
  }

  //  /* GENERAL ELEMENTS */
  //.section {
  //  padding: 5rem 3rem;
  //  border-top: 1px solid #ddd;
  //
  //  transition: transform 1s, opacity 1s;
  //}
  //
  //.section--hidden {
  //  opacity: 0;
  //  transform: translateY(8rem);
  //}
  //
  //.section__title {
  //  max-width: 80rem;
  //  margin: 0 auto 8rem auto;
  //}
  //
  //.section__description {
  //  font-size: 1.8rem;
  //  font-weight: 600;
  //  text-transform: uppercase;
  //  color: var(--color-primary);
  //  margin-bottom: 1rem;
  //}
  //
  //.section__header {
  //  font-size: 4rem;
  //  line-height: 1.3;
  //  font-weight: 500;
  //}

  // SVG ICON STYLES
  .image-gallery {
    img {
      box-shadow: none;
    }
  }

  .image-gallery-icon {

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: var(--color-primary);
      }
    }

    &:focus {
      // a11y support
      outline: 2px solid var(--color-primary);
    }
  }

  .image-gallery-bullets .image-gallery-bullet {
    &:focus {
      background: var(--color-primary);
      border: 1px solid var(--color-primary);
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: var(--color-primary);
        border: 1px solid var(--color-primary);
      }

      &.active:hover {
        background: var(--color-primary);
      }
    }
  }


  .image-gallery-thumbnail {
    width: auto;
    max-width: 100px;

    &.active,
    &:focus {
      border: 4px solid var(--color-primary);

      @media (max-width: 768px) {
        border: 3px solid var(--color-primary);
      }
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border: 4px solid var(--color-primary);

        @media (max-width: 768px) {
          border: 3px solid var(--color-primary);
        }
      }
    }

  }
`;

type ShadowedBlockProps = {
  $isInset?: boolean;
};
export const ShadowedBlock = styled.div<ShadowedBlockProps>`
  box-shadow:
    0 0 17px -8px white,
    ${({ $isInset }) => ($isInset ? 'inset' : '')} 0 0 10px -3px black;
  padding: 0.1rem 0.7rem;
  margin-bottom: 10px;
`;
export default GlobalStyles;
