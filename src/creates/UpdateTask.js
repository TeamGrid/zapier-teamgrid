import apiCall from '/utils/apiCall';
import deleteId from '/utils/deleteId';
import { sample, outputFields, inputFields } from '/resources/Task';

export default {
  key: 'UpdateTask',
  noun: 'Task',
  display: {
    label: 'Update Task',
    description: 'Update a task.',
  },
  operation: {
    inputFields: [{
      key: 'id',
      label: 'Task ID',
      helpText: 'Id of the task to update',
      type: 'string',
      required: true,
    }].concat(inputFields),
    sample,
    outputFields,
    perform: (z, b) => apiCall(z, b, {
      url: `/tasks/${b.inputData.id}`,
      method: 'PUT',
      body: deleteId(b.inputData),
    }),
  },
};
