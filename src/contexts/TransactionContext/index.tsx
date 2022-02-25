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

  const createTransaction = (transaction: TransactionInput) => {
    api.post('/transactions', transaction);
  };

  const contextValue = useMemo(
    () => ({ transactions, createTransaction }),
    [transactions, createTransaction],
  );

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
}
