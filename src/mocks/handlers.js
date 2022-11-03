import { rest } from 'msw';
import { DATA_202209, DATA_202208 } from './mockData';

export const handlers = [
  rest.get('/amazon/dashboard/overview', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      result: DATA_202208,
      result1: DATA_202209,

    }),
  )),

];
