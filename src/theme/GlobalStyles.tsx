import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(p) => p.theme.colors.background.main};
        font-family: 'Roboto', sans-serif;
        }
    * {
        box-sizing: border-box;
    }
`

export default GlobalStyles
