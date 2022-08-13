import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body, *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        color: #202020;
    }

    body{
        background: #ffffff;
    }

`;
