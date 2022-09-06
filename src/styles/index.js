import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    :root {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;

    --black: #050807;
    --dark-gray: #181818;
    --dark-gray2: #212121;
    --gray: #9f9e9e;
    --white: #fff;
    --green: #37df11;

    --border: 2px solid var(--dark-gray2);
    }

    body {
        background-color: var(--black);
        color: var(--white);
        overflow-x: hidden;
    }

    h1 {
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style-type: none;
        padding-bottom: 3rem;
    }

    header {
        margin-bottom: 2rem;
    }
`

export default GlobalStyle;