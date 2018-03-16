import apiCall from '/utils/apiCall';

export const sample = {
  userId: 'JFZCwR6Jqg9Kw7HXu',
  contactId: 'Cucym7KhSguMgPNnb',
  roleId: 'default',
  costRate: 30,
  workingHours: [{
    end: 1080,
    start: 540,
    weekday: 0,
  }, {
    end: 1080,
    start: 540,
    weekday: 1,
  }, {
    end: 1080,
    start: 540,
    weekday: 2,
  }, {
    end: 1080,
    start: 540,
    weekday: 3,
  }, {
    end: 1080,
    start: 540,
    weekday: 4,
  }],
  name: 'Max Nowack',
  emails: [
    'max.nowack@teamgridapp.com',
    'max@teamgridapp.com',
  ],
};
export const outputFields = [
  { key: 'id', label: 'User Id' },
  { key: 'name', label: 'Name' },
  { key: 'emails', label: 'Email Addresses' },
  { key: 'contactId', label: 'Contact Id' },
  { key: 'roleId', label: 'Role Id' },
  { key: 'costRate', label: 'Cost rate' },
  { key: 'currentTaskId', label: 'Current Task Id' },
  { key: 'workingHours', label: 'Working Hours' },
];

export default {
  key: 'User',
  noun: 'User',
  get: {
    display: {
      label: 'Get User',
      description: 'Gets a user.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, '/users', { resolvePaging: false })
        .then(users => users.filter(user => user.id === b.inputData.id)[0]),
    },
  },
  search: {
    display: {
      label: 'Find User With Id',
      description: 'Find a user by id.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, '/users', { resolvePaging: false })
        .then(users => users.filter(user => user.id === b.inputData.id)),
    },
  },
  sample,
  outputFields,
};
