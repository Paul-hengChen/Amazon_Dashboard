const schemas = [
  { key: 'productSales', title: '銷售金額', index: 'productSales' },
  { key: 'platformRelatedFee', title: '相關平台費用', index: 'platformRelatedFee' },
  { key: 'avgPurchase', title: '平均購買數量', index: 'avgPurchase' },
  { key: 'quantity', title: '銷售數量', index: 'quantity' },
  { key: 'total', title: '營業收入', index: 'total' },
  { key: 'numberOfPurchase', title: '購買人次', index: 'numberOfPurchase' },
  { key: 'avgProductSales', title: '平均客單價', index: 'avgProductSales' }];

export const buildContent = (data) => {
  const content = schemas.map((schema) => ({
    ...schema,
    title: schema.title,
    // eslint-disable-next-line no-nested-ternary
    value: typeof data[schema.index] === 'number' ? Math.abs(data[schema.index].toFixed(2))
      : data[schema.index] ? data[schema.index] : '-',
  }));
  return content;
};
