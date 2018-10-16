const fs = require('fs');
const models = require('../models');

models.sequelize.sync({force: true}).then(function() {
    fs.readFile('./users.json', function(err, data) {
        var users = JSON.parse(data).users;

        users.forEach(function(user) {
            models.User.create({
                username: user.username,
                email: user.email,
                password: user.password
            });
        });
    });

    fs.readFile('./categories.json', function(err, data) {
        var categories = JSON.parse(data).categories;

        categories.forEach(function(category) {
            models.Category.create({
                name: category.name  
            });
        });
    });
});