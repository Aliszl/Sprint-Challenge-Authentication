const jokes = require('./jokes-router')
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db('https://icanhazdadjoke.com/search').truncate()
})


it('is running with the correct db', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })