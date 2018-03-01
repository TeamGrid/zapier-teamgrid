import { describe, it } from 'mocha';
import 'should';
import zapier from 'zapier-platform-core';
import App from '/';
import authBundle from './auth';

const appTester = zapier.createAppTester(App);

const buildTest = name => it(`should trigger ${name}`, (done) => {
  const bundle = {
    cleanedRequest: {
      userId: 'asdf',
      item: { _id: 'asdf' },
    },
    ...authBundle,
  };
  appTester(App.triggers[name].operation.perform, bundle)
    .then((results) => {
      results.length.should.eql(1);
      done();
    })
    .catch(done);
});

describe('Triggers', () => {
  [
    'TaskCreated',
    'TaskUpdated',
    'TaskCompleted',
    'TaskReopened',
    'TaskRemoved',
    'TaskRestored',
    'TimetrackingStarted',
    'TimetrackingStopped',
    'TimeentryCreatedManually',
    'TimeentryUpdated',
    'TimeentryRemoved',
    'ProjectCreated',
    'ProjectUpdated',
    'ProjectCompleted',
    'ProjectReopened',
    'ProjectArchived',
    'ProjectRestored',
    'ContactCreated',
    'ContactUpdated',
    'ContactRemoved',
    'ContactRestored',
    'CallIncoming',
    'CallOutgoing',
    'CallAnswered',
    'CallMissed',
    'CallHangup',
  ].forEach(buildTest);
});
