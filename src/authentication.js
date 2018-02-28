export default {
  type: 'custom',
  test: { url: 'https://api.teamgridapp.com/teams' },
  fields: [{
    key: 'apiKey',
    type: 'string',
    required: true,
    helpText: 'Create one in your team settings.',
  }],
  connectionLabel: '{{bundle.authData.apiKey}}',
};

export const addApiKeyToHeader = (request, z, bundle) => {
  request.headers.Authorization = `Basic ${bundle.authData.apiKey}`;
  return request;
};
