const { Model } = require('sequelize');

/**
 * Photos
 * id    house_id     path
 * 1      1           "/img/1.1.jpg"
 * 2      1           "/img/1.3.jpg"
 */

module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Favorite }) {
      House.User = House.belongsTo(User, {
        foreignKey: 'user_id',
      });
      House.Favorite = House.hasMany(Favorite, {
        foreignKey: 'house_id',
      });
    }
  }
  House.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      photo: {
        type: DataTypes.TEXT,
      },
      photo2: {
        type: DataTypes.TEXT,
      },
      photo3: {
        type: DataTypes.TEXT,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'House',
      tableName: 'Houses',
    }
  );
  return House;
};
