import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, details, embed, 
  figure, figcaption, footer, header, hgroup, menu, 
  nav, output, ruby, section, summary, time, mark,
  audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    outline: none;
    border: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --green-primary: #1eb65b;
    --red-primary: #ff3b3b;
    --grey-1: #fbfbfb;
    --grey-2: #f2f2f2;
    --grey-3: #e2e2e2;
    --grey-4: #bababa;
    --grey-5: #9e9e9e;
    --grey-6: #777777;
    --grey-7: #3c3c3c;
    --green-1: #dcf8d8;
    --green-2: #bef0bc;
    --green-3: #9de49b;
    --green-4: #72d270;
    --green-5: #58c85a;
    --green-6: #1EB65B;
    --green-7: #12a054;

    --header-size: 55px;
    --nav-size: 86px;
    --content-size: calc(100vh - 55px - 86px);
  }

 /* 모바일 UI 스타일 */
  body {
    display: flex; 
    justify-content: center; 
    min-height: 100vh; 
    margin: 0;
    padding: 0;
    background-color: #3c3c3c; 
  }

  #root {
    max-width: 375px; 
    width: 100%; 
    margin: 0 auto; 
    background-color: #ffffff;
    border-radius: 10px;
    position: relative;
  }

  @font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  
    body {
      font-family: 'NanumSquareRound', sans-serif;
    }
`;

export default GlobalStyle;
