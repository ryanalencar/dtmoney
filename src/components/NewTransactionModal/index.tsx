import React from 'react';

import { Modal } from '../common/Modal';
import * as S from './styles';

interface INewTransitionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransitionModal({
  isOpen,
  onRequestClose,
}: INewTransitionModalProps) {
  const CLOSE_TIMEOUT_MODAL = 300;

  return (
    <Modal
      closeTimeoutMS={CLOSE_TIMEOUT_MODAL}
      onRequestClose={onRequestClose}
      isOpen={isOpen}>
      <S.FormContainer>
        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </S.FormContainer>
    </Modal>
  );
}
