import apiCall from '/utils/apiCall';

export const sample = {
  _id: 'evSyQe6nnvrMYMCSF',
  name: 'Tst',
  type: 'tasks',
  parentId: 'sNocCpFd9jpvRp6HL',
  createdAt: '2015-04-08T13:18:20.765Z',
  createdBy: '5HRg3uwwtuiMKZznZ',
};
export const inputFields = [
  {
    key: 'name', label: 'Name', type: 'string', required: true,
  },
  {
    key: 'type',
    label: 'Type',
    type: 'string',
    choices: ['tasks', 'projects', 'personal'],
    required: true,
  },
  { key: 'parentId', label: 'ID of the parent element', type: 'string' },
];
export const outputFields = [
  { key: '_id', label: 'Id' },
  { key: 'name', label: 'Name' },
  { key: 'type', label: 'Type' },
  { key: 'parentId', label: 'ID of the parent element' },
  { key: 'createdAt', label: 'Created At' },
  { key: 'createdBy', label: 'Created By' },
];

export default {
  key: 'List',
  noun: 'List',
  get: {
    display: {
      label: 'Get List',
      description: 'Gets a list.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, `/lists/${b.inputData.id}`),
    },
  },
  search: {
    display: {
      label: 'Find Lists',
      description: 'Find a list.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, `/lists/${b.inputData.id}`).then(result => [result]),
    },
  },
  create: {
    display: {
      label: 'Add List',
      description: 'Create a new list.',
    },
    operation: {
      inputFields,
      sample,
      perform: (z, b) => apiCall(z, b, {
        url: '/lists',
        method: 'POST',
        body: b.inputData,
      }),
    },
  },
  sample,
  outputFields,
};
