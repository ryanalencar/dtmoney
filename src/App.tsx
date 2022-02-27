import React from 'react';

import { createServer, Model } from 'miragejs';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import NewTransitionModal from './components/TransactionModal';
import TransactionModalProvider from './hooks/useModal';
import TransactionProvider from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Job',
          amount: 6000,
          createdAt: new Date('2022-02-02'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1450,
          createdAt: new Date('2022-02-20'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => this.schema.all('transaction'));
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
    this.put('/transactions/:id', (schema: any, request) => {
      const data = JSON.parse(request.requestBody);
      const { id } = request.params;
      const transaction = schema.transactions.find(id);
      return transaction.update(data);
    });
    this.del('/transactions/:id', (schema: any, request) => {
      const { id } = request.params;
      return schema.transactions.find(id).destroy();
    });
  },
});

Modal.setAppElement('#root');

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TransactionProvider>
        <TransactionModalProvider>
          <Header />
          <Dashboard />
          <NewTransitionModal />
          <GlobalStyle />
        </TransactionModalProvider>
      </TransactionProvider>
    </ThemeProvider>
  );
}
