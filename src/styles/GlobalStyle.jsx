import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import Palette from './Palette.jsx';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 14px;
    color: ${Palette.TextPrimary};
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    border: none;
    background-color: transparent;
  }

  h1, h2, h3{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
`;
export default GlobalStyle;
