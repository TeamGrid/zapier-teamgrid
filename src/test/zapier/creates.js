import { describe, it } from 'mocha';
import 'should';
import zapier from 'zapier-platform-core';
import App from '/';
import authBundle from './auth';

const appTester = zapier.createAppTester(App);
const buildTest = ({
  name,
  fields,
  check,
}) => {
  it(name, (done) => {
    const bundle = Object.assign({
      inputData: fields,
    }, authBundle);

    appTester(App.creates[name].operation.perform, bundle)
      .then((results) => {
        check(results).should.be.ok();
        done();
      })
      .catch(done);
  });
};

describe('Creates', () => {
  [{
    name: 'UpdateContact',
    fields: { id: 'asdf', companyTitle: 'Test Company' },
    check: ({ id, companyTitle }) => id === 'asdf' && companyTitle === 'Test Company',
  }, {
    name: 'UpdateProject',
    fields: { id: 'asdf', name: 'Test Project' },
    check: ({ id, name }) => id === 'asdf' && name === 'Test Project',
  }, {
    name: 'UpdateList',
    fields: { id: 'asdf', name: 'Test list' },
    check: ({ id, name }) => id === 'asdf' && name === 'Test list',
  }, {
    name: 'UpdateTask',
    fields: { id: 'asdf', name: 'Test task' },
    check: ({ id, name }) => id === 'asdf' && name === 'Test task',
  }, {
    name: 'UpdateTimeentry',
    fields: { id: 'asdf', end: new Date('2018-03-01T11:00:00.000Z') },
    check: ({ id, duration }) => id === 'asdf' && duration === 120,
  }, {
    name: 'StartTracking',
    fields: { id: 'asdf', userId: 'asdf', time: new Date('2018-03-01T09:00:00.000Z') },
    check: ({ success }) => success,
  }, {
    name: 'StopTracking',
    fields: { id: 'asdf', time: new Date('2018-03-01T10:00:00.000Z') },
    check: ({ success }) => success,
  }].forEach(buildTest);
});
