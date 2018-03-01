import apiCall from '/utils/apiCall';

export const sample = {
  _id: 'evSyQe6nnvrMYMCSB',
  type: 'company',
  companyTitle: 'TeamGrid',
  addresses: [
    {
      address: {
        fullAddress: '140 10th St, San Francisco, CA 94103, USA',
        lng: -122.41546270000003,
        lat: 37.77468959999999,
        zip: '94103',
        country: 'US',
        state: 'CA',
        city: 'San Francisco',
        street: '10th St',
        street_number: '140',
      },
      type: 'business',
    },
  ],
  createdAt: new Date('2015-09-28T06:48:28.660Z'),
  createdBy: 'evSyQe6nnvrMYMCSC',
  billing: {
    budget: {
      type: 100,
    },
    accounting: {
      type: 3,
    },
  },
};
export const inputFields = [
  {
    key: 'type',
    label: 'Type',
    type: 'string',
    choices: ['person', 'company'],
    required: true,
  },
  { key: 'companyTitle', label: 'Company Title', type: 'string' },
  { key: 'customerId', label: 'Customer Id', type: 'string' },
  {
    key: 'gender',
    label: 'Gender',
    type: 'string',
    choices: ['male', 'female'],
  },
  { key: 'salutation', label: 'Salutation', type: 'string' },
  { key: 'firstname', label: 'Firstname', type: 'string' },
  { key: 'lastname', label: 'Lastname', type: 'string' },
  { key: 'birthday', label: 'Birthday', type: 'datetime' },
  {
    key: 'accountingtType',
    label: 'Accountingt Type',
    type: 'integer',
    default: '100',
    choices: {
      100: 'None',
      2: 'By hourly rate',
    },
  },
  { key: 'accountingHourlyRate', label: 'Accounting Hourly Rate', type: 'number' },
  {
    key: 'budgetType',
    label: 'Budget Type',
    type: 'integer',
    default: '3',
    choices: {
      100: 'none',
      0: 'by hours',
      1: 'by fees',
      4: 'hours per month',
      5: 'fees per month',
    },
  },
  { key: 'budgetHours', label: 'Budget Hours', type: 'number' },
  { key: 'budgetFees', label: 'Budget Fees', type: 'number' },
];
export const outputFields = [
  { key: '_id', label: 'Id' },
  { key: 'type', label: 'Type' },
  { key: 'companyTitle', label: 'Company Title' },
  { key: 'customerId', label: 'Customer Id' },
  { key: 'gender', label: 'Gender' },
  { key: 'salutation', label: 'Salutation' },
  { key: 'firstname', label: 'Firstname' },
  { key: 'lastname', label: 'Lastname' },
  { key: 'birthday', label: 'Birthday' },
  { key: 'emails', label: 'Emails' },
  { key: 'phoneNumbers', label: 'Phone Numbers' },
  { key: 'addresses', label: 'Addresses' },
  { key: 'websites', label: 'Websites' },
  { key: 'socialNetworks', label: 'Social Networks' },
  { key: 'companies', label: 'Companies' },
  { key: 'billing', label: 'Billing' },
  { key: 'createdAt', label: 'Created At' },
  { key: 'createdBy', label: 'Created By' },
];

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
      label: 'Find Contact With Id',
      description: 'Find a contact by id.',
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
      description: 'Create a new contact.',
    },
    operation: {
      inputFields,
      sample: {
        type: 'company',
        companyTitle: 'Test GmbH',
        customerId: 'MY-CUSTOMER-ID-1234',
        accountingtType: 2,
        accountingHourlyRate: 100,
        budgetType: 0,
        budgetHours: 1200,
      },
      perform: (z, b) => apiCall(z, b, {
        url: '/contacts',
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
