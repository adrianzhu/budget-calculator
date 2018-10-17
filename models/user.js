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

    User.associate = (models) => {
        User.hasMany(models.Account, {
            foreignKey: 'id',
            as: 'account_id',
        });
    };

  return User;
};