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
    const result = filterData.reduce((acc, cur) => {
      const quantity = acc.quantity + cur.quantity;

      const totalSalesAmount = acc.totalSalesAmount + cur.productSales;

      const platformRelatedFee = acc.platformRelatedFee + cur.productSalesTax + cur.shippingCredits + cur.shippingCreditsTax + cur.giftWrapCredits
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

      return { totalSalesAmount, platformRelatedFee, quantity };
    }, { totalSalesAmount: 0, platformRelatedFee: 0, quantity: 0 });
    return res(
      ctx.status(200),
      ctx.json({
        result,
        filterData,
      }),
    );
  }),

];
