import apiCall from './apiCall';

export const parse = (result) => {
  const res = { ...result };
  res.id = res.item._id; // eslint-disable-line no-underscore-dangle
  return [res];
};

export const performSubscribe = hookName => (z, bundle) => apiCall(z, bundle, {
  url: '/webhooks',
  method: 'POST',
  data: {
    url: bundle.targetUrl,
    actions: [hookName],
  },
}).then(data => data._id); // eslint-disable-line no-underscore-dangle

export const performUnsubscribe = (z, b) => apiCall(z, b, {
  url: `/webhooks/${b.subscribeData.Id}`,
  method: 'DELETE',
});
