const request = require('supertest');
const app = require('../app.js');

describe('Auth routes', () => {
  describe('Get /', () => {
    it('Should return 200', async () => {
      const res = await request(app)
        .get('/')
        .expect(200);

      console.log("res.body", res.body);

      expect(true).toBeEqual( true);
    });
  });
});
