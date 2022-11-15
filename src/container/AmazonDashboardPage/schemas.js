import React from 'react';
import {
  ClockCircleTwoTone, ShopTwoTone, DollarCircleTwoTone, ShoppingTwoTone, FireTwoTone,
} from '@ant-design/icons';

const overviewSchemas = [
  {
    key: 'currentMonth',
    title: '月份',
    index: 'currentMonth',
    render: (currentMonth) => `${currentMonth}月`,
    Svg: () => <ClockCircleTwoTone />,
  },
  {
    key: 'productSales',
    title: '銷售金額',
    index: 'productSales',
    render: (productSales) => `$${Math.abs(productSales).toFixed(2)}`,
    Svg: () => <DollarCircleTwoTone twoToneColor="#01B468" />,
  },
  {
    key: 'platformRelatedFee',
    title: '相關平台費用',
    index: 'platformRelatedFee',
    render: (platformRelatedFee) => `$${Math.abs(platformRelatedFee).toFixed(2)}`,
    Svg: () => <ShoppingTwoTone twoToneColor="#D26900" />,
  },
  {
    key: 'avgPurchase',
    title: '平均購買數量',
    index: 'avgPurchase',
    render: (avgPurchase) => Math.abs(avgPurchase).toFixed(2),
    Svg: () => <FireTwoTone twoToneColor="#CE0000" />,
  },
  {
    key: 'quantity',
    title: '銷售數量',
    index: 'quantity',
    render: (quantity) => Math.abs(quantity).toFixed(2),
    Svg: () => <FireTwoTone twoToneColor="#CE0000" />,
  },
  {
    key: 'total',
    title: '營業收入',
    index: 'total',
    render: (total) => `$${Math.abs(total).toFixed(2)}`,
    Svg: () => <ShopTwoTone twoToneColor="#D26900" />,
  },
  {
    key: 'numberOfPurchase',
    title: '購買人次',
    index: 'numberOfPurchase',
    render: (numberOfPurchase) => Math.abs(numberOfPurchase).toFixed(2),
    Svg: () => <FireTwoTone twoToneColor="#CE0000" />,
  },
  {
    key: 'avgProductSales',
    title: '平均客單價',
    index: 'avgProductSales',
    render: (avgProductSales) => `$${Math.abs(avgProductSales).toFixed(2)}`,
    Svg: () => <DollarCircleTwoTone twoToneColor="#01B468" />,
  }];

export const buildOverview = (detail) => {
  const content = overviewSchemas.map((schema) => {
    const value = schema.render ? schema.render(detail[schema.index]) : detail[schema.index];
    return {
      ...schema,
      title: schema.title,
      value,
    };
  });
  return content;
};

const dashboardSchemas = [
  {
    key: 'productSalesOfTOP10',
    name: '產品銷售金額TOP10',
    index: 'productSalesOfTOP10',
    type: 'column',
    color: '#004B97',
    render: (productSalesOfTOP10) => productSalesOfTOP10.map((item) => Number(Math.abs(item.productSales.toFixed(2)))),
    renderLabels: (productSalesOfTOP10) => productSalesOfTOP10.map((item) => item.sku ?? '-'),
    yAxisTitle: '金額',
    xAxisTitle: '品項',

  },
  {
    key: 'quantityOfTOP10',
    name: '產品銷售數量TOP10',
    index: 'quantityOfTOP10',
    type: 'column',
    color: '#007979',
    render: (quantityOfTOP10) => quantityOfTOP10.map((item) => Number(Math.abs(item.quantity.toFixed(2)))),
    renderLabels: (quantityOfTOP10) => quantityOfTOP10.map((item) => item.sku ?? '-'),
    yAxisTitle: '數量',
    xAxisTitle: '品項',

  },
  {
    key: 'avgPurchase',
    name: '平均購買數量',
    index: 'avgPurchase',
    type: 'column',
    color: '#019858',
    yAxisTitle: '數量',
    xAxisTitle: '月份',

  },
  {
    key: 'quantity',
    name: '銷售數量',
    index: 'quantity',
    type: 'column',
    color: '#9F0050',
    yAxisTitle: '數量',
    xAxisTitle: '月份',

  },
  {
    key: 'total',
    name: '營業額',
    index: 'total',
    type: 'column',
    color: '#750075',
    yAxisTitle: '金額',
    xAxisTitle: '月份',

  },
  {
    key: 'numberOfPurchase',
    name: '購買人次',
    index: 'numberOfPurchase',
    type: 'column',
    color: '#4B0091',
    yAxisTitle: '人次',
    xAxisTitle: '月份',

  },
  {
    key: 'avgProductSales',
    name: '平均客單價',
    index: 'avgProductSales',
    type: 'column',
    color: '#D26900',
    yAxisTitle: '金額',
    xAxisTitle: '月份',
  }];

export const buildChartDataset = (detail = []) => {
  const content = dashboardSchemas.map((schema) => {
    const value = schema.render ? schema.render(detail?.[schema.index]) : [Number(Math.abs(detail?.[schema.index].toFixed(2)))];
    const labels = schema.renderLabels ? schema.renderLabels(detail?.[schema.index]) : [`${detail?.currentMonth}月`];
    return {
      ...schema,
      name: schema.name,
      labels,
      type: schema.type,
      data: value,
    };
  });
  return content ?? [];
};
