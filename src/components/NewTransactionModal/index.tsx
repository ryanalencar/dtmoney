import React, { FormEvent, MouseEvent, useContext, useState } from 'react';

import { useTheme } from 'styled-components';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionContext } from '../../contexts/TransactionContext';
import Modal from '../Modal';
import * as S from './styles';
import { INewTransitionModalProps, TransactionType } from './types';

export default function NewTransitionModal({
  isOpen,
  onRequestClose,
}: INewTransitionModalProps) {
  const { createTransaction } = useContext(TransactionContext);
  const theme = useTheme();
  const [type, setType] = useState<TransactionType>('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const handleTransactionTypeChange = (
    e: MouseEvent,
    _type: TransactionType,
  ) => {
    e.preventDefault();
    setType(_type);
  };

  const resetModalData = () => {
    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');
  };

  const handleCreateNewTransaction = async (e: FormEvent) => {
    e.preventDefault();
    await createTransaction({ amount, category, title, type });
    onRequestClose();
    resetModalData();
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
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <S.TransactionTypeWrapper>
          <S.TransactionTypeButton
            onClick={(e) => handleTransactionTypeChange(e, 'deposit')}
            isActive={type === 'deposit'}
            activeColor={theme.colors.green}>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.TransactionTypeButton>
          <S.TransactionTypeButton
            onClick={(e) => handleTransactionTypeChange(e, 'withdraw')}
            isActive={type === 'withdraw'}
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
