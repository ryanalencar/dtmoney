import React from 'react';

import logoImg from '../../assets/logo.svg';
import { useModal } from '../../hooks/useModal';
import * as S from './styles';

export default function Header() {
  const { toggleModal } = useModal();

  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <S.Button onClick={toggleModal}>Nova transação</S.Button>
      </S.Content>
    </S.Container>
  );
}
