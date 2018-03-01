import convertId from './convertId';

export default function apiCall(z, bundle, opts) {
  const options = {
    ...(typeof opts !== 'string' ? opts : {}),
    url: `https://api.teamgridapp.com${typeof opts === 'string' ? opts : opts.url}`,
  };

  if (options.data) {
    options.headers = options.headers || {};
    options.headers['Content-Type'] = 'application/json; charset=utf-8';
  }

  return z.request(options)
    .then((response) => {
      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      }
      return z.JSON.parse(response.content);
    })
    .then(({ data }) => convertId(data));
}
