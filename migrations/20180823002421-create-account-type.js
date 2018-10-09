module.exports = {
    up: (queryInterface, Sequelize) => 
    queryInterface.createTable('AccountTypes', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        accType: {
            type: Sequelize.STRING(3),
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface/*, Sequelize*/) => 
    queryInterface.dropTable('AccountTypes'),
};