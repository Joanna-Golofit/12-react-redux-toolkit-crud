import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {}
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

