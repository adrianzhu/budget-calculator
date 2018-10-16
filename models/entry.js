module.exports = (sequelize, DataTypes) => {
    var Entry = sequelize.define('Entry', {
        amount: { 
            type: DataTypes.DECIMAL,
        },
        otherParty: { 
            type: DataTypes.STRING,
        },
        description: { 
            type: DataTypes.STRING,
        },
        expense: { 
            type: DataTypes.BOOLEAN,
        },
        notes: { 
            type: DataTypes.STRING,
        },
        transactionDate: {
            type: DataTypes.DATE
        },
    });

    // Entry.associate = function(models) {
    //     Entry.hasMany(models.Account, {
    //         foreignKey: 'accountId',
    //         as: 'account_id',
    //     });
    //     Entry.belongsTo(models.Category, {
    //         foreignKey: 'categoryId',    
    //         as: 'category_id',
    //     }).
    // };
    return Entry;
};