import React, { useEffect } from 'react';
import { AmazonDashboardPage, Header, Footer } from './container';

const App = () => {
  useEffect(() => {
    (async () => {
      await fetch('/amazon/dashboard/overview?startDate=2022/08/01&&endDate=2022/08/05');
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
