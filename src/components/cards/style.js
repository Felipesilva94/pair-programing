import styled from "styled-components";

export const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 7px 6px #00000029;

    img{
        width: 100%;
    }

    h2{
        width: 100%;
        padding-block: 7rem;
        font-size: clamp(2rem, 2.2vw, 2.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-400);
        color: #373737;
        background-color: var(--bg-one);
        text-align: center;
        position: relative;
    }

    h2::before{
        content: '';
        width: 4rem;
        height: 5px;
        background-color: #373737;
        display: block;
        position: absolute;
        left: 40%;
        bottom: 65%;
    }

    @media screen and (max-width:48em){

        h2::before{
            left: 37%;
        }
    }
`;