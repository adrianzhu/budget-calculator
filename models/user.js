module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        email: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        password: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
    });

    // User.associate = (models) => {
    //     User.hasMany(models.Account, {
    //         foreignKey: 'accountId',
    //         as: 'account_id',
    //     });
    // };

  return User;
};