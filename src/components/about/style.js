import styled from "styled-components";

export const Container = styled.section`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(362px, 1fr));
    align-items: center;
    gap: 2rem;
    background-color: var(--bg-one);

    img{
        width: 100%;
        display: block;
    }

    @media screen and (max-width:48em){
        grid-template-columns: 1fr;
    }
`;

export const TxtBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin-bottom: 2rem;
    }

    h2::after{
        width: 4rem;
        left: 30%;
    }

    p{
        max-width: 45ch;
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-one);
        text-align: left;
        color: #373737;
    }

    @media screen and (max-width:48em){
        padding: 2rem 0.5rem;

        p{
            text-align: left;
        }
    }
`;