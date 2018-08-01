const express = require('express')
const router = express.Router()

const users = require('../../middleware/users')

/* GET users listing. */
router.get('/users', function(req, res, next) {
	res.json(users.all)
})

module.exports = router
