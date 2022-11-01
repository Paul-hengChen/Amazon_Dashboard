import { rest } from 'msw';

const fs = require('fs');
// eslint-disable-next-line import/no-unresolved
const parse = require('csv-parse/sync');

export const handlers = [
  rest.get('/amazon/dashboard/overview', (req, res, ctx) => {
    // fs.readFile('./202208.csv', 'utf8', (err, data) => {
    //   console.log(data);
    // });
    fs.createReadStream('./202208.csv')
      .pipe(parse({ delimiter: ',', from_line: 2 }))
      .on('data', (row) => {
        console.log(row);
      })
      .on('error', (error) => {
        console.log(error.message);
      })
      .on('end', () => {
        console.log('finished');
      });
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),

];
