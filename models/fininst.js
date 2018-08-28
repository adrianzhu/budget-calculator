module.exports = (sequelize, DataTypes) => {
    var FinInst = sequelize.define('FinInst', {
        finInst: DataTypes.CHAR
    });
    
    FinInst.associate = function(models) {
    // associations can be defined here
    };
    
    return FinInst;
};