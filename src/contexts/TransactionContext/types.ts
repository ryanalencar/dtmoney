import { ReactNode } from 'react';

export interface ITransaction {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  category: string;
  amount: number;
  createdAt: Date;
}

export type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

export interface ITransactionProviderProps {
  children: ReactNode;
}

export interface ItransactionContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}
