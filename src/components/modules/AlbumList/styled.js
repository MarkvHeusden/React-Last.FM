import styled from "styled-components"

export const StyledAlbumList = styled.ul`
    width: calc(100% + 3rem);
    margin-left: -1.55rem;
    padding-top: .5rem;
    margin-top: -.5rem;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const StyledAlbumItem = styled.li`
    scroll-snap-align: start;
    flex: 0 0 45%;
    padding-left: 1.5rem;

    @media screen and (min-width: 60rem) {
        flex: 0 0 30%;
        padding-right: 1rem;
    }

    @media screen and (min-width: 80rem) {
        flex: 0 0 23%;
    }

    @media screen and (min-width: 100rem) {
        flex: 0 0 15vw;
    }

    a {
        transition: transform 0.3s;
        display: inline-block;
    }

    &:nth-child(odd) a:hover {
        transform: rotate(2deg) scale(1.01);
    }

    &:nth-child(even) a:hover {
        transform: rotate(-2deg) scale(1.01);
    }

    h2 {
        font-size: 1rem;
        font-weight: 500;
        margin-top: 0.75rem;
    }
`
export const Artwork = styled.div`
    position: relative;

    .artwork-image {
        background-color: var(--dark-gray);
        aspect-ratio: 1;
        width: 100%;
        border-radius: 10%;
    }

    .artwork-shadow {
        width: 80%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%);
        filter: blur(30px);
        z-index: -1;
        opacity: 0.8;
    }
`