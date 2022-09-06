import styled from "styled-components"

export const SearchInput = styled.input`
    background-color: var(--dark-gray);
    border: none;
    color: inherit;
    border-radius: 0.5rem;
    width: 100%;
    display: inline-block;
    padding: 0.75rem 1.25rem;

    &:focus {
        outline: 2px solid var(--dark-gray2);
    }
`