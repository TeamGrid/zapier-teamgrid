import { performSubscribe, performUnsubscribe, parse } from '/utils/webhooks';
import { sample as itemSample } from '/resources/Project';

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
  key: 'ProjectUpdated',
  noun: 'Call',
  display: {
    label: 'Project Updated',
    description: 'Triggered when a project was updated.',
  },

  operation: {
    type: 'hook',
    performSubscribe: performSubscribe('project_updated'),
    performUnsubscribe,
    perform: parse,
    performList: () => [],
    sample,
    outputFields,
  },
};
