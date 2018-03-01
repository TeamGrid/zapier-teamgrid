import apiCall from '/utils/apiCall';
import deleteId from '/utils/deleteId';

export default {
  key: 'StartTracking',
  noun: 'Task',
  display: {
    label: 'Start Time Tracking',
    description: 'Start time tracking for a task.',
  },
  operation: {
    inputFields: [{
      key: 'id',
      label: 'Task ID',
      type: 'string',
      required: true,
    }, {
      key: 'userId',
      label: 'User ID',
      type: 'string',
      required: true,
    }, {
      key: 'time',
      label: 'Time',
      type: 'datetime',
      required: true,
    }],
    sample: { success: true },
    perform: (z, b) => apiCall(z, b, {
      url: `/tasks/${b.inputData.id}/startTracking`,
      method: 'POST',
      body: deleteId(b.inputData),
    }).then(() => ({ success: true })),
  },
};
