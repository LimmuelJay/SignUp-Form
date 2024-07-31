import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        min-height: 100vh;
        width: 100%;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyles