import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainContextProvider from './context/context-provider/mainContext';

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
        <App />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
