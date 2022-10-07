import React from 'react';
import './style/app.scss';
import './style/tailwindcss.css';
import 'animate.css';
import 'antd/dist/antd.css';
import { AmazonDashboard } from './container';

const App = () => (
  <div className="App">
    <AmazonDashboard />
  </div>
);

export default App;
