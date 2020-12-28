import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  html {
    box-sizing: inherit;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Karla', sans-serif;
    background: #212121;
  }

  h1, h2, h3 {
    font-family: 'Rubik', sans-serif;
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
