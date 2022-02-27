import React, { createContext, useContext, useMemo, useState } from 'react';

import { ITransaction } from '../useTransactions/types';
import {
  ITransacionModalProviderProps,
  ITransactionModalContextData,
  ModalData,
} from './types';

const TransactionModalContext = createContext<ITransactionModalContextData>(
  {} as ITransactionModalContextData,
);

export default function TransactionModalProvider({
  children,
}: ITransacionModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData>({
    isEditing: false,
    isDeleting: false,
    data: {} as ITransaction,
  });

  function toggleModal() {
    if (isModalOpen) {
      setIsModalOpen(false);
      setModalData({
        isEditing: false,
        isDeleting: false,
        data: {} as ITransaction,
      });
    } else setIsModalOpen(true);
  }

  function toggleEditModal(data: ITransaction) {
    toggleModal();
    setModalData({ isEditing: true, isDeleting: false, data });
  }

  function toggleRemoveModal(transactioId: number) {
    toggleModal();
    setModalData({
      isEditing: false,
      isDeleting: true,
      data: { id: transactioId } as ITransaction,
    });
  }

  const providerValue = useMemo(
    () => ({
      isModalOpen,
      toggleModal,
      toggleEditModal,
      toggleRemoveModal,
      modalData,
    }),
    [isModalOpen, toggleModal, toggleEditModal, toggleRemoveModal, modalData],
  );

  return (
    <TransactionModalContext.Provider value={providerValue}>
      {children}
    </TransactionModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(TransactionModalContext);
  return context;
}
