import React, { FormEvent, MouseEvent, useEffect, useState } from 'react';

import { useTheme } from 'styled-components';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useModal } from '../../hooks/useModal';
import { useTransactions } from '../../hooks/useTransactions';
import Modal from '../Modal';
import * as S from './styles';
import { TransactionType } from './types';

export default function NewTransitionModal() {
  const { createTransaction, editTransaction } = useTransactions();
  const { isModalOpen, toggleModal, modalData } = useModal();
  const { isEditing, data } = modalData;

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

  useEffect(() => {
    if (isEditing) {
      setType(data.type);
      setTitle(data.title);
      setAmount(data.amount);
      setCategory(data.category);
    } else {
      resetModalData();
    }
  }, [isEditing]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      await editTransaction({
        id: modalData.data.id,
        amount,
        category,
        title,
        type,
        createdAt: modalData.data.createdAt,
      });
    } else {
      await createTransaction({ amount, category, title, type });
    }
    toggleModal();
    resetModalData();
  };

  return (
    <Modal
      title={isEditing ? 'Editar Transação' : 'Cadastrar Transação'}
      onRequestClose={toggleModal}
      isOpen={isModalOpen}>
      <S.FormContainer onSubmit={handleSubmit}>
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

        <S.FormSubmitButton type="submit">
          {isEditing ? 'Editar' : 'Cadastrar'}
        </S.FormSubmitButton>
      </S.FormContainer>
    </Modal>
  );
}
