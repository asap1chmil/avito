/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('photos', [
      {
        house_id: '1',
        path: '/img/1.2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        house_id: '1',
        path: '/img/1.2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        house_id: '1',
        path: '/img/1.3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        house_id: '2',
        path: '/img/2.1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        house_id: '2',
        path: '/img/2.2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        house_id: '3',
        path: '/img/3.1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('photos', null, {});
  },
};
