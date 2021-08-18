import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;

    background-color: #090909;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
