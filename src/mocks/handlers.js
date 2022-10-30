import { rest } from 'msw';

export const handlers = [
  rest.get('/amazon/dashboard/overview', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      username: 'admin',
    }),
  )),

];
