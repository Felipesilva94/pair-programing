import styled from "styled-components";

export const Title = styled.h2`
    font-size: clamp(2.5rem, 3vw, 3.5rem);
    font-family: var(--ff-one);
    font-weight: var(--fw-600);
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    color: #373737;
    position: relative;

    ::after{
        content: '';
        width: 8rem;
        height: 6px;
        display: block;
        background-color: #373737;
        position: absolute;
        left: 35%;
        bottom: -1.5rem;
    }

    @media screen and (max-width:48em){

        ::after{
            left: 30%;
        }
    }
`;