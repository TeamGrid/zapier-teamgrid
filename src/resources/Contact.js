import apiCall from '/utils/apiCall';

export const sample = {};
export const inputFields = [];
export const outputFields = [];

export default {
  key: 'Contact',
  noun: 'Contact',
  get: {
    display: {
      label: 'Get Contact',
      description: 'Gets a contact.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, `/contacts/${b.inputData.id}`),
    },
  },
  search: {
    display: {
      label: 'Find Contacts',
      description: 'Find a contact.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, `/contacts/${b.inputData.id}`).then(result => [result]),
    },
  },
  create: {
    display: {
      label: 'Add Contact',
      description: '',
    },
    operation: {
      inputFields,
      sample: {},
      perform: (z, b) => apiCall(z, b, {
        url: '/contacts',
        method: 'POST',
        data: b.inputData,
      }),
    },
  },
  sample,
  outputFields,
};
