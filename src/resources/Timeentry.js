import apiCall from '/utils/apiCall';

export const sample = {};
export const inputFields = [];
export const outputFields = [];

export default {
  key: 'Timeentry',
  noun: 'Time Entry',
  get: {
    display: {
      label: 'Get Time Entry',
      description: 'Gets a time entry.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, `/times/${b.inputData.id}`),
    },
  },
  search: {
    display: {
      label: 'Find Time Entrys',
      description: 'Find a time entry.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, `/times/${b.inputData.id}`).then(result => [result]),
    },
  },
  create: {
    display: {
      label: 'Add Time Entry',
      description: '',
    },
    operation: {
      inputFields,
      sample: {},
      perform: (z, b) => apiCall(z, b, {
        url: '/times',
        method: 'POST',
        data: b.inputData,
      }),
    },
  },
  sample,
  outputFields,
};
