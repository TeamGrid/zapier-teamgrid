import apiCall from '/utils/apiCall';

export const sample = {};
export const inputFields = [];
export const outputFields = [];

export default {
  key: 'Project',
  noun: 'Project',
  get: {
    display: {
      label: 'Get Project',
      description: 'Gets a project.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, `/projects/${b.inputData.id}`),
    },
  },
  search: {
    display: {
      label: 'Find Projects',
      description: 'Find a project.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, `/projects/${b.inputData.id}`).then(result => [result]),
    },
  },
  create: {
    display: {
      label: 'Add Project',
      description: '',
    },
    operation: {
      inputFields,
      sample: {},
      perform: (z, b) => apiCall(z, b, {
        url: '/projects',
        method: 'POST',
        data: b.inputData,
      }),
    },
  },
  sample,
  outputFields,
};
