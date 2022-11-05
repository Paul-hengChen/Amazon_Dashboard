import React from 'react';
import { AmazonDashboardPage, Header, Footer } from './container';

const App = () => (
  <div className="App">
    <Header />
    <div className="pc-container">
      <AmazonDashboardPage />
    </div>
    <Footer />
  </div>
);

export default App;
