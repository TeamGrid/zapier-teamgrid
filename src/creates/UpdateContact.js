import apiCall from '/utils/apiCall';
import deleteId from '/utils/deleteId';
import { sample, outputFields, inputFields } from '/resources/Contact';

export default {
  key: 'UpdateContact',
  noun: 'Contact',
  display: {
    label: 'Update Contact',
    description: 'Update a contact.',
  },
  operation: {
    inputFields: [{
      key: 'id',
      label: 'Contact ID',
      helpText: 'Id of the contact to update',
      type: 'string',
      required: true,
    }].concat(inputFields),
    sample,
    outputFields,
    perform: (z, b) => apiCall(z, b, {
      url: `/contacts/${b.inputData.id}`,
      method: 'PUT',
      body: deleteId(b.inputData),
    }),
  },
};
