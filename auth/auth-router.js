const router = require('express').Router();
const helpers = require('../auth/users-helpers');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  helpers.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;

  helpers.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const payload = {
          sub: user.id,
          username: user.username,
        };
        const options = {
          expiresIn: "2 days"
        };
        const token = jwt.sign(
          payload,
          process.env.JWT_SECRET || "secret",
          options
        );

        res.json({
          message: "Here is your token, do not lose it!!!!",
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
