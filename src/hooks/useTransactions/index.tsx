import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { api } from '../../services/api';
import {
  ITransaction,
  ItransactionContextData,
  ITransactionProviderProps,
  TransactionInput,
} from './types';

const TransactionContext = createContext<ItransactionContextData>(
  {} as ItransactionContextData,
);

export default function TransactionProvider({
  children,
}: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  useEffect(() => {
    api
      .get('transactions')
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transaction,
      createdAt: new Date(),
    });
    setTransactions([...transactions, response.data.transaction]);
  }

  async function editTransaction(transaction: ITransaction) {
    const response = await api.put(
      `/transactions/${transaction.id}`,
      transaction,
    );
    const newTransactions = transactions.map((_transaction) =>
      _transaction.id === transaction.id
        ? { ..._transaction, ...response.data.transaction }
        : _transaction,
    );
    setTransactions(newTransactions);
  }

  const providerValue = useMemo(
    () => ({ transactions, createTransaction, editTransaction }),
    [transactions, createTransaction, editTransaction],
  );

  return (
    <TransactionContext.Provider value={providerValue}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);
  return context;
}
