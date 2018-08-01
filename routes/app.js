const express = require('express')
const router = express.Router()

// Authentication handler
router.route('/')
.get((req, res, next) => {
	res.send('API example')
})

module.exports = router
