import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "./reducers/Users"; //to nasz userSlice.reducer lub userSlice


const store = configureStore({
  reducer: {
    users: usersReducer,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>      
  </React.StrictMode>,
  document.getElementById('root')
);

