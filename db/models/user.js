const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ House, Favorite }) {
      User.House = User.hasMany(House, {
        foreignKey: 'user_id',
      });
      User.Favorite = User.hasMany(Favorite, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    status: {
      type: DataTypes.BOOLEAN,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    login: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
