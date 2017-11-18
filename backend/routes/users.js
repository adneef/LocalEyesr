const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {

  // res.send(`${(req.cookies.session.sig)} ` + ` ${(req.cookies.session)}`)

  knex('users')
  .select('id', 'google_id')
  .then((allUsers) => {
    if(!allUsers) {
      res.sendStatus(404)
      return
    }
    res.send(allUsers)
  })
})

// GET a specific user
router.get('/:id')

module.exports = router
