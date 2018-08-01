const express = require('express')
const router = express.Router()

const users = require('../middleware/users')

// Authentication handler
router.route('/authenticate')
.get((req, res, next) => {
	res.send('Coming up soon')
})

module.exports = router
