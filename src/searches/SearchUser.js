import escape from 'lodash.escaperegexp';
import apiCall from '/utils/apiCall';
import { sample, outputFields } from '/resources/User';

export default {
  key: 'SearchUser',
  noun: 'User',
  display: {
    label: 'Search Users',
    description: 'Search users',
  },
  operation: {
    inputFields: [
      { key: 'search', label: 'Search value', type: 'string' },
    ],
    perform: (z, b) => apiCall(z, b, '/users', { resolvePaging: false }).then(results => results.filter((item) => {
      const searchableString = `${item.emails.join(' ')} ${item.name || ''}`.trim();
      const regex = new RegExp(`.*${escape(b.inputData.search)}.*`);
      return regex.test(searchableString);
    })),
    sample,
    outputFields,
  },
};
