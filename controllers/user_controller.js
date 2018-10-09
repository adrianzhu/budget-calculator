const User = require('../models').User;

module.exports = {
	getAllUsers(req, res) {
		return User
			.findAll({
				where: {
					username: 'admin'
				}
			})
			// TODO: below is experimental
			.then(user => {				
				if (user[0] !== undefined) {
					console.log('user: ', user)
					console.log('username: ', user[0].username);
				} else {
					console.log('no user found');
				}
				res.status(201).send(user[0].username);
			})
			.catch(error => res.status(400).send(error));
	},
};