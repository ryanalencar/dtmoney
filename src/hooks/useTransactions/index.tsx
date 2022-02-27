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

  async function removeTransaction(id: number) {
    const response = await api.delete(`/transactions/${id}`);
    console.log(response.data);
  }

  const providerValue = useMemo(
    () => ({
      transactions,
      createTransaction,
      editTransaction,
      removeTransaction,
    }),
    [transactions, createTransaction, editTransaction, removeTransaction],
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
