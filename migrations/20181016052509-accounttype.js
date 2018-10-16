module.exports = {
    up: (queryInterface, Sequelize) => 
    [
        queryInterface.addColumn( 'AccountTypes', 
            'accountType',
            Sequelize.STRING,
        ),
        queryInterface.addColumn( 'AccountTypes', 
            'shortDescription',
            Sequelize.STRING,
        ),
        queryInterface.addColumn( 'AccountTypes', 
            'longDescription',
            Sequelize.STRING,
        )
    ],

    down: (queryInterface, Sequelize) => 
    [
        queryInterface.removeColumn( 'AccountTypes', 'alias'),
        queryInterface.removeColumn( 'AccountTypes', 'shortDescription'),
        queryInterface.removeColumn( 'AccountTypes', 'longDescription')
    ]
};
