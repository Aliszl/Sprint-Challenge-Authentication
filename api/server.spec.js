const server = require('./server')
const request = require('supertest')

it('is running with the correct db', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

// describe('server.js', () => {
//   // describe('[GET] /', () => {
//   //   it('runs correctly', () => {
//   //     return request(server).get('/')
//   //       .expect(200)
//   //       .expect('Content-Type', /json/)
//   //       // .expect('Content-Length', '12')
//   //       // .expect({ api: "up" })
//   //   })
//   // })

//   describe('[GET] /api/jokes', () => {
//     it('works correctly', () => {
//       return request(server).get('/api/jokes')
//         .then(response => {
//           // usual jest
//           expect(response.statusCode).toBe(200)
//         })
//     })
//   })
// })