const express = require('express')
const router = express.Router()

const users = require('../../middleware/users')
const auth = require('../../middleware/auth')

// Make sure each request has token added to it
router.use(auth.checkToken)

router.route('/users')
.get(auth.isAdmin, (req, res, next) => {
	res.json(users.all)
})

router.get('/users/:id', (req, res, next) => {
	const id = parseInt(req.params.id)
	if (id >= 0 && id < users.length) {
		res.json(users[id])
	} else {
		res.status(404).send('User not found')
	}
})

module.exports = router
