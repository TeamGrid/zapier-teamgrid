import escape from 'lodash.escaperegexp';
import apiCall from '/utils/apiCall';
import { sample, outputFields } from '/resources/Project';

export default {
  key: 'SearchProject',
  noun: 'Project',
  display: {
    label: 'Search Projects',
    description: 'Search projects',
  },
  operation: {
    inputFields: [
      { key: 'search', label: 'Search value', type: 'string' },
    ],
    perform: (z, b) => apiCall(z, b, '/projects').then(results => results.filter((item) => {
      const searchableString = `${item.individualId || ''} ${item.name || ''}`.trim();
      const regex = new RegExp(`.*${escape(b.inputData.search)}.*`);
      return regex.test(searchableString);
    })),
    sample,
    outputFields,
  },
};
