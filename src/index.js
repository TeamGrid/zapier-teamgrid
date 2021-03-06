import { version as platformVersion } from 'zapier-platform-core';
import triggers from '/triggers';
import resources from '/resources';
import searches from '/searches';
import creates from '/creates';
import authentication, { addApiKeyToHeader } from '/authentication';
import { version } from '../package.json';

export default {
  version,
  platformVersion,
  authentication,
  beforeRequest: [addApiKeyToHeader],
  afterResponse: [],
  resources,
  triggers,
  searches,
  creates,
};
