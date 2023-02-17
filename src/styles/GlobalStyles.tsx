import React, { FunctionComponent } from "react";
import { Global, css } from "@emotion/react";

export const defaultColors = {
  base: "#093762",
  baseDark: "#fff",
  text: "#202020",
};

export const ZIndexs = {
    logo: 10,
    header: 10,
    socialIcons: 10,
    pagingDots: 10,
}

const defaultStyle = css`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -font-smoothing: antialiased;
    font-family: 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "MS Pゴシック", "MS PGothic", sans-serif;
}
html {
    scroll-behavior: smooth;
}
html,
body,
#___gatsby {
    height: 100%;
    min-height: 100%;
    background-color: #F2F8F7;
    position: relative;
    color: ${defaultColors.text};
    overflow: hidden;
}

body.no_scroll {
    overflow: hidden;
}
a, button, input[type=submit], select{
    cursor: pointer;
}
a, a:hover, a:focus, 
button, button:hover, button:focus,
input, input:hover, input:focus, 
textarea, textarea:hover, textarea:focus,
select, select:hover, select:focus{
    outline: 0;
    box-shadow: none;
    text-decoration: none;
}
ul, ol, li{
    list-style: none;
}
img{
    max-width: 100%;
    display: block;
}

`;

const GlobalStyles: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyles;
