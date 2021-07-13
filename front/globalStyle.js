import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      font-size: 100%;
  }

  html,
  body,
  #__next {
    height: 100%;
    color: #212529;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }

  .not-scroll {
      overflow: hidden;
  }
  
  ol,
  ul {
      list-style: none;
  }
  li {
      list-style: none;
  }
  a {
      text-decoration: none;
      color: #333;
  }
  img {
      vertical-align: bottom;
  }
  h1, h2, h3, h4, h5 {
      font-weight: normal;
  }
  input, button {
      background-color: transparent;
      border: none;
  }
`;

export default GlobalStyle;