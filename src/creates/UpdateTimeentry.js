import apiCall from '/utils/apiCall';
import deleteId from '/utils/deleteId';
import { sample, outputFields, inputFields } from '/resources/Timeentry';

export default {
  key: 'UpdateTimeentry',
  noun: 'Timeentry',
  display: {
    label: 'Update Time Entry',
    description: 'Update a time entry.',
  },
  operation: {
    inputFields: [{
      key: 'id',
      label: 'Time Entry ID',
      helpText: 'Id of the time entry to update',
      type: 'string',
      required: true,
    }].concat(inputFields),
    sample,
    outputFields,
    perform: (z, b) => apiCall(z, b, {
      url: `/times/${b.inputData.id}`,
      method: 'PUT',
      body: deleteId(b.inputData),
    }),
  },
};
