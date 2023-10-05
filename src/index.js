import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const theme = {
  color: {
    fontColor: '#434455',
    bkgColor: '#e0e0eb',
  },
  spacing: value => `${value * 4}px`,
  radius: {
    small: '2px',
    middle: '4px',
    large: '6px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
