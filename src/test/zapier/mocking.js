import nock from 'nock';
import moment from 'moment';

nock('https://api.teamgridapp.com')
  .persist()
  .get('/teams')
  .reply(function mockAuth() {
    const key = this.req.headers.authorization[0].split('Bearer ')[1];
    if (key === 'abc1234') {
      return [200, {
        statusCode: 200,
        status: 'OK',
        info: 'Teams',
        data: {
          _id: 'asdEpuAgasdabBWbBR',
          name: 'TeamGrid',
        },
      }];
    }
    return [401, {
      statusCode: 401,
      error: 'Invalid Credentials',
      message: 'Invalid Credentials',
    }];
  });

nock('https://api.teamgridapp.com')
  .persist()
  .get('/contacts?limit=1000&page=1')
  .reply(200, {
    statusCode: 200,
    status: 'Ok',
    info: 'Contacts',
    data: [{
      _id: 'asdf',
      type: 'company',
      companyTitle: 'TeamGrid',
    }, {
      _id: 'fdsa',
      type: 'company',
      companyTitle: 'asdf',
    }],
    pagination: {
      total: 4,
      pages: 41,
      limit: 1000,
      page: 1,
    },
  });

nock('https://api.teamgridapp.com')
  .persist()
  .get('/contacts?limit=1000&page=2')
  .reply(200, {
    statusCode: 200,
    status: 'Ok',
    info: 'Contacts',
    data: [{
      _id: 'asdf',
      type: 'company',
      companyTitle: 'TeamGrid',
    }, {
      _id: 'fdsa',
      type: 'company',
      companyTitle: 'asdf',
    }],
    pagination: {
      total: 4,
      pages: 2,
      limit: 1000,
      page: 2,
    },
  });

nock('https://api.teamgridapp.com')
  .persist()
  .get('/contacts/asdf')
  .reply(200, {
    statusCode: 200,
    status: 'Ok',
    info: 'Contacts',
    data: {
      _id: 'asdf',
      type: 'company',
      companyTitle: 'TeamGrid',
    },
  });

nock('https://api.teamgridapp.com')
  .persist()
  .post('/contacts')
  .reply(201, (uri, body) => {
    const data = JSON.parse(body);
    return {
      statusCode: 201,
      status: 'Created',
      info: 'Contacts',
      data: {
        _id: 'asdf',
        ...data,
      },
    };
  });

nock('https://api.teamgridapp.com')
  .persist()
  .put('/contacts/asdf')
  .reply(200, (uri, body) => {
    const data = JSON.parse(body);
    return {
      statusCode: 200,
      status: 'Ok',
      info: 'Contacts',
      data: {
        _id: 'asdf',
        ...data,
      },
    };
  });

nock('https://api.teamgridapp.com')
  .persist()
  .get('/users')
  .reply(200, {
    statusCode: 200,
    status: 'Ok',
    info: 'Users',
    data: [{
      userId: 'asdf',
      name: 'Test user asdf',
      emails: ['test@example.com'],
    }],
  });

nock('https://api.teamgridapp.com')
  .persist()
  .get('/projects?limit=1000&page=1')
  .reply(200, {
    statusCode: 200,
    status: 'Ok',
    info: 'Projects',
    data: [{
      _id: 'asdf',
      individualId: '1234',
      name: 'Testproject',
    }, {
      _id: 'fdsa',
      individualId: 'asdf',
      name: 'Testproject',
    }],
  });

nock('https://api.teamgridapp.com')
  .persist()
  .get('/projects/asdf')
  .reply(200, {
    statusCode: 200,
    status: 'Ok',
    info: 'Projects',
    data: {
      _id: 'asdf',
      individualId: '1234',
      name: 'Testproject',
    },
  });

nock('https://api.teamgridapp.com')
  .persist()
  .post('/projects')
  .reply(201, (uri, body) => {
    const data = JSON.parse(body);
    return {
      statusCode: 201,
      status: 'Created',
      info: 'Projects',
      data: {
        _id: 'asdf',
        ...data,
      },
    };
  });

nock('https://api.teamgridapp.com')
  .persist()
  .put('/projects/asdf')
  .reply(200, (uri, body) => {
    const data = JSON.parse(body);
    return {
      statusCode: 200,
      status: 'Ok',
      info: 'Projects',
      data: {
        _id: 'asdf',
        ...data,
      },
    };
  });


nock('https://api.teamgridapp.com')
  .persist()
  .get('/tasks/asdf')
  .reply(200, {
    statusCode: 200,
    status: 'Ok',
    info: 'Tasks',
    data: {
      _id: 'asdf',
    },
  });

nock('https://api.teamgridapp.com')
  .persist()
  .get('/tasks?limit=1000&page=1')
  .reply(200, {
    statusCode: 200,
    status: 'Ok',
    info: 'Tasks',
    data: [{
      _id: 'asdf',
      name: 'Testtask',
    }, {
      _id: 'fdsa',
      name: 'asdf',
    }],
  });

nock('https://api.teamgridapp.com')
  .persist()
  .post('/tasks')
  .reply(201, (uri, body) => {
    const data = JSON.parse(body);
    return {
      statusCode: 201,
      status: 'Created',
      info: 'Tasks',
      data: {
        _id: 'asdf',
        ...data,
      },
    };
  });

nock('https://api.teamgridapp.com')
  .persist()
  .put('/tasks/asdf')
  .reply(200, (uri, body) => {
    const data = JSON.parse(body);
    return {
      statusCode: 200,
      status: 'Ok',
      info: 'Tasks',
      data: {
        _id: 'asdf',
        ...data,
      },
    };
  });

nock('https://api.teamgridapp.com')
  .persist()
  .post('/tasks/asdf/startTracking')
  .reply((uri, body) => {
    const data = JSON.parse(body);
    if (!data.userId || !data.time) {
      return [400, {
        statusCode: 400,
        status: 'Bad Request',
        info: 'error',
        error: 'Bad Request',
      }];
    }
    return [204, {
      statusCode: 204,
      status: 'No Content',
      info: 'Tasks',
    }];
  });

nock('https://api.teamgridapp.com')
  .persist()
  .post('/tasks/asdf/stopTracking')
  .reply((uri, body) => {
    const data = JSON.parse(body);
    if (!data.time) {
      return [400, {
        statusCode: 400,
        status: 'Bad Request',
        info: 'error',
        error: 'Bad Request',
      }];
    }
    return [204, {
      statusCode: 204,
      status: 'No Content',
      info: 'Tasks',
    }];
  });

nock('https://api.teamgridapp.com')
  .persist()
  .get('/times/asdf')
  .reply(200, {
    statusCode: 200,
    status: 'Ok',
    info: 'Times',
    data: {
      _id: 'asdf',
    },
  });

nock('https://api.teamgridapp.com')
  .persist()
  .post('/times')
  .reply(201, (uri, body) => {
    const data = JSON.parse(body);
    data.duration = moment(data.end).diff(data.start, 'minutes');
    return {
      statusCode: 201,
      status: 'Created',
      info: 'Times',
      data: {
        _id: 'asdf',
        ...data,
      },
    };
  });

nock('https://api.teamgridapp.com')
  .persist()
  .put('/times/asdf')
  .reply(200, (uri, body) => {
    const data = JSON.parse(body);
    data.duration = moment(data.end).diff(new Date('2018-03-01T09:00:00.000Z'), 'minutes');
    return {
      statusCode: 200,
      status: 'Ok',
      info: 'Times',
      data: {
        _id: 'asdf',
        ...data,
      },
    };
  });

nock('https://api.teamgridapp.com')
  .persist()
  .get('/lists/asdf')
  .reply(200, {
    statusCode: 200,
    status: 'Ok',
    info: 'Lists',
    data: {
      _id: 'asdf',
    },
  });

nock('https://api.teamgridapp.com')
  .persist()
  .get('/lists?limit=1000&page=1')
  .reply(200, {
    statusCode: 200,
    status: 'Ok',
    info: 'Lists',
    data: [{
      _id: 'asdf',
      parentId: 'asdf',
      type: 'tasks',
      name: 'Testtask',
    }, {
      _id: 'fdsa',
      parentId: 'asdf',
      type: 'tasks',
      name: 'asdf',
    }],
  });

nock('https://api.teamgridapp.com')
  .persist()
  .post('/lists')
  .reply(201, (uri, body) => {
    const data = JSON.parse(body);
    return {
      statusCode: 201,
      status: 'Created',
      info: 'Lists',
      data: {
        _id: 'asdf',
        ...data,
      },
    };
  });

nock('https://api.teamgridapp.com')
  .persist()
  .put('/lists/asdf')
  .reply(200, (uri, body) => {
    const data = JSON.parse(body);
    return {
      statusCode: 200,
      status: 'Ok',
      info: 'Lists',
      data: {
        _id: 'asdf',
        ...data,
      },
    };
  });
