// deprecated, do not need to use db:seed:all,
// just run 'node populateDb.js' instead

module.exports = {
    up: (queryInterface, Sequelize) => 
    queryInterface.bulkInsert('Users', [{
        username: 'admin',
        email: 'admin@admin.com',
        password: 'admin123',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {}),
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    */

    down: (queryInterface, Sequelize) => 
    queryInterface.bulkDelete('Users', null, {}),
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    */
};
