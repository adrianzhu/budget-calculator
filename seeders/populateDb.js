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

    fs.readFile('./fininsts.json', function(err, data) {
        var fininsts = JSON.parse(data).fininsts;

        fininsts.forEach(function(fininst) {
            models.FinInst.create({
                name: fininst.name,
                code: fininst.code,
                alias: fininst.alias
            });
        });
    });

    fs.readFile('./accounttypes.json', function(err, data) {
        var accounttypes = JSON.parse(data).accounttypes;

        accounttypes.forEach(function(accounttype) {
            models.AccountType.create({
                accType: accounttype.accType,
                accountType: accounttype.accountType,
                shortDescription: accounttype.shortDescription,
                longDescription: accounttype.longDescription
            });
        });
    });
});