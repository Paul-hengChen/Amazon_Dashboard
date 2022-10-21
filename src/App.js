import React, { useState } from 'react';
import './style/app.scss';
import './style/tailwindcss.css';
import 'animate.css';
import 'antd/dist/antd.css';
import {
  AmazonDashboardPage, Header, Footer, CSVModal, ERPModal,
} from './container';

const App = () => {
  const [modalOpen, setModalOpen] = useState('');
  const onDropdownClick = (key) => setModalOpen(key);

  return (
    <div className="App">
      <Header onDropdownClick={onDropdownClick} />
      <AmazonDashboardPage />
      <Footer />
      <ERPModal isOpen={modalOpen === 'ERP'} onCancel={() => setModalOpen('')} />
      <CSVModal isOpen={modalOpen === 'CSV'} onCancel={() => setModalOpen('')} />
    </div>
  );
};

export default App;
