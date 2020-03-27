const jokes = require("./jokes-router");
const db = require("../database/dbConfig");
const router = require('express').Router();
const helpers = require('../auth/users-helpers');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

it("is running with the correct db", () => {
  expect(process.env.DB_ENV).toBe("testing");
});

// it("returns expected data", () => {
//   return axios
//     .get("https://icanhazdadjoke.com/search")
//     .expect(200);
// });
