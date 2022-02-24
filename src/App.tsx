import React, { useState } from 'react';

import { createServer } from 'miragejs';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => [
      {
        id: 1,
        title: 'Transaction1',
        amount: 400,
        type: 'deposit',
        category: 'Food',
        createdAt: new Date(),
      },
    ]);
  },
});

Modal.setAppElement('#root');

export default function App() {
  const [isTransactioModalOpen, setIsTransactioModalOpen] = useState(false);

  function handleTransactionModalStatus() {
    if (isTransactioModalOpen) setIsTransactioModalOpen(false);
    else setIsTransactioModalOpen(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header onTransactionModalStatus={handleTransactionModalStatus} />
      <Dashboard />
      <Modal
        onRequestClose={handleTransactionModalStatus}
        isOpen={isTransactioModalOpen}>
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </ThemeProvider>
  );
}
