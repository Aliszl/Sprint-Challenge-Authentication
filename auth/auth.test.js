const server = require('../api/server');
const db = require('../database/dbConfig');
const request = require('supertest');

let token;

beforeEach(async () => {
  await db('users').truncate();
});

// describe('users',()=>{
//   it('users', ()=>{
//     expect(5).tobe(5)
//   })
// })

// it('is running with the correct db', () => {
//   expect(process.env.DB_ENV).toBe('testing')
// })

describe('register', () => {
  it('it registers a user',() => {
    const user = {  
      username: 'Aliszl',
      password: '1234',
    };
    return request(server)
      .post('/api/auth/register')
      .send(user)
      .expect(201)
      .expect('Content-Type', /json/)
      .then(res => {
      });
  });
});


module.export = token;
