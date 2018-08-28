module.exports = (sequelize, DataTypes) => {
    var Account = sequelize.define('Account', {
        amount: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.0,
        },
    });
    Account.associate = (models) => {
        Account.hasMany(model.User, {
            foreignKey: 'userId',
            as: 'userId',
        });
        Account.belongsTo(model.FinInst, {
            foreignKey: 'finInstId',
            as: 'finInstId',
        });
        Account.hasMany(model.Entry, {
            foreignKey: 'entryId',
            as: 'entryId',
        });
        Account.belongsTo(model.AccountType, {
            foreignKey: 'accountTypeId',
            as: 'accountType',
        });
    };

    return Account;
};