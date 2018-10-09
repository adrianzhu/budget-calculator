module.exports = {
    up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Entries', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        amount: {
            type: Sequelize.DECIMAL,
        },
        otherParty: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        expense: {
            type: Sequelize.BOOLEAN,
        },
        notes: {
            type: Sequelize.STRING,
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
    queryInterface.dropTable('Entries'),

};