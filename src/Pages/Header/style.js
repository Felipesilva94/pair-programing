import styled from "styled-components";
import BgDesktop from '../../Assets/background-desk.png'
import BgMobile from '../../Assets/background-mobile.png'

export const Container = styled.section`
    max-width: 1920px;
    min-height: 60vw;
    margin: 0 auto;
    background-image: url(${BgDesktop});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position-y: 70%;
    border: 20px solid var(--bg-one);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width:48em){
        min-height: 90vh;
        border: 5px solid var(--bg-one);
        background-image: url(${BgMobile});
    }
`;

export const NavBox = styled.div`
    width: 100%;
    padding: 2rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 60px;
        aspect-ratio: 1;
    }

    @media screen and (max-width:48em){
        padding: 2rem 0.5rem;
        justify-content: flex-end;

        img,
        nav{
            display: none;
        }
    }
`;

export const Btn = styled.button`
    display: none;
    position: relative;
    cursor: pointer;
    border: none;

    ::before,
    ::after{
        content: '';
        width: 2rem;
        height: 7px;
        background-color: #373737;
        display: block;
        position: absolute;
        right: 0;
    }

    ::after{
        bottom: 0.2em;
    }

    span{
        display: none;
    }

    @media screen and (max-width:48em){
        display: initial;
    }
`;

export const Txt = styled.div`
    width: 100%;
    margin-block: auto;

    h2{
        font-size: clamp(2rem, 7vw, 7.5rem);
        font-family: var(--ff-one);
        letter-spacing: 2px;
        text-transform: uppercase;
        text-align: center;
        color: #373737;
    }

    @media screen and (max-width:48em){
        margin-block: auto;
        padding-bottom: 4rem;
    }
`;