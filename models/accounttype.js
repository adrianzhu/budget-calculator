module.exports = (sequelize, DataTypes) => {
    var AccountType = sequelize.define('AccountType', {
        accType: {
        	type: DataTypes.STRING(3),
        },
    });

    // AccountType.associate = (models) => {

    // };
    return AccountType;
};