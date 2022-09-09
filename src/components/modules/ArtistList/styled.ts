import styled from "styled-components"

export const ArtistItem = styled.li`
    a {
        padding: 0.75rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s;
    }

    a:hover {
        background-color: var(--dark-gray);
    }

    span {
        background-color: var(--dark-gray);
        color: var(--gray);
        padding: 0.5rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s, color 0.2s;
    }

    a:hover span {
        background-color: var(--green);
        color: var(--black);
    }

    h2 {
        font-size: 1.25rem;
        font-weight: 500;
    }
`