/* eslint-disable no-redeclare */

export const parseSearch = (search) => {
  const searchParams = new URLSearchParams(search);
  let query = {};
  for (const param of searchParams.entries()) {
    query = { ...query, [param[0]]: param[1] };
  }
  return query;
};

export const buildDashboardDataset = (title, type, rawData, target, name) => rawData.reduce((acc, cur) => {
  const data = acc.data + cur[target];
  return {
    title, type, data, name,
  };
}, { title: '', type: '', data: 0 });
