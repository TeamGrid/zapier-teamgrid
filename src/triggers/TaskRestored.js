import { performSubscribe, performUnsubscribe, parse } from '/utils/webhooks';
import { sample as itemSample } from '/resources/Task';

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
  key: 'TaskRestored',
  noun: 'Task',
  display: {
    label: 'Task Restored',
    description: 'Triggered when a task was restored.',
  },

  operation: {
    type: 'hook',
    performSubscribe: performSubscribe('task_restored'),
    performUnsubscribe,
    perform: parse,
    performList: () => [],
    sample,
    outputFields,
  },
};
