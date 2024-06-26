'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Restaurant.belongsTo(models.User)
    }
  }
  Restaurant.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.TEXT,
    location: DataTypes.TEXT,
    phone: DataTypes.STRING,
    googlemap: DataTypes.TEXT,
    rating: DataTypes.TEXT,
    description: DataTypes.TEXT,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};