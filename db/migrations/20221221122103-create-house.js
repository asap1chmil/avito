/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Houses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      photo: {
        type: Sequelize.TEXT,
      },
      photo2: {
        type: Sequelize.TEXT,
      },
      photo3: {
        type: Sequelize.TEXT,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Houses');
  },
};
