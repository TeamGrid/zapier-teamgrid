import apiCall from './apiCall';
import convertId from './convertId';

export const parse = (z, bundle) => [convertId(bundle.cleanedRequest.item)];

export const performSubscribe = hookName => (z, bundle) => apiCall(z, bundle, {
  url: '/webhooks',
  method: 'POST',
  body: {
    url: bundle.targetUrl,
    actions: [hookName],
  },
}).then(data => ({ id: data._id })); // eslint-disable-line no-underscore-dangle

export const performUnsubscribe = (z, b) => apiCall(z, b, {
  url: `/webhooks/${b.subscribeData.id}`,
  method: 'DELETE',
});
