import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {GridThemeProvider} from 'styled-bootstrap-grid';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import getTheme from './components/Theme';
import App from './containers/App';
import { store } from './config/store';
import * as serviceWorker from './serviceWorker';

const theme = getTheme();

ReactDOM.render(
  <React.StrictMode>
    <GridThemeProvider gridTheme={theme.grid}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <GlobalStyle theme={theme}/>
            <App />
          </Router>
        </Provider>
      </ThemeProvider>
    </GridThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
