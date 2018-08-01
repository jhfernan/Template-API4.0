const users = {
	all: [
		{
			id: 0,
			name: "Jonathan Fernandes",
			admin: true,
			username: "admin",
			password: "admin"
		},
		{
			id: 1,
			name: "James Fernandes",
			admin: false,
			username: "noadmin",
			password: "noadmin"
		}
	],

	search: (username, users) => {
		for (var i = 0; i < users.length; i++) {
			if (users[i].username === username) {
				return users[i]
			}
		}
	}
}

module.exports = users
