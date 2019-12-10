const request = require('supertest');
const app = require('../lib/app');

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
        expect(res.text).toEqual('Yeehaa!');
      });
  });
  it('will return 200 for GET to path = /red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Wahoo!');
      });
  });
  it('will return 200 for GET to path = /blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Nice!');
      });
  });
});



