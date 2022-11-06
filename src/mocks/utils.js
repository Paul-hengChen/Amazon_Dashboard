/* eslint-disable no-redeclare */

export const parseSearch = (search) => {
  const searchParams = new URLSearchParams(search);
  let query = {};
  for (const param of searchParams.entries()) {
    query = { ...query, [param[0]]: param[1] };
  }
  return query;
};
