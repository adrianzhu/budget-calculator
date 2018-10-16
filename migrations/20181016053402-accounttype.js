module.exports = {
    up: (queryInterface, Sequelize) => 
    queryInterface.changeColumn( 'AccountTypes', 
        'accType',
        Sequelize.STRING,
    ),

    down: (queryInterface, Sequelize) => 
    queryInterface.changeColumn( 'AccountTypes', 
        'accType',
        Sequelize.STRING(3),
    ),
};
