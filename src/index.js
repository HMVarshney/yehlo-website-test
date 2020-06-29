import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CollegeListContextProvider from './context/context-provider/collegeListContext';
import MainContextProvider from './context/context-provider/mainContext';

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
    <CollegeListContextProvider>
        <App />
    </CollegeListContextProvider>
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
