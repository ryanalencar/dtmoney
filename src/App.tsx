import React, { useState } from 'react';

import { createServer, Model } from 'miragejs';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import NewTransitionModal from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

createServer({
  models: {
    transaction: Model,
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => this.schema.all('transaction'));
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
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
      <NewTransitionModal
        isOpen={isTransactioModalOpen}
        onRequestClose={handleTransactionModalStatus}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
}
