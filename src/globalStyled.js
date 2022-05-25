import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyled = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: ${props => props.theme.font.family.sansSerif};
    font-size: ${props => props.theme.font.size.base};
    font-weight: bold;
    color: ${props => props.theme.color.black.darker};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyled;