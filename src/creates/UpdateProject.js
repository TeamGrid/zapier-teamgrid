import apiCall from '/utils/apiCall';
import deleteId from '/utils/deleteId';
import { sample, outputFields, inputFields } from '/resources/Project';

export default {
  key: 'UpdateProject',
  noun: 'Project',
  display: {
    label: 'Update Project',
    description: 'Update a project.',
  },
  operation: {
    inputFields: [{
      key: 'id',
      label: 'Project ID',
      helpText: 'Id of the project to update',
      type: 'string',
      required: true,
    }].concat(inputFields),
    sample,
    outputFields,
    perform: (z, b) => apiCall(z, b, {
      url: `/projects/${b.inputData.id}`,
      method: 'PUT',
      body: deleteId(b.inputData),
    }),
  },
};
