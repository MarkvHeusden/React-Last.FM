import styled, { css } from "styled-components"

import { PathMatch } from "react-router-dom"

export const NavBar = styled.nav`
    background-color: var(--black);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 5rem;
    font-weight: 500;

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    @media screen and (min-width: 40rem) {
        width: 18rem;
        height: 100vh;
        left: 0;
        top: 0;
        padding: 2rem;

        ul {
            flex-direction: column;
            align-items: flex-start;
        }
    }

`

export const NavLogo = styled.li`
    text-align: center;
    padding: 1.5rem;
    display: none;

    img {
        width: 100%;
    }

    @media screen and (min-width: 40rem) {
    display: block;
    width: 100%;
}
`

export const NavItem = styled.li<NavItemProps>`
    flex: 1;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        height: 5rem;
        opacity: 0.6;
        transition: opacity 0.3s;
    }

    a:hover,
    a:focus {
        opacity: 1;
    }

    ${({ active }) => active && css`
        a {
            opacity: 1;
            font-weight: 600;
        }
    `}

    .nav-icon {
        font-size: 2rem;
    }

    @media screen and (min-width: 40rem) {
        width: 100%;

        a {
            align-items: center;
            justify-content: flex-start;
        }
    }
`
type NavItemProps = {
    active: PathMatch<string> | null;
};

export const NavLabel = styled.span`
    display: none;
    margin-left: 1rem;

    @media screen and (min-width: 40rem) {
        display: inline;
    }

`
