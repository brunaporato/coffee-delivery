import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    background: ${(props) => props.theme.background};

    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }
`