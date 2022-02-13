import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
    width: fit-content;
    min-width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

input, select, textarea {
    font-family: 'Verdana';
}

#__next {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

main {
  display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    padding: 1rem 0.5rem;
    justify-content: center;
    align-items: center;
}

`;

export { GlobalStyle };
