import React from 'react';
import './style/app.scss';
import './style/tailwindcss.css';
import 'animate.css';
import 'antd/dist/antd.css';
import { AmazonDashboardPage, Header, Footer } from './container';

const App = () => (
  <div className="App">
    <Header />
    <AmazonDashboardPage />
    <Footer />
  </div>
);

export default App;
