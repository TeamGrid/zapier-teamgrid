import apiCall from '/utils/apiCall';

export const sample = {
  _id: 'evSyQe6nnvrMYMCSF',
  name: 'Mobile: Aufgabendetailseite schließen',
  userId: 'evSyQe6nnvrMYMCSC',
  createdAt: '2015-04-25T19:07:00.104Z',
  createdBy: '5HRg3uwwtuiMKZznZ',
  projectId: 'eryS45sSqb2y7KzWA',
  listOrder: 11,
  tagIds: ['crZMsNMGBBjgrrt6K', '4JkdmuyqyyEYCzBP7'],
  plannedTime: 0,
  subTasks: null,
};
export const inputFields = [
  {
    key: 'name', label: 'Name', type: 'string', required: true,
  },
  { key: 'description', label: 'Description', type: 'string' },
  { key: 'dueDate', label: 'Due Date', type: 'datetime' },
  { key: 'plannedTime', label: 'Planned Time', type: 'integer' },
  { key: 'serviceId', label: 'Service Id', type: 'string' },
  { key: 'projectId', label: 'Project Id', type: 'string' },
  { key: 'contactId', label: 'Contact Id', type: 'string' },
  { key: 'personalListId', label: 'Personal List Id', type: 'string' },
  { key: 'personalListOrder', label: 'Personal List Order', type: 'number' },
  { key: 'listId', label: 'List Id', type: 'string' },
  { key: 'listOrder', label: 'List Order', type: 'number' },
  { key: 'order', label: 'Order', type: 'number' },
  { key: 'userId', label: 'User Id', type: 'string' },
  {
    key: 'tagIds', label: 'Tag Ids', type: 'string', list: true,
  },
  {
    key: 'subscriberIds', label: 'Subscriber Ids', type: 'string', list: true,
  },
  { key: 'completed', label: 'Completed', type: 'boolean' },
];
export const outputFields = [
  { key: '_id', label: 'Id' },
  { key: 'name', label: 'Name' },
  { key: 'description', label: 'Description' },
  { key: 'dueDate', label: 'Due Date' },
  { key: 'plannedTime', label: 'Planned Time' },
  { key: 'serviceId', label: 'Service Id' },
  { key: 'projectId', label: 'Project Id' },
  { key: 'contactId', label: 'Contact Id' },
  { key: 'personalListId', label: 'Personal List Id' },
  { key: 'personalListOrder', label: 'Personal List Order' },
  { key: 'listId', label: 'List Id' },
  { key: 'listOrder', label: 'List Order' },
  { key: 'duplicateOf', label: 'Duplicate Of' },
  { key: 'order', label: 'Order' },
  { key: 'userId', label: 'User Id' },
  { key: 'tagIds', label: 'Tag Ids' },
  { key: 'subscriberIds', label: 'Subscriber Ids' },
  { key: 'completed', label: 'Completed' },
  { key: 'subTasks', label: 'Sub Tasks' },
  { key: 'createdAt', label: 'Created At' },
  { key: 'createdBy', label: 'Created By' },
];

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
      perform: (z, b) => apiCall(z, b, `/tasks/${b.inputData.id}`, { resolvePaging: false }),
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
      perform: (z, b) => apiCall(z, b, `/tasks/${b.inputData.id}`, { resolvePaging: false }).then(result => [result]),
    },
  },
  create: {
    display: {
      label: 'Add Task',
      description: 'Create a new task.',
    },
    operation: {
      inputFields,
      sample,
      perform: (z, b) => apiCall(z, b, {
        url: '/tasks',
        method: 'POST',
        body: b.inputData,
      }),
    },
  },
  sample,
  outputFields,
};
