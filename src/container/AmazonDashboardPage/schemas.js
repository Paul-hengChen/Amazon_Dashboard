const overviewSchemas = [
  {
    key: 'currentMonth', title: '時間', index: 'currentMonth', render: (currentMonth) => `${currentMonth}月`,
  },
  {
    key: 'productSales', title: '銷售金額', index: 'productSales', render: (productSales) => Math.abs(productSales).toFixed(2),
  },
  {
    key: 'platformRelatedFee', title: '相關平台費用', index: 'platformRelatedFee', render: (platformRelatedFee) => Math.abs(platformRelatedFee).toFixed(2),
  },
  {
    key: 'avgPurchase', title: '平均購買數量', index: 'avgPurchase', render: (avgPurchase) => Math.abs(avgPurchase).toFixed(2),
  },
  {
    key: 'quantity', title: '銷售數量', index: 'quantity', render: (quantity) => Math.abs(quantity).toFixed(2),
  },
  {
    key: 'total', title: '營業收入', index: 'total', render: (total) => Math.abs(total).toFixed(2),
  },
  {
    key: 'numberOfPurchase', title: '購買人次', index: 'numberOfPurchase', render: (numberOfPurchase) => Math.abs(numberOfPurchase).toFixed(2),
  },
  {
    key: 'avgProductSales', title: '平均客單價', index: 'avgProductSales', render: (avgProductSales) => Math.abs(avgProductSales).toFixed(2),
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
    key: 'productSales', name: '銷售金額', index: 'productSales', type: 'column', color: '#004B97',
  },
  {
    key: 'platformRelatedFee', name: '相關平台費用', index: 'platformRelatedFee', type: 'column', color: '#007979',
  },
  {
    key: 'avgPurchase', name: '平均購買數量', index: 'avgPurchase', type: 'column', color: '#019858',
  },
  {
    key: 'quantity', name: '銷售數量', index: 'quantity', type: 'column', color: '#9F0050',
  },
  {
    key: 'total', name: '營業收入', index: 'total', type: 'column', color: '#750075',
  },
  {
    key: 'numberOfPurchase', name: '購買人次', index: 'numberOfPurchase', type: 'column', color: '#4B0091',
  },
  {
    key: 'avgProductSales', name: '平均客單價', index: 'avgProductSales', type: 'column', color: '#D26900',
  }];

export const buildChartDataset = (detail) => {
  const content = dashboardSchemas.map((schema) => ({
    ...schema,
    name: schema.name,
    label: [`${detail.currentMonth}月`],
    type: schema.type,
    data: detail[schema.index] ? [Number(Math.abs(detail[schema.index].toFixed(2)))] : [null],
  }));
  return content;
};
