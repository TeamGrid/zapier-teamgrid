import apiCall from '/utils/apiCall';
import convertId from '/utils/convertId';
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
  key: 'ProjectCompleted',
  noun: 'Project',
  display: {
    label: 'Project Completed',
    description: 'Triggered when a project was completed.',
  },

  operation: {
    type: 'hook',
    performSubscribe: performSubscribe('project_completed'),
    performUnsubscribe,
    perform: parse,
    performList: (z, b) => apiCall(z, b, '/projects', { resolvePaging: false }).then(([result]) => {
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
