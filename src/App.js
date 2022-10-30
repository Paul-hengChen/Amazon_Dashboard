import React, { useEffect } from 'react';
import './style/app.scss';
import './style/tailwindcss.css';
import 'animate.css';
import 'antd/dist/antd.css';
import { AmazonDashboardPage, Header, Footer } from './container';

const App = () => {
  useEffect(() => {
    (async () => {
      const data = await fetch('/amazon/dashboard/overview');
      console.log({ data });
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="pc-container">
        <AmazonDashboardPage />
        <Footer />
      </div>
    </div>
  );
};

export default App;
