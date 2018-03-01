import { describe, it } from 'mocha';
import 'should';
import zapier from 'zapier-platform-core';
import App from '/';

const appTester = zapier.createAppTester(App);

const bundle = {
  authData: {
    apiKey: 'abc1234',
  },
};

describe('Authentication', () => {
  it('can authenticate with api key', (done) => {
    appTester(App.authentication.test, { ...bundle })
      .then((response) => {
        response.statusCode.should.eql(200);
        done();
      })
      .catch(done);
  });
});

export default bundle;
