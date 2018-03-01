import escape from 'lodash.escaperegexp';
import apiCall from '/utils/apiCall';
import { sample, outputFields } from '/resources/List';

export default {
  key: 'SearchList',
  noun: 'List',
  display: {
    label: 'Search Lists',
    description: 'Search contacts',
  },
  operation: {
    inputFields: [
      {
        key: 'type',
        label: 'Type',
        type: 'string',
        choices: ['tasks', 'projects', 'personal'],
        required: true,
      },
      {
        key: 'parentId',
        label: 'ID of the parent element',
        type: 'string',
        required: true,
      },
      { key: 'search', label: 'Search value', type: 'string' },
    ],
    perform: (z, b) => apiCall(z, b, '/lists').then(results => results.filter((item) => {
      if (item.type !== b.inputData.type) return false;
      if (item.parentId !== b.inputData.parentId) return false;
      const regex = new RegExp(`.*${escape(b.inputData.search)}.*`);
      return regex.test(item.name);
    })),
    sample,
    outputFields,
  },
};
