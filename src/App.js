import React, { useEffect } from 'react';
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
      </div>
      <Footer />
    </div>
  );
};

export default App;
