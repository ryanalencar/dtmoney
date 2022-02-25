import React, { FormEvent, MouseEvent, useState } from 'react';

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
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const handleTransactionTypeChange = (
    e: MouseEvent,
    type: TransactionType,
  ) => {
    e.preventDefault();
    setTransactionType(type);
  };

  const handleCreateNewTransaction = (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      title,
      value,
      transactionType,
      category,
    };
    console.log(formData);
  };

  return (
    <Modal
      title="Cadastrar Transação"
      onRequestClose={onRequestClose}
      isOpen={isOpen}>
      <S.FormContainer onSubmit={handleCreateNewTransaction}>
        <S.FormInput
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.FormInput
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
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

        <S.FormInput
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <S.FormSubmitButton type="submit">Cadastrar</S.FormSubmitButton>
      </S.FormContainer>
    </Modal>
  );
}
