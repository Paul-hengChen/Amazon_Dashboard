const schemas = [
  { key: 2, title: '銷售金額', index: 'productSales' },
  { key: 3, title: '相關平台費用', index: 'platformRelatedFee' },
  { key: 4, title: '平均購買數量', index: 'avgPurchase' },
  { key: 5, title: '銷售數量', index: 'quantity' },
  { key: 6, title: '營業收入', index: 'total' },
  { key: 7, title: '購買人次', index: 'numberOfPurchase' },
  { key: 8, title: '平均客單價', index: 'avgProductSales' }];

export const buildContent = (data) => {
  const content = schemas.map((schema) => ({
    ...schema,
    title: schema.title,
    value: typeof data[schema.index] === 'number' ? Math.abs(data[schema.index].toFixed(2)) : data[schema.index],
  }));
  return content;
};
