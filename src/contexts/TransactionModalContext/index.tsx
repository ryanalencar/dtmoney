import React, { createContext, ReactNode, useMemo, useState } from 'react';

import { ITransaction } from '../TransactionContext/types';

interface ITransacionModalProviderProps {
  children: ReactNode;
}

interface ITransactionModalContextData {
  isModalOpen: boolean;
  editTransaction: EditingTransaction;
  toggleModal: () => void;
  editTransactionModal: (data: ITransaction) => void;
}

interface EditingTransaction {
  status: boolean;
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
  const [editTransaction, setEditTransaction] = useState<EditingTransaction>({
    status: false,
    data: {} as ITransaction,
  });

  function toggleModal() {
    if (isModalOpen) {
      setIsModalOpen(false);
      setEditTransaction({ status: false, data: {} as ITransaction });
    } else setIsModalOpen(true);
  }

  function editTransactionModal(data: ITransaction) {
    toggleModal();
    setEditTransaction({ status: true, data });
  }

  const providerValue = useMemo(
    () => ({ isModalOpen, toggleModal, editTransactionModal, editTransaction }),
    [isModalOpen, toggleModal, editTransactionModal, editTransaction],
  );

  return (
    <TransactionModalContext.Provider value={providerValue}>
      {children}
    </TransactionModalContext.Provider>
  );
}
