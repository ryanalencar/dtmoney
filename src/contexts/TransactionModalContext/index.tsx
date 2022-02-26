import React, { createContext, ReactNode, useMemo, useState } from 'react';

import { ITransaction } from '../../hooks/useTransactions/types';

interface ITransacionModalProviderProps {
  children: ReactNode;
}

interface ITransactionModalContextData {
  isModalOpen: boolean;
  modalData: ModalData;
  toggleModal: () => void;
  toggleEditModal: (data: ITransaction) => void;
}

interface ModalData {
  isEditing: boolean;
  data: ITransaction;
}

export const TransactionModalContext =
  createContext<ITransactionModalContextData>(
    {} as ITransactionModalContextData,
  );

export default function TransactionModalProvider({
  children,
}: ITransacionModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData>({
    isEditing: false,
    data: {} as ITransaction,
  });

  function toggleModal() {
    if (isModalOpen) {
      setIsModalOpen(false);
      setModalData({ isEditing: false, data: {} as ITransaction });
    } else setIsModalOpen(true);
  }

  function toggleEditModal(data: ITransaction) {
    toggleModal();
    setModalData({ isEditing: true, data });
  }

  const providerValue = useMemo(
    () => ({ isModalOpen, toggleModal, toggleEditModal, modalData }),
    [isModalOpen, toggleModal, toggleEditModal, modalData],
  );

  return (
    <TransactionModalContext.Provider value={providerValue}>
      {children}
    </TransactionModalContext.Provider>
  );
}
