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

    Example:
    return queryInterface.bulkInsert('Person', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
    */

    down: (queryInterface, Sequelize) => 
    queryInterface.bulkDelete('Users', null, {}),
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('Person', null, {});
    */
};
