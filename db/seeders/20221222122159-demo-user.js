/** @type {import('sequelize-cli').Migration} */
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const rawPassword = process.env.DEMO_PASSWORD || 'test_password';
    const saltRounds = Number(process.env.SALT_ROUNDS) || 10;
    const hashedPassword = await bcrypt.hash(rawPassword, saltRounds);

    const user = {
      status: 'false',
      name: 'User1',
      login: process.env.DEMO_USER || 'test_user',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert('Users', [user]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
