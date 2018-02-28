export default function apiCall(z, bundle, opts) {
  const options = {
    url: `https://api.teamgridapp.com${typeof opts === 'string' ? opts : opts.url}`,
    ...opts,
  };

  return z.request(options)
    .then((response) => {
      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      }
      return z.JSON.parse(response.content);
    })
    .then(({ data }) => data);
}
