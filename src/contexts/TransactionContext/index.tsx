import React, { createContext, useEffect, useMemo, useState } from 'react';

import { api } from '../../services/api';
import {
  ITransaction,
  ItransactionContextData,
  ITransactionProviderProps,
  TransactionInput,
} from './types';

export const TransactionContext = createContext<ItransactionContextData>(
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

  const providerValue = useMemo(
    () => ({ transactions, createTransaction }),
    [transactions, createTransaction],
  );

  return (
    <TransactionContext.Provider value={providerValue}>
      {children}
    </TransactionContext.Provider>
  );
}
