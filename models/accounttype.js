module.exports = (sequelize, DataTypes) => {
    var AccountType = sequelize.define('AccountType', {
        accType: {
        	type: DataTypes.STRING,
        },
        accountType: {
            type: DataTypes.STRING,
        },
        shortDescription: {
            type: DataTypes.STRING,
        },
        longDescription: {
            type: DataTypes.STRING
        },
    });

    // AccountType.associate = (models) => {

    // };
    return AccountType;
};