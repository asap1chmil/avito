const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, House }) {
      Favorite.User = Favorite.belongsTo(User, {
        foreignKey: 'user_id',
      });
      Favorite.House = Favorite.belongsTo(House, {
        foreignKey: 'house_id',
      });
    }
  }
  Favorite.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        modelName: 'Users',
        key: 'id',
      },
    },
    house_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      onDelete: 'CASCADE',
      references: {
        modelName: 'Houses',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
