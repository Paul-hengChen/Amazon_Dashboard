import React from 'react';
import ReactDOM from 'react-dom';
import './style/tailwind-pre-build.css';
import App from './App';

const { worker } = require('./mocks/browser');

worker.start();

ReactDOM.createRoot(
  document.getElementById('root'),
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
