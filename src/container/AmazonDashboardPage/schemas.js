const schemas = [
  {
    key: 'productSales', title: '銷售金額', index: 'productSales', type: 'column',
  },
  {
    key: 'platformRelatedFee', title: '相關平台費用', index: 'platformRelatedFee', type: 'column',
  },
  {
    key: 'avgPurchase', title: '平均購買數量', index: 'avgPurchase', type: 'column',
  },
  {
    key: 'quantity', title: '銷售數量', index: 'quantity', type: 'column',
  },
  {
    key: 'total', title: '營業收入', index: 'total', type: 'column',
  },
  {
    key: 'numberOfPurchase', title: '購買人次', index: 'numberOfPurchase', type: 'column',
  },
  {
    key: 'avgProductSales', title: '平均客單價', index: 'avgProductSales', type: 'column',
  }];

export const buildContent = (detail) => {
  const content = schemas.map((schema) => ({
    ...schema,
    title: schema.title,
    // eslint-disable-next-line no-nested-ternary
    value: detail[schema.index] ? Math.abs(detail[schema.index].toFixed(2)) : 0,
  }));
  return content;
};

export const buildChartDataset = (detail) => {
  const content = schemas.map((schema) => ({
    ...schema,
    name: `${detail.currentMonth}月`,
    type: schema.type,
    title: schema.title,
    data: detail[schema.index] ? [Number(detail[schema.index].toFixed(2))] : [null],
  }));
  return content;
};
