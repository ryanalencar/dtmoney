import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>aaa</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
