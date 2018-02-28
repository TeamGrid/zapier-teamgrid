import apiCall from '/utils/apiCall';

export const sample = {};
export const inputFields = [];
export const outputFields = [];

export default {
  key: 'Task',
  noun: 'Task',
  get: {
    display: {
      label: 'Get Task',
      description: 'Gets a task.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, `/tasks/${b.inputData.id}`),
    },
  },
  search: {
    display: {
      label: 'Find Tasks',
      description: 'Find a task.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, `/tasks/${b.inputData.id}`).then(result => [result]),
    },
  },
  create: {
    display: {
      label: 'Add Task',
      description: '',
    },
    operation: {
      inputFields,
      sample: {},
      perform: (z, b) => apiCall(z, b, {
        url: '/tasks',
        method: 'POST',
        data: b.inputData,
      }),
    },
  },
  sample,
  outputFields,
};
