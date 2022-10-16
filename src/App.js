import React from 'react';
import './style/app.scss';
import './style/tailwindcss.css';
import 'animate.css';
import 'antd/dist/antd.css';
import { AmazonDashboardPage, Header } from './container';

const App = () => (
  <div className="App">
    <Header />
    <AmazonDashboardPage />
  </div>
);

export default App;
