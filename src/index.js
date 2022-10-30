import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './style/tailwind-pre-build.css';
import './style/app.scss';
import './style/tailwindcss.css';
import 'antd/dist/antd.css';

const { worker } = require('./mocks/browser');

worker.start();

ReactDOM.createRoot(
  document.getElementById('root'),
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
