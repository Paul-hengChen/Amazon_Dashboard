import React from 'react';
import './style/app.scss';
import './style/tailwindcss.css';
import 'animate.css';
import 'antd/dist/antd.css';

import { Chart, Header } from './component';

const App = () => (
  <div className="App">
    <Header />
    <div className="grid grid-cols-3">
      <Chart title="營業額" />
      <Chart title="銷售數量" />
      <Chart title="購買人次" />
      <Chart title="平均客單價" />
      <Chart title="平均購買數量" />
      <Chart title="產品銷售金額 TOP 10" />
      <Chart title="產品銷售數量 TOP 10" />
    </div>
  </div>
);

export default App;
