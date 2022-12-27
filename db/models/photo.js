const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class photo extends Model {
    static associate({ House }) {
      photo.House = photo.belongsTo(House, {
        foreignKey: 'house:id',
      });
    }
  }
  photo.init(
    {
      house_id: DataTypes.INTEGER,
      path: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Photo',
    }
  );
  return photo;
};
