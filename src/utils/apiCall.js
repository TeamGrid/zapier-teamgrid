import qs from 'qs';
import convertId from './convertId';

export default function apiCall(z, bundle, reqOpts, options) {
  const {
    resolvePaging = true,
    oldData = [],
    limit = 1000,
    page = 1,
  } = options || {};

  const query = resolvePaging && (!reqOpts.method || reqOpts.method.toLowerCase() === 'get')
    ? { limit, page, ...reqOpts.query }
    : { ...reqOpts.query };
  const queryString = query ? `?${qs.stringify(query)}` : '';

  const requestOptions = {
    ...(typeof reqOpts !== 'string' ? reqOpts : {}),
    url: `https://api.teamgridapp.com${typeof reqOpts === 'string' ? reqOpts : reqOpts.url}${queryString}`,
  };

  if (requestOptions.data) {
    requestOptions.headers = requestOptions.headers || {};
    requestOptions.headers['Content-Type'] = 'application/json; charset=utf-8';
  }

  return z.request(requestOptions)
    .then((response) => {
      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      }
      return z.JSON.parse(response.content);
    })
    .then(({ data, pagination }) => {
      const items = convertId(data);
      if (!resolvePaging || !pagination) return items;
      const newData = oldData.concat(items);
      if (newData.length >= pagination.total) return newData;
      return apiCall(z, bundle, reqOpts, {
        resolvePaging,
        oldData: newData,
        limit,
        page: page + 1,
      });
    });
}
