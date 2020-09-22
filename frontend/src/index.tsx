import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from './theme';
import Router from 'routers';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback="app loading..">
        <Router />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
