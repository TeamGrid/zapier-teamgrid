import apiCall from '/utils/apiCall';

export default {
  type: 'custom',
  test: { url: 'https://api.teamgridapp.com/teams' },
  fields: [{
    key: 'apiKey',
    type: 'string',
    required: true,
    helpText: 'Create one in your team settings.',
  }],
  connectionLabel: (z, b) => apiCall(z, b, '/teams').then(team => `${team.name} (api key: ${b.authData.apiKey})`),
};

export const addApiKeyToHeader = (request, z, bundle) => {
  request.headers.Authorization = `Bearer ${bundle.authData.apiKey}`;
  return request;
};
