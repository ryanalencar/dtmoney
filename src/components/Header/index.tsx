import React from 'react';

import logoImg from '../../assets/logo.svg';
import * as S from './styles';

interface IHeaderProps {
  onTransactionModalStatus: () => void;
}

export default function Header({ onTransactionModalStatus }: IHeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <S.Button onClick={onTransactionModalStatus}>Nova transação</S.Button>
      </S.Content>
    </S.Container>
  );
}
