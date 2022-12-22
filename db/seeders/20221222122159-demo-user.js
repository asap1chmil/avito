/** @type {import('sequelize-cli').Migration} */
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Artem',
          email: 'demo@gmail.com',
          login: 'ArtemV',
          passworrd: await bcrypt.hash(process.env.DEMO_PASS, saltRounds),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
