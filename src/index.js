import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import App from './App';
import GlobalStyled from './globalStyled';
import { Provider } from 'react-redux';
import store from './redux/store';
import media from './media';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={{ ...theme, ...media }}>
        <GlobalStyled />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);