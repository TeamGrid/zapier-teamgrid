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
  key: 'TimeentryCreatedManually',
  noun: 'Time Entry',
  display: {
    label: 'Time Entry Created Manually',
    description: 'Triggered when a time entry was created manually.',
  },

  operation: {
    type: 'hook',
    performSubscribe: performSubscribe('timeentry_created_manually'),
    performUnsubscribe,
    perform: parse,
    performList: () => [],
    sample,
    outputFields,
  },
};
