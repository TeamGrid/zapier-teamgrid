import apiCall from '/utils/apiCall';
import convertId from '/utils/convertId';
import { performSubscribe, performUnsubscribe, parse } from '/utils/webhooks';
import { sample as itemSample } from '/resources/Timeentry';

const sample = {
  id: 'asdEpuAgasdabBWbAR',
  userId: 'YcqgSxJMuvjzNy9uW',
  item: itemSample,
};

const outputFields = [
  { key: 'id', label: 'ID' },
  { key: 'userId', label: 'User ID', helpText: 'ID of the user whose triggered the event' },
  { key: 'item', label: 'Item', dict: true },
];

export default {
  key: 'TimeentryRemoved',
  noun: 'Time Entry',
  display: {
    label: 'Time Entry Removed',
    description: 'Triggered when a time entry was archived.',
  },

  operation: {
    type: 'hook',
    performSubscribe: performSubscribe('timeentry_removed'),
    performUnsubscribe,
    perform: parse,
    performList: (z, b) => apiCall(z, b, '/times', { resolvePaging: false }).then(([result]) => {
      const item = convertId(result);
      return [{
        id: item.id,
        userId: item.createdBy,
        item,
      }];
    }),
    sample,
    outputFields,
  },
};
