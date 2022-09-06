import styled from "styled-components"

export const StyledAlbumList = styled.ul`
    width: calc(100% + 3rem);
    margin-left: -1.55rem;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
        display: none;
    }

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
`

export const StyledAlbumItem = styled.li`
    scroll-snap-align: start;
    flex: 0 0 45%;
    padding-left: 1.5rem;

    a {
        transition: opacity 0.3s;
    }

    a:hover {
        opacity: 0.85;
    }
`