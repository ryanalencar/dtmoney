import React, { useContext } from 'react';

import logoImg from '../../assets/logo.svg';
import { TransactionModalContext } from '../../contexts/TransactionModalContext';
import * as S from './styles';

export default function Header() {
  const { toggleModal } = useContext(TransactionModalContext);

  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <S.Button onClick={toggleModal}>Nova transação</S.Button>
      </S.Content>
    </S.Container>
  );
}
