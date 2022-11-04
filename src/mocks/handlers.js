import { rest } from 'msw';
import { parseSearch } from './utils';
import { DATA_202209, DATA_202208 } from './mockData';

export const handlers = [
  rest.get('/amazon/dashboard/overview', (req, res, ctx) => {
    const rawData = [...DATA_202208, ...DATA_202209].map((file) => ({ ...file, date: new Date(file.date) }));
    const { startDate, endDate } = parseSearch(req.url.search);
    const filterData = rawData.filter(({ date }) => date >= new Date(startDate) && date <= new Date(endDate));
    const result = filterData.reduce((acc, cur) => {
      const salesAmount = acc.salesAmount + cur.productSales;
      return { salesAmount };
    }, { salesAmount: 0 });

    return res(
      ctx.status(200),
      ctx.json({
        result,
        filterData,
      }),
    );
  }),

];
