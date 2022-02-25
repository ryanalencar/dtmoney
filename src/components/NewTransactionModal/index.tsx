import React, { MouseEvent, useState } from 'react';

import { useTheme } from 'styled-components';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import Modal from '../Modal';
import * as S from './styles';
import { INewTransitionModalProps, TransactionType } from './types';

export default function NewTransitionModal({
  isOpen,
  onRequestClose,
}: INewTransitionModalProps) {
  const theme = useTheme();
  const [transactionType, setTransactionType] =
    useState<TransactionType>('deposit');

  const handleTransactionTypeChange = (
    e: MouseEvent,
    type: TransactionType,
  ) => {
    e.preventDefault();
    setTransactionType(type);
  };

  return (
    <Modal
      title="Cadastrar Transação"
      onRequestClose={onRequestClose}
      isOpen={isOpen}>
      <S.FormContainer>
        <S.FormInput type="text" placeholder="Título" />
        <S.FormInput type="number" placeholder="Valor" />
        <S.TransactionTypeWrapper>
          <S.TransactionTypeButton
            onClick={(e) => handleTransactionTypeChange(e, 'deposit')}
            isActive={transactionType === 'deposit'}
            activeColor={theme.colors.green}>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.TransactionTypeButton>
          <S.TransactionTypeButton
            onClick={(e) => handleTransactionTypeChange(e, 'withdraw')}
            isActive={transactionType === 'withdraw'}
            activeColor={theme.colors.red}>
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
