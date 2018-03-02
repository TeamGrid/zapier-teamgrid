import { performSubscribe, performUnsubscribe, parse } from '/utils/webhooks';

const sample = {
  id: 'asdEpuAgasdabBWbAR',
  userId: 'YcqgSxJMuvjzNy9uW',
  item: {
    _id: 'asdEpuAgasdabBWbAR',
    projectId: 'YcqgSxJMuvjzNy9uW',
    contactId: 'YcqgSxJMuvjzNy9uW',
    userId: 'YcqgSxJMuvjzNy9uW',
    createdAt: new Date('2015-04-01T00:00:00.000Z'),
    createdBy: 'YcqgSxJMuvjzNy9uW',
    userName: 'Tobias Hieb',
    provider: 'sipgate',
    from: '+491234',
    to: '+491234',
    callId: 'asdga3bb2462b1k2b6bknb23bkb1j',
    direction: 'incoming',
    event: 'newCall',
    state: 'ringing',
    fromContact: {
      contactId: 'JB84urmATzjirT5HK',
      type: 'business',
      number: '+49511165320710',
      callerName: 'test GmbH',
      companyName: 'test GmbH',
      companyId: 'JB84urmATzjirT5HK',
    },
  },
};

const outputFields = [
  { key: 'id', label: 'ID' },
  { key: 'userId', label: 'User ID', helpText: 'ID of the user whose triggered the event' },
  { key: 'item', label: 'Item', dict: true },
];

export default {
  key: 'CallIncoming',
  noun: 'Call',
  display: {
    label: 'Call Incoming',
    description: 'Triggered when a call is incoming (only if telephony integration is enabled).',
  },

  operation: {
    type: 'hook',
    performSubscribe: performSubscribe('call_incoming'),
    performUnsubscribe,
    perform: parse,
    performList: () => [sample],
    sample,
    outputFields,
  },
};
