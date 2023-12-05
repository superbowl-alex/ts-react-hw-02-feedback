import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

createRoot(document.getElementById('root')!).render(  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</React.StrictMode>
)
