import { describe, it } from 'mocha';
import 'should';
import zapier from 'zapier-platform-core';
import App from '/';
import authBundle from './auth';

const appTester = zapier.createAppTester(App);
const buildTest = ({
  name,
  get,
  search = [],
  create,
}) => {
  if (get) {
    it(`get ${name}`, (done) => {
      const bundle = {
        inputData: { id: get.id },
        ...authBundle,
      };

      appTester(App.resources[name].get.operation.perform, bundle)
        .then((results) => {
          get.check(results).should.be.ok();
          done();
        })
        .catch(done);
    });
  }

  search.forEach((s) => {
    it(`search ${name} with ${JSON.stringify(s.fields)}`, (done) => {
      const bundle = Object.assign({
        inputData: s.fields,
      }, authBundle);

      appTester(App.resources[name].search.operation.perform, bundle)
        .then((results) => {
          s.check(results).should.be.ok();
          done();
        })
        .catch(done);
    });
  });

  if (create) {
    it(`create ${name}`, (done) => {
      const bundle = Object.assign({
        inputData: create.fields,
      }, authBundle);

      appTester(App.resources[name].create.operation.perform, bundle)
        .then((results) => {
          create.check(results).should.be.ok();
          done();
        })
        .catch(done);
    });
  }
};

describe('Resources', () => {
  [{
    name: 'Contact',
    get: {
      id: 'asdf',
      check: result => result.id === 'asdf',
    },
    search: [{
      fields: { id: 'asdf' },
      check: results => results.length > 0,
    }],
    create: {
      fields: { type: 'company', companyTitle: 'TeamGrid' },
      check: ({ id, companyTitle }) => id === 'asdf' && companyTitle === 'TeamGrid',
    },
  }, {
    name: 'Project',
    get: {
      id: 'asdf',
      check: result => result.id === 'asdf',
    },
    search: [{
      fields: { id: 'asdf' },
      check: results => results.length > 0,
    }],
    create: {
      fields: { individualId: '1234', name: 'Testproject' },
      check: ({ id, name }) => id === 'asdf' && name === 'Testproject',
    },
  }, {
    name: 'Task',
    get: {
      id: 'asdf',
      check: result => result.id === 'asdf',
    },
    search: [{
      fields: { id: 'asdf' },
      check: results => results.length > 0,
    }],
    create: {
      fields: { name: 'Testtask' },
      check: ({ id, name }) => id === 'asdf' && name === 'Testtask',
    },
  }, {
    name: 'List',
    get: {
      id: 'asdf',
      check: result => result.id === 'asdf',
    },
    search: [{
      fields: { id: 'asdf' },
      check: results => results.length > 0,
    }],
    create: {
      fields: { name: 'Test List', type: 'tasks', parentId: 'asdf' },
      check: ({ id, name }) => id === 'asdf' && name === 'Test List',
    },
  }, {
    name: 'Timeentry',
    get: {
      id: 'asdf',
      check: result => result.id === 'asdf',
    },
    search: [{
      fields: { id: 'asdf' },
      check: results => results.length > 0,
    }],
    create: {
      fields: {
        taskId: 'asdf',
        start: new Date('2018-03-01T09:00:00.000Z'),
        end: new Date('2018-03-01T10:00:00.000Z'),
      },
      check: result => result.duration === 60,
    },
  }].forEach(buildTest);
});
