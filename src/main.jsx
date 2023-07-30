// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'; // Import createRoot

import App from './App';
import store from './store';
import { config, actionProvider, messageParser } from './Chatbot';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
