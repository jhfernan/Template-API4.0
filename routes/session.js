const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const users = require('../middleware/users')
const auth = require('../middleware/auth')
const config = require('../config')

// Authentication handler
router.route('/authenticate')
.get(auth.checkToken, (req, res, next) => {
	res.json({ user: req.decoded })
})
.post((req, res, next) => {
	let user = users.search(req.body.username, users.all)
	if (!user) {
		res.status(404).send('User not found')
	} else if (user.password !== req.body.password) {
		res.status(403).send('Bad credentials')
	} else if (user.password === req.body.password) {
		let data = {
			id: user.id,
			name: user.name,
			admin: user.admin,
			username: user.username
		}
		jwt.sign(data, config.secret, { expiresIn: '7d' }, (err, token) => {
			if (err) {
				res.status(500).send('There was an error creating your token')
			}
			res.json({ token: token })
		})
	} else {
		res.status(500).send('There was an error creating your token')
	}
})

module.exports = router
