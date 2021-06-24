"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Recipe.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      ingredients: {
        allowNull: false,
        type: DataTypes.STRING
      },
      direction: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "Recipe"
    }
  );
  return Recipe;
};
