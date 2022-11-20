import { rest } from 'msw';
import moment from 'moment';
import { parseSearch, summaryOfUSData, summaryOfJPData } from './utils';
import {
  DATA_202210, DATA_202209, DATA_202208, DATA_202201_202207, JPData,
} from './mockData';

const RAW_DATA_US = [...DATA_202201_202207, ...DATA_202208, ...DATA_202209, ...DATA_202210].map((file) => ({ ...file, date: new Date(file.date) }));
const RAW_DATA_JP = JPData.map((data) => {
  const 商品売上 = typeof data.商品売上 === 'string' ? Number(data.商品売上.replace(',', '')) : Number(data.商品売上);
  const 商品の売上税 = typeof data.商品の売上税 === 'string' ? Number(data.商品の売上税.replace(',', '')) : Number(data.商品の売上税);
  return {
    ...data,
    date: new Date(data.date),
    total: typeof data.total === 'string' ? Number(data.total.replace(',', '')) : Number(data.total),
    商品売上,
    商品の売上税,
    その他: typeof data.その他 === 'string' ? Number(data.その他.replace(',', '')) : Number(data.その他),
    FBA手数料: typeof data.FBA手数料 === 'string' ? Number(data.FBA手数料.replace(',', '')) : Number(data.FBA手数料),
    手数料: typeof data.手数料 === 'string' ? Number(data.手数料.replace(',', '')) : Number(data.手数料),
    diffProductSales: 商品売上 + 商品の売上税,
  };
});

export const handlers = [
  rest.get('/amazon/dashboard', (req, res, ctx) => {
    // eslint-disable-next-line prefer-const
    let { startDate, endDate, area } = parseSearch(req.url.search);
    if (startDate === endDate) {
      startDate = `${moment(new Date(startDate)).format('YYYY-MM-DD')} 00:00`;
      endDate = `${moment(new Date(endDate)).format('YYYY-MM-DD')} 23:59`;
    }
    const currentMonth = new Date(startDate).getMonth() + 1;
    const filterData = area === 'US'
      ? RAW_DATA_US.filter(({ date }) => date >= new Date(startDate) && date <= new Date(endDate))
      : RAW_DATA_JP.filter(({ date }) => date >= new Date(startDate) && date <= new Date(endDate));

    const data = area === 'US' ? summaryOfUSData(filterData) : summaryOfJPData(filterData);
    return res(
      ctx.status(200),
      ctx.json({ ...data, filterData, currentMonth }),
    );
  }),

];
