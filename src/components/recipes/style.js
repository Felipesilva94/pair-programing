import styled from "styled-components";

export const Container = styled.section`  
    max-width: 1920px;
    margin: 0 auto;
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5rem;
    background-color: var(--bg-two);

    @media screen and (max-width:48em){
        padding: 5rem 0.5rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;

    @media screen and (max-width:48em){
        width: 100%;
        flex-direction: column;
    }
`;