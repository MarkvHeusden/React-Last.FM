import styled from "styled-components"

export const SongItem = styled.li`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-block: 1.5rem;

    .song-index {
        color: var(--gray);
        flex: 0 0 1.25rem;
        text-align: center;
    }

    img {
        width: 2.5rem;
        height: 2.5rem;
        background-color: var(--dark-gray);
        border-radius: 0.4rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: 500;
    }

    .song-duration {
        color: var(--gray);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: flex-start;
        display: none;
    }
`