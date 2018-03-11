import React from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import { Provider } from 'unstated';
import App from './App';
import globalStyles from './styles/globalStyles';

function startApp() {
  const appEl = document.getElementById('root');

  Modal.setAppElement(appEl);

  globalStyles();

  render(
    <Provider>
      <App />
    </Provider>,
    appEl
  );
}

startApp();
