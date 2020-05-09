import '@babel/polyfill';
import request from 'supertest';
import server from '../src/server';

describe('', () => {
  test('should return 404 invalid enpoint', async (done) => {
    const response = await request(server).get('/i');
    expect(response.status).toBe(404);
    done();
  });

  test('should return 400', async (done) => {
    const response = await request(server).post('/metric/key').send({ value: 'p' });
    expect(response.status).toBe(400);
    done();
  });

  test('should return 200', async (done) => {
    const response = await request(server).post('/metric/key').send({ value: '2' });
    expect(response.status).toBe(200);
    expect(response.body.value).toBe('2');
    done();
  });

  test('should return 400', async (done) => {
    const response = await request(server).get('/metric/key/sum');
    expect(response.status).toBe(200);
    expect(response.body.value).toBe(2);
    done();
  });
});
