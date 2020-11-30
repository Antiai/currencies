import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { IStyledTheme } from './types';

const GlobalStyle = createGlobalStyle<IStyledTheme>`
  ${normalize}

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/opensans/v18/memnYaGs126MiZpBA-UFUKWiUNhvIqOxjaPXZSk.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }

  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  body, html {
    width: 100%;
    height: 100%;
  }
  
  body {
    background-color: ${({theme}) => theme.palette.gainsboro};
  }
`;

export default GlobalStyle;
