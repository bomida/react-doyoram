import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyled = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Bodoni Moda', serif;
    color: ${props => props.theme.black.darker};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyled;