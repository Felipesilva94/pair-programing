import React from 'react';
import * as S from './style'

export default function cards({imagem, title}) {
    return (
        <>
            <S.CardBox>
                <img src={imagem} alt={title} />
                <h2>{title}</h2>
            </S.CardBox>
        </>
    );
}
