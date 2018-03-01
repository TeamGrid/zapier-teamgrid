import apiCall from '/utils/apiCall';
import deleteId from '/utils/deleteId';

export default {
  key: 'StopTracking',
  noun: 'Task',
  display: {
    label: 'Stop Time Tracking',
    description: 'Stop time tracking for a task.',
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
      url: `/tasks/${b.inputData.id}/stopTracking`,
      method: 'POST',
      body: deleteId(b.inputData),
    }).then(() => ({ success: true })),
  },
};
