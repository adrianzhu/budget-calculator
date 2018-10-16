module.exports = {
    up: (queryInterface, Sequelize) => 
    queryInterface.addColumn( 'FinInsts', 
        'alias',
        Sequelize.STRING,
    ),

    down: (queryInterface, Sequelize) => 
    queryInterface.removeColumn( 'FinInsts', 
        'alias'
    ),
};
