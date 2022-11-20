/* eslint-disable no-redeclare */

export const parseSearch = (search) => {
  const searchParams = new URLSearchParams(search);
  let query = {};
  for (const param of searchParams.entries()) {
    query = { ...query, [param[0]]: param[1] };
  }
  return query;
};

export const sortingFunc = (items, target) => items.sort((a, b) => b[target] - a[target]);

export const summaryOfUSData = (filterData) => {
  const totalOfItems = filterData.reduce((acc, cur) => {
    const total = acc.total + cur.total; // 營業收入

    const quantity = acc.quantity + cur.quantity; // 銷售數量

    const productSales = acc.productSales + cur.productSales; // 銷售金額

    const platformRelatedFee = acc.platformRelatedFee // 平台相關費用
    + cur.productSalesTax
    + cur.shippingCredits
    + cur.shippingCreditsTax
    + cur.giftWrapCredits
    + cur.giftwrapCreditsTax
    + cur.regulatoryFee
    + cur.taxOnRegulatoryFee
    + cur.promotionalRebates
    + cur.promotionalRebatesTax
    + cur.marketplaceWithheldTax
    + cur.sellingFees
    + cur.fbaFees
    + cur.otherTransactionFees
    + cur.other;
    return {
      productSales, platformRelatedFee, quantity, total,
    };
  }, {
    productSales: 0, platformRelatedFee: 0, quantity: 0, total: 0,
  });

  const avgPurchase = totalOfItems.quantity / filterData.length; // 平均購買量

  const avgProductSales = totalOfItems.productSales / filterData.length; // 平均客單價

  const numberOfPurchase = filterData.length; // 購買人次

  const productSalesOfTOP10 = sortingFunc(filterData, 'productSales').slice(0, 10); // 產品銷售金額TOP10
  const quantityOfTOP10 = sortingFunc(filterData, 'quantity').slice(0, 10); // 產品銷售數量TOP10

  return {
    ...totalOfItems, avgPurchase, numberOfPurchase, avgProductSales, productSalesOfTOP10, quantityOfTOP10,
  };
};

export const summaryOfJPData = (filterData) => {
  const totalOfItems = filterData.reduce((acc, cur) => {
    const total = acc.total + cur.total; // 營業收入

    const quantity = acc.quantity + cur.quantity; // 銷售數量

    const productSales = acc.productSales + cur.商品売上 + cur.商品の売上税; // 銷售金額

    const platformRelatedFee = acc.platformRelatedFee // 平台相關費用
    + cur.配送料
    + cur.配送料の税金
    + cur.ギフト包装手数料
    + cur.ギフト包装クレジットの税金
    + cur.Amazonポイントの費用
    + cur.プロモーション割引額
    + cur.プロモーション割引の税金
    + cur.源泉徴収税を伴うマーケットプレイス
    + cur.手数料
    + cur.FBA手数料
    + cur.その他;
    return {
      productSales, platformRelatedFee, quantity, total,
    };
  }, {
    productSales: 0, platformRelatedFee: 0, quantity: 0, total: 0,
  });

  const avgPurchase = totalOfItems.quantity / filterData.length; // 平均購買量

  const avgProductSales = totalOfItems.productSales / filterData.length; // 平均客單價

  const numberOfPurchase = filterData.length; // 購買人次

  const productSalesOfTOP10 = sortingFunc(filterData, 'diffProductSales').slice(0, 10); // 產品銷售金額TOP10
  const quantityOfTOP10 = sortingFunc(filterData, 'quantity').slice(0, 10); // 產品銷售數量TOP10

  return {
    ...totalOfItems, avgPurchase, numberOfPurchase, avgProductSales, quantityOfTOP10, productSalesOfTOP10,
  };
};
