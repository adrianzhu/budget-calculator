module.exports = (sequelize, DataTypes) => {
    var FinInst = sequelize.define('FinInst', {
        name: {
        	type: DataTypes.STRING,
        },
        code: {
        	type: DataTypes.STRING,
        },
    });
    
    FinInst.associate = (models) => {
    // associations can be defined here
    };
    
    return FinInst;
};