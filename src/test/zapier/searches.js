import { describe, it } from 'mocha';
import 'should';
import zapier from 'zapier-platform-core';
import App from '/';
import authBundle from './auth';

const appTester = zapier.createAppTester(App);
const buildTest = ({
  name,
  search = [],
}) => {
  search.forEach((s) => {
    it(`search ${name} with ${JSON.stringify(s.fields)}`, (done) => {
      const bundle = Object.assign({
        inputData: s.fields,
      }, authBundle);

      appTester(App.searches[name].operation.perform, bundle)
        .then((results) => {
          s.check(results).should.be.ok();
          done();
        })
        .catch(done);
    });
  });
};

describe('Searches', () => {
  [{
    name: 'SearchContact',
    search: [{
      fields: { search: 'asdf' },
      check: results => results.length > 0,
    }],
  }, {
    name: 'SearchProject',
    search: [{
      fields: { search: 'asdf' },
      check: results => results.length > 0,
    }],
  }, {
    name: 'SearchList',
    search: [{
      fields: { parentId: 'asdf', type: 'tasks', name: 'Test List' },
      check: results => results.length > 0,
    }],
  }].forEach(buildTest);
});
