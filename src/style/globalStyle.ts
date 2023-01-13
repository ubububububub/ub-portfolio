import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    font-size: 62.5%;
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    box-sizing: border-box;
  };

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
