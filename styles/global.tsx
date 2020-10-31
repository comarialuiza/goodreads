import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-background: #faf7f5;
        --color-primary: #667acd;
        --color-secondary: #f1833b;
        --color-tertiary: #726D81;
        --color-text-title: #333;
        --color-text-complement: #9C98A6;
        --color-white: #FFFFFF;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body, input, button, textarea {
        font: 300 1.6rem 'Montserrat', sans-serif;
        color: var(--color-text-base);
    }

    img {
        max-width: 100%;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle;