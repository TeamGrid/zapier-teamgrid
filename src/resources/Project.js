import apiCall from '/utils/apiCall';

export const sample = {
  _id: 'evSyQe6nnvrMYMCSA',
  individualId: '13-37-42',
  createdBy: '5HRg3uwwtuiMKZznZ',
  createdAt: new Date('2015-03-20T13:04:56.550Z'),
  completed: true,
  billing: {
    accounting: {
      hourlyRate: 10,
      type: 3,
    },
    budget: {
      type: 100,
    },
  },
  listId: '2t3mdrXiSvfEg3HfS',
  order: 2,
};
export const inputFields = [
  {
    key: 'name', label: 'Name', type: 'string', required: true,
  },
  { key: 'individualId', label: 'Individual Id', type: 'string' },
  { key: 'briefing', label: 'Briefing', type: 'string' },
  { key: 'dueDate', label: 'Due Date', type: 'datetime' },
  { key: 'contactId', label: 'Contact Id', type: 'string' },
  { key: 'listId', label: 'List Id', type: 'string' },
  { key: 'order', label: 'Order', type: 'number' },
  { key: 'managerId', label: 'Manager Id', type: 'string' },
  { key: 'completed', label: 'Completed', type: 'boolean' },
  { key: 'archived', label: 'Archived', type: 'boolean' },
  {
    key: 'accountingtType',
    label: 'Accountingt Type',
    type: 'integer',
    default: '100',
    choices: {
      3: 'None',
      2: 'By hourly rate',
      4: 'Use settings of assigned contact',
    },
  },
  { key: 'accountingHourlyRate', label: 'Accounting Hourly Rate', type: 'number' },
  {
    key: 'budgetType',
    label: 'Budget Type',
    type: 'integer',
    default: '100',
    choices: {
      100: 'none',
      0: 'by hours',
      1: 'by fees',
      4: 'hours per month',
      5: 'fees per month',
      6: 'use budget of assigned contact',
    },
  },
  { key: 'budgetHours', label: 'Budget Hours', type: 'number' },
  { key: 'budgetFees', label: 'Budget Fees', type: 'number' },
];
export const outputFields = [
  { key: '_id', label: 'Id' },
  { key: 'name', label: 'Name' },
  { key: 'individualId', label: 'Individual Id' },
  { key: 'briefing', label: 'Briefing' },
  { key: 'dueDate', label: 'Due Date' },
  { key: 'contactId', label: 'Contact Id' },
  { key: 'listId', label: 'List Id' },
  { key: 'order', label: 'Order' },
  { key: 'managerId', label: 'Manager Id' },
  { key: 'completed', label: 'Completed' },
  { key: 'archived', label: 'Archived' },
  { key: 'billing', label: 'Billing' },
  { key: 'createdAt', label: 'Created At' },
  { key: 'createdBy', label: 'Created By' },
];

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
      perform: (z, b) => apiCall(z, b, `/projects/${b.inputData.id}`, { resolvePaging: false }),
    },
  },
  search: {
    display: {
      label: 'Find Project With Id',
      description: 'Find a project by id.',
    },
    operation: {
      inputFields: [
        { key: 'id', required: true },
      ],
      sample,
      outputFields,
      perform: (z, b) => apiCall(z, b, `/projects/${b.inputData.id}`, { resolvePaging: false }).then(result => [result]),
    },
  },
  create: {
    display: {
      label: 'Add Project',
      description: 'Create a new project.',
    },
    operation: {
      inputFields,
      sample,
      perform: (z, b) => apiCall(z, b, {
        url: '/projects',
        method: 'POST',
        body: {
          ...b.inputData,
          billing: {
            accounting: {
              type: b.inputData.accountingtType || 3,
              hourlyRate: b.inputData.accountingHourlyRate || 0,
            },
            budget: {
              type: b.inputData.budgetType == null ? 100 : b.inputData.budgetType,
              hours: b.inputData.budgetHours || 0,
              fees: b.inputData.budgetFees || 0,
            },
          },
        },
      }),
    },
  },
  sample,
  outputFields,
};
