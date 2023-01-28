import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --dark-bg-color: #261C2C;
  --light-bg-color: #3E2C41;
  --border-color: #5C527F;
  --text-color: #EDEDE9;
  --highlight: #6E85B2;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    color: var(--text-color);
    background-color: var(--dark-bg-color);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  }
`;
