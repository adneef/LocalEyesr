const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // knex()
  res.send('respond with a resource')
});

module.exports = router;
