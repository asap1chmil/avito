/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Houses', [
      {
        type: 'house',
        description: 'Beatiful house',
        price: '4500',
        photo: 'house_id',
        address: 'Nevskiy',
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'room',
        description: 'Cool room',
        price: '1500',
        photo: 'house_id',
        address: 'Peterhof',
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'flat',
        description: 'Nice flat',
        price: '1500',
        photo: 'house_id',
        address: 'Peterhof',
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Houses', null, {});
  },
};
