import React, { useEffect } from 'react';
import { AmazonDashboardPage, Header, Footer } from './container';

const App = () => {
  useEffect(() => {
    (async () => {
      await fetch('/amazon/dashboard/overview');
    })();
  }, []);

  return (

    <div className="App">
      <Header />
      <div className="pc-container">
        <AmazonDashboardPage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
