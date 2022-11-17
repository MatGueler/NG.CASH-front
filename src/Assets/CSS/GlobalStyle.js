import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, #root {
	width: 100%;
	height: 100vh;
	margin: 0;
	padding: 0;
	background-color: #ffffff;
	color: #000000;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	font-family: 'Varela Round', sans-serif;
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
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

/* Project-style */

.container{
	width: 100%;
	height: 100%;
}

.black{
	background-color: #000000;
}

.form-link {
    color: #ffffff;
    font-weight: bold;

    margin-top: 40px;

    text-decoration: underline;
    cursor: pointer;
  }

    .button-box {
    width: 50%;
    height: 45px;
    position: relative;
    background-color: black;

    border-radius: 5px;
    border: 1px solid #ffffff;
  }

  .button-box :hover {
    transform: translate(2px, 2px);
  }
`;

export default GlobalStyle;
