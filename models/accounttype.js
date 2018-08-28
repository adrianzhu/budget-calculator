module.exports = (sequelize, DataTypes) => {
    var AccountType = sequelize.define('AccountType', {
        accountType: DataTypes.CHAR
    });
    AccountType.associate = (models) => {

    };
    return AccountType;
};