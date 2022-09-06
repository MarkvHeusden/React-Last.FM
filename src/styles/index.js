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

    .content {
        padding: 1.5rem;
    }

    .heading-caption {
        display: block;
        margin-top: -1rem;
        font-size: 1rem;
        font-weight: 500;
        color: var(--gray);
    }

    @media screen and (min-width: 40rem) {
        ul {
            padding-bottom: 0;
        }

        .content {
            margin-left: 18rem;
            padding: 3.5rem 1.5rem;
        }
    }
`

export default GlobalStyle;