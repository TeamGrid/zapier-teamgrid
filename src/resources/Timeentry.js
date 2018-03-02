import apiCall from '/utils/apiCall';

export const sample = {
  _id: '25Nni2dnTi2qcR7hb',
  taskId: 'FyBMR3CdYpME6NXBM',
  start: '2015-05-04T12:45:53.735Z',
  userId: 'JFZCwR6Jqg8KW7HXu',
  duration: 1,
  hourlyRate: 0,
  costRate: 25,
  end: '2015-05-04T12:46:00.427Z',
  projectId: 'MNtEAQftLWS78eo2x',
  projectName: 'TeamGrid',
  taskName: 'Budget- & Abrechnung optimieren',
  userName: 'Max Nowack',
  costs: 0.4166666666666667,
  revenue: 0,
  profit: -0.4166666666666667,
  taskCompleted: true,
  projectCompleted: true,
  archived: null,
  billed: null,
  createdAt: null,
  createdBy: null,
  contactId: null,
  listId: null,
  serviceId: null,
  contactName: null,
  serviceName: null,
};
export const inputFields = [
  {
    key: 'start', label: 'Start', type: 'datetime', required: true,
  },
  {
    key: 'end', label: 'End', type: 'datetime', required: true,
  },
  {
    key: 'taskId', label: 'Task Id', type: 'string', required: true,
  },
  {
    key: 'userId', label: 'User Id', type: 'string', required: true,
  },
  { key: 'billed', label: 'Billed', type: 'boolean' },
  { key: 'comment', label: 'Comment', type: 'string' },
];
export const outputFields = [
  { key: '_id', label: 'Id' },
  { key: 'start', label: 'Start' },
  { key: 'end', label: 'End' },
  { key: 'taskId', label: 'Task Id' },
  { key: 'userId', label: 'User Id' },
  { key: 'hourlyRate', label: 'Hourly Rate' },
  { key: 'costRate', label: 'Cost Rate' },
  { key: 'duration', label: 'Duration' },
  { key: 'billed', label: 'Billed' },
  { key: 'comment', label: 'Comment' },
  { key: 'createdAt', label: 'Created At' },
  { key: 'createdBy', label: 'Created By' },
  { key: 'contactId', label: 'Contact Id' },
  { key: 'projectId', label: 'Project Id' },
  { key: 'listId', label: 'List Id' },
  { key: 'serviceId', label: 'Service Id' },
  { key: 'contactName', label: 'Contact Name' },
  { key: 'projectName', label: 'Project Name' },
  { key: 'taskName', label: 'Task Name' },
  { key: 'serviceName', label: 'Service Name' },
  { key: 'userName', label: 'User Name' },
  { key: 'projectCompleted', label: 'Project Completed' },
  { key: 'taskCompleted', label: 'Task Completed' },
  { key: 'costs', label: 'Costs' },
  { key: 'revenue', label: 'Revenue' },
  { key: 'profit', label: 'Profit' },
];

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
      perform: (z, b) => apiCall(z, b, `/times/${b.inputData.id}`, { resolvePaging: false }),
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
      perform: (z, b) => apiCall(z, b, `/times/${b.inputData.id}`, { resolvePaging: false }).then(result => [result]),
    },
  },
  create: {
    display: {
      label: 'Add Time Entry',
      description: 'Create a new time entry.',
    },
    operation: {
      inputFields,
      sample,
      perform: (z, b) => apiCall(z, b, {
        url: '/times',
        method: 'POST',
        body: b.inputData,
      }),
    },
  },
  sample,
  outputFields,
};
