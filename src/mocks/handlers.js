import { rest } from 'msw';
import moment from 'moment';
import { parseSearch, summaryOfUSData, summaryOfJPData } from './utils';
import {
  DATA_202210, DATA_202209, DATA_202208, DATA_202201_202207, JPData,
} from './mockData';

const RAW_DATA_US = [...DATA_202201_202207, ...DATA_202208, ...DATA_202209, ...DATA_202210].map((file) => ({ ...file, date: new Date(file.date) }));
const RAW_DATA_JP = JPData.map((data) => ({ ...data, 日付_時間: new Date(data.日付_時間) }));

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
