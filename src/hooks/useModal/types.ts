import { ReactNode } from 'react';

import { ITransaction } from '../useTransactions/types';

export interface ITransacionModalProviderProps {
  children: ReactNode;
}

export interface ITransactionModalContextData {
  isModalOpen: boolean;
  modalData: ModalData;
  toggleModal: () => void;
  toggleEditModal: (data: ITransaction) => void;
}

export interface ModalData {
  isEditing: boolean;
  data: ITransaction;
}
