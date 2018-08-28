module.exports = (sequelize, DataTypes) => {
    var Entry = sequelize.define('Entry', {
        amount: { 
            type: DataTypes.DECIMAL,
        },
        otherParty: { 
            type: DataTypes.CHAR,
        },
        description: { 
            type: DataTypes.CHAR,
        },
        expense: { 
            type: DataTypes.BOOLEAN,
        },
        notes: { 
            type: DataTypes.STRING
        },
    });

    Entry.associate = function(models) {
        Entry.hasMany(models.Account, {
            foreignKey: 'accountId',
            as: 'accountId',
        });
    };
    return Entry;
};