const User = require('../models').User;

module.exports = {
	// TODO: make return all admin users
	getAdminUsers(req, res) {
		return User
			.findAll({
				where: {
					username: 'Admin'
				}
			})			
			.then(user => {
				foundUser = user[0];
				if (foundUser !== undefined) {					
					console.log('Admin found');
					res.status(201).end(JSON.stringify({
						user: foundUser,
						message: 'admin was found'
					}));
				} else {
					console.log('Admin was not found');
				}
			})
			.catch(error => res.status(400).send(error));
	},
	
	getAllUsers(req, res) {
		return User
			.all()
			.then(users => res.status(200).send(users))
			.catch(error => res.status(400).send(error));
	},
};