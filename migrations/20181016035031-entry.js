module.exports = {
    up: (queryInterface, Sequelize) => 
    queryInterface.addColumn( 'Entries', 
        'transactionDate',
        Sequelize.DATE,
    ),

    down: (queryInterface, Sequelize) => 
    queryInterface.removeColumn( 'Entries', 
        'transactionDate'
    ),
};
