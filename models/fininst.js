module.exports = (sequelize, DataTypes) => {
    var FinInst = sequelize.define('FinInst', {
        name: DataTypes.CHAR
    });
    
    FinInst.associate = (models) => {
    // associations can be defined here
    };
    
    return FinInst;
};