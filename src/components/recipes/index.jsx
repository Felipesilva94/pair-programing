import React from 'react';
import Bebida from '../../Assets/bebida.png'
import Cake from '../../Assets/cake.png'
import Pizza from '../../Assets/pizza.png'
import Card from '../cards'
import Title from '../title'
import * as S from './style';

export default function recipes(){
    return (
        <>
        <S.Container>
            <Title title={'Latest Recipes'}/>
            <S.Wrapper>
                <Card imagem={Cake} title={'Red Velvet Cake'}/>
                <Card imagem={Pizza} title={'Margherita Pizza'}/>
                <Card imagem={Bebida} title={'Peanut Smoothie'}/>
            </S.Wrapper>
        </S.Container>
        </>
    );
}