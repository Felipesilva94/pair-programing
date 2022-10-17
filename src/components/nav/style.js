import styled from "styled-components";

export const Nav = styled.nav`

    @media screen and(max-width:48em){
        width: 100%;
    }
`;

export const Ul = styled.ul`
    display: flex;
    gap: clamp(1rem, 2vw, 2.5rem);
    list-style: none;

    a{
        text-decoration: none;
    }

    li{
        padding: 1rem 2rem;
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-one);
        text-transform: uppercase;
        color: #373737;
    }

    a:hover,
    a:focus{
        outline: 5px solid #373737;
    }
`;