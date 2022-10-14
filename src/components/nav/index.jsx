import React from "react";
import * as S from './style'

export default function index() {
  return (
    <>
      <S.Nav>
        <S.Ul>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Recipes</li></a>
          <a href="#"><li>Subscribe</li></a>
        </S.Ul>
      </S.Nav>
    </>
  );
}
