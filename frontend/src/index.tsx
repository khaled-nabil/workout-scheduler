import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback="app loading..">
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
