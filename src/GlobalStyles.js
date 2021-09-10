import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /** Montserrat Variable Font **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 400 800;
    font-style: normal;
    src: url("/fonts/Montserrat-VariableFont.woff2") format("woff2"),
 url("/fonts/Montserrat-VariableFont.woff") format("woff");
  }

  /** Bitter Variable Font. **/
  @font-face {
    font-family: "Bitter";
    src: url("/fonts/Bitter-VariableFont_wght.woff2") format("woff2"),
 url("/fonts/Bitter-VariableFont_wght.woff") format("woff");
  }

  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    color: ${(props) => props.theme.color.text};
  }
`;

export default GlobalStyle;
