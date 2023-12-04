import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
  }

  html,	body {
    background: rgb(241,241,255);
background: -moz-linear-gradient(90deg, rgba(241,241,255,1) 0%, rgba(193,229,255,1) 0%, rgba(31,187,255,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(241,241,255,1) 0%, rgba(193,229,255,1) 0%, rgba(31,187,255,1) 100%);
background: linear-gradient(90deg, rgba(241,241,255,1) 0%, rgba(193,229,255,1) 0%, rgba(31,187,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1f1ff",endColorstr="#1fbbff",GradientType=1);
    margin: 0px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #cacecc #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #cacecc;
    border-radius: 10px;
    border: 2px solid #ffffff;
  }
  
`;

export default GlobalStyles;
