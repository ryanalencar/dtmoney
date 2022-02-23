import React from 'react';

import { createServer } from 'miragejs';
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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </ThemeProvider>
  );
}
