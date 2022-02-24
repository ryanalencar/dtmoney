import React from 'react';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import Modal from '../Modal';
import * as S from './styles';

interface INewTransitionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransitionModal({
  isOpen,
  onRequestClose,
}: INewTransitionModalProps) {
  return (
    <Modal
      title="Cadastrar Transação"
      onRequestClose={onRequestClose}
      isOpen={isOpen}>
      <S.FormContainer>
        <S.FormInput type="text" placeholder="Título" />
        <S.FormInput type="number" placeholder="Valor" />
        <S.TransactionTypeWrapper>
          <S.TransactionTypeButton>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.TransactionTypeButton>
          <S.TransactionTypeButton>
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.TransactionTypeButton>
        </S.TransactionTypeWrapper>

        <S.FormInput type="text" placeholder="Categoria" />

        <S.FormSubmitButton type="submit">Cadastrar</S.FormSubmitButton>
      </S.FormContainer>
    </Modal>
  );
}
