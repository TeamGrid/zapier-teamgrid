import apiCall from '/utils/apiCall';
import deleteId from '/utils/deleteId';
import { sample, outputFields, inputFields } from '/resources/List';

export default {
  key: 'UpdateList',
  noun: 'List',
  display: {
    label: 'Update List',
    description: 'Update a list.',
  },
  operation: {
    inputFields: [{
      key: 'id',
      label: 'List ID',
      helpText: 'Id of the list to update',
      type: 'string',
      required: true,
    }].concat(inputFields),
    sample,
    outputFields,
    perform: (z, b) => apiCall(z, b, {
      url: `/lists/${b.inputData.id}`,
      method: 'PUT',
      body: deleteId(b.inputData),
    }),
  },
};
