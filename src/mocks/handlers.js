import { rest } from 'msw';
import moment from 'moment';
import { parseSearch, sortingFunc } from './utils';
import { DATA_202209, DATA_202208 } from './mockData';

const RAW_DATA = [...DATA_202208, ...DATA_202209].map((file) => ({ ...file, date: new Date(file.date) }));

export const handlers = [
  rest.get('/amazon/dashboard', (req, res, ctx) => {
    // eslint-disable-next-line prefer-const
    let { startDate, endDate } = parseSearch(req.url.search);
    if (startDate === endDate) {
      startDate = `${moment(new Date(startDate)).format('YYYY-MM-DD')} 00:00`;
      endDate = `${moment(new Date(endDate)).format('YYYY-MM-DD')} 23:59`;
    }
    const currentMonth = new Date(startDate).getMonth() + 1;
    const filterData = RAW_DATA.filter(({ date }) => date >= new Date(startDate) && date <= new Date(endDate));

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

    const productSalesOfTOP10 = sortingFunc(filterData, 'productSales').slice(0, 10);
    const quantityOfTOP10 = sortingFunc(filterData, 'quantity').slice(0, 10);

    return res(
      ctx.status(200),
      ctx.json({
        ...totalOfItems, avgPurchase, numberOfPurchase, avgProductSales, filterData, currentMonth, productSalesOfTOP10, quantityOfTOP10,
      }),
    );
  }),

];
