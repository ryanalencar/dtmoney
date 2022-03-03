import React, { MouseEvent, useEffect, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useModal } from '../../hooks/useModal';
import { useTransactions } from '../../hooks/useTransactions';
import { TransactionInput } from '../../hooks/useTransactions/types';
import Input from '../Input';
import { InputLabel } from '../Input/styles';
import Modal from '../Modal';
import * as S from './styles';
import { TransactionType } from './types';

export default function NewTransitionModal() {
  const { createTransaction, editTransaction, removeTransaction } =
    useTransactions();
  const { isModalOpen, toggleModal, toggleRemoveModal, modalData } = useModal();
  const { isEditing, isDeleting, data } = modalData;

  const theme = useTheme();
  const [type, setType] = useState<TransactionType>('deposit');
  const [modalTitle, setModalTitle] = useState('');

  const formRef = useRef<FormHandles>(null);

  const handleTransactionTypeChange = (
    e: MouseEvent,
    _type: TransactionType,
  ) => {
    e.preventDefault();
    setType(_type);
  };

  useEffect(() => {
    if (isEditing) {
      setModalTitle('Editar Transação');
    }
    if (isDeleting) {
      setModalTitle('Remover Transação');
    } else {
      setModalTitle('Cadastrar Transação');
    }
  }, [isEditing, isDeleting]);

  const handleSubmit = async (
    formData: TransactionInput,
    { reset }: { reset: () => void },
  ) => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('O título é obrigatório'),
        category: Yup.string().required('A categoria é obrigatória'),
        amount: Yup.number().required('O valor é obrigatório'),
      });

      await schema.validate(formData, { abortEarly: false });

      if (isEditing) {
        await editTransaction({
          ...formData,
          id: data.id,
          type,
          createdAt: data.createdAt,
        });
      } else {
        const formattedData = {
          ...formData,
          type,
        };
        await createTransaction(formattedData);
      }
      toggleModal();
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages: any = {};
        err.inner.forEach((error) => {
          errorMessages[error.path!] = error.message;
        });
        formRef.current?.setErrors(errorMessages);
      }
    }
  };

  return (
    <Modal title={modalTitle} onRequestClose={toggleModal} isOpen={isModalOpen}>
      <Form onSubmit={handleSubmit} initialData={data} ref={formRef}>
        {isDeleting ? (
          <>
            <h1>Certeza que deseja remover a transação?</h1>
            <S.FormSubmitButton
              isDeleting
              onClick={() => {
                removeTransaction(modalData.data.id);
                toggleModal();
              }}
              type="button">
              Remover
            </S.FormSubmitButton>
          </>
        ) : (
          <>
            <Input
              type="text"
              name="title"
              label="Título"
              placeholder="Título"
            />
            <Input
              type="number"
              name="amount"
              label="Valor"
              placeholder="Valor"
            />
            <InputLabel>Tipo</InputLabel>
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

            <Input
              type="text"
              name="category"
              label="Categoria"
              placeholder="Categoria"
            />

            <S.FormSubmitButton type="submit">
              {isEditing ? 'Editar' : 'Cadastrar'}
            </S.FormSubmitButton>
          </>
        )}
      </Form>
    </Modal>
  );
}
