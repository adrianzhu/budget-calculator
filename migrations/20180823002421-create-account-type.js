module.exports = {
    up: (queryInterface, Sequelize) => 
    queryInterface.createTable('AccountTypes', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        accountType: {
            type: Sequelize.CHAR
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
    }),
    down: (queryInterface/*, Sequelize*/) => 
    queryInterface.dropTable('AccountTypes'),
};