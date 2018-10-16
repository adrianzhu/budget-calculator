module.exports = (sequelize, DataTypes) => {
    var Account = sequelize.define('Account', {
        amount: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.0,
        },
    });
    Account.associate = (models) => {
        Account.hasMany(models.User, {
            foreignKey: 'id',
            as: 'user_id',
        });
        Account.belongsTo(models.FinInst, {
            foreignKey: 'id',
            as: 'finInst_id',
        });
        Account.hasMany(models.Entry, {
            foreignKey: 'id',
            as: 'entry_id',
        });
        Account.belongsTo(models.AccountType, {
            foreignKey: 'id',
            as: 'accType_id',
        });
    };

    return Account;
};