import React from 'react';
import Nav from '../../components/nav';
import Logo from '../../Assets/logo.svg'
import * as S from './style'

export default function Header() {
    return (
        <>
        <header>
            <S.Container>
                <S.NavBox>
                    <img src={Logo} alt="Logo" title='Logo'/>
                    <S.Btn><span>Menu</span></S.Btn>
                    <Nav />
                </S.NavBox>
                <S.Txt>
                    <h2>Recipes</h2>
                </S.Txt>
            </S.Container>
        </header>
        </>
    );
}