import React from 'react';

import logoImg from '../../assets/logo.svg';
import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <S.Button>Nova transação</S.Button>
      </S.Content>
    </S.Container>
  );
}
