const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    // Could not use fat arrow here because 'this' is undefined when written
    // fat arrow makes 'this' consistent for all functions inside at time of creation
    User.prototype.validPassword = function(password) {
        return password == this.password;
    };

    // https://medium.freecodecamp.org/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e
    User.prototype.generateJWT = function() {
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 60);

        return jwt.sign({
            username: this.username,
            id: this._id,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        }, 'secret');
    }

    User.prototype.toAuthJSON = function() {
        return {
            _id: this._id,
            username: this.username,
            token: this.generateJWT(),
        };
    };

    User.associate = (models) => {
        User.hasMany(models.Account, {
            foreignKey: 'id',
            as: 'account_id',
        });
    };

  return User;
};