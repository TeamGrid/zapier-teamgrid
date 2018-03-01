import escape from 'lodash.escaperegexp';
import apiCall from '/utils/apiCall';
import { sample, outputFields } from '/resources/Contact';

export default {
  key: 'SearchContact',
  noun: 'Contact',
  display: {
    label: 'Search Contacts',
    description: 'Search contacts',
  },
  operation: {
    inputFields: [
      { key: 'search', label: 'Search value', type: 'string' },
    ],
    perform: (z, b) => apiCall(z, b, '/contacts').then(results => results.filter((item) => {
      const searchableString = `${item.companyTitle || ''} ${item.firstname || ''} ${item.lastname || ''}`.trim();
      const regex = new RegExp(`.*${escape(b.inputData.search)}.*`);
      return regex.test(searchableString);
    })),
    sample,
    outputFields,
  },
};
