import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-background: #dadad2;
        --color-primary: #7d887a;
        --color-secondary: #f1833b;
        --color-tertiary: #726D81;
        --color-text-title: #333;
        --color-text-complement: #9C98A6;
        --color-white: #FFFFFF;
    }

    body {
        background-color: var(--color-background);
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

    .container {
        padding: 20px;
        background-color: var(--color-white);
        border-radius: 20px;
    }
`;

export const Title = styled.h2`
    color: var(--color-text-title);
    font-weight: normal;
    font-size: 18px;
    margin-bottom: 16px;
`;

export default GlobalStyle;