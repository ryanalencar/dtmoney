import React from 'react';

import { ThemeProvider } from 'styled-components';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </ThemeProvider>
  );
}
