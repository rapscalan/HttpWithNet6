const request = require('supertest');
const app = require('../lib/app');
const createHtml = require('../lib/utils/createHtml');

describe('createResponse', () => {
  it('will return 404 if path not found', () => {
    return request(app)
      .get('/notthere')
      .then(res => {
        expect(res.status).toEqual(404);
        expect(res.text).toEqual('Not Found');
      });
  });
  it('will return 200 for GET to path = /green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(createHtml('green'));
      });
  });
  it('will return 200 for GET to path = /red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(createHtml('red'));
      });
  });
  it('will return 200 for GET to path = /blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(createHtml('blue'));
      });
  });
  it('will return 200 for GET to path = /blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(createHtml('blue'));
      });
  });
  it('will return 200 for GET to path = /', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('hi');
      });
  });
  it('will return 200 and echo for POST to path = /echo', () => {
    return request(app)
      .post('/echo')
      .send('Yodeleyheehoo')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Yodeleyheehoo');
      });
  });
});



