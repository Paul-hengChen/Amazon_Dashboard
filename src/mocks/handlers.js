import { rest } from 'msw';
import { parseSearch } from './utils';
import { DATA_202209, DATA_202208 } from './mockData';

export const handlers = [
  rest.get('/amazon/dashboard', (req, res, ctx) => {
    const rawData = [...DATA_202208, ...DATA_202209].map((file) => ({ ...file, date: new Date(file.date) }));
    const { startDate, endDate } = parseSearch(req.url.search);
    const filterData = rawData.filter(({ date }) => date >= new Date(startDate) && date <= new Date(endDate));

    return res(
      ctx.status(200),
      ctx.json({
        filterData,
      }),
    );
  }),

  rest.get('/amazon/dashboard/overview', (req, res, ctx) => {
    const rawData = [...DATA_202208, ...DATA_202209].map((file) => ({ ...file, date: new Date(file.date) }));
    const { startDate, endDate } = parseSearch(req.url.search);

    const filterData = rawData.filter(({ date }) => date >= new Date(startDate) && date <= new Date(endDate));

    const totalOfItems = filterData.reduce((acc, cur) => {
      const quantity = acc.quantity + cur.quantity;
      const productSales = acc.productSales + cur.productSales;
      const total = acc.total + cur.total;
      const platformRelatedFee = acc.platformRelatedFee
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

    const avgPurchase = totalOfItems.quantity / filterData.length;
    const avgProductSales = totalOfItems.productSales / filterData.length;
    const numberOfPurchase = filterData.length;
    return res(
      ctx.status(200),
      ctx.json({
        ...totalOfItems, avgPurchase, numberOfPurchase, avgProductSales, filterData,
      }),
    );
  }),

];
