module.exports = (sequelize, DataTypes) => {
    var Account = sequelize.define('Account', {
        amount: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.0,
        },
    });
    // Account.associate = (models) => {
    //     Account.hasMany(models.User, {
    //         foreignKey: 'userId',
    //         as: 'user_id',
    //     });
    //     Account.belongsTo(models.FinInst, {
    //         foreignKey: 'finInstId',
    //         as: 'finInst_id',
    //     });
    //     Account.hasMany(models.Entry, {
    //         foreignKey: 'entryId',
    //         as: 'entry_id',
    //     });
    //     Account.belongsTo(models.AccountType, {
    //         foreignKey: 'accTypeId',
    //         as: 'accType_id',
    //     });
    // };

    return Account;
};