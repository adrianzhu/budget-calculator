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

    getCurrent(req, res) {
        console.log('what');
        if (req) {
            console.log('session exists')
            console.log(req.session)
            console.log(req.user)
        } else {
            console.log('it does not')
        }
        console.log('getCurrent: ', req.user.username);
        return User
            .findAll({
                where: {
                    username: req.user.username
                }
            })
            .then(user => {
                foundUser = user[0];
                console.log('got db');
                if (foundUser !== undefined) {                  
                    console.log('Current user found', foundUser.username);
                    res.status(201).end(JSON.stringify({
                        user: foundUser
                    }));
                } else {
                    console.log('Current user was not found');
                }
            })
            .catch(error => res.status(400).send(error));
    },
};
