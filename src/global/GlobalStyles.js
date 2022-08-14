import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body, *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        color: #202020;
        scroll-behavior: smooth;
    }

    body{
        background:linear-gradient(335.05deg,rgba(255,209,0,0.5) 44.42%,rgba(244,228,9,0.5) 68.64%,rgba(255,247,136,0.5) 90.82%),#F4E409;
    }

`;
