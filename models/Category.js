const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../config/connection.js');

class Category extends Model {}

Category.init(
  {
    categoryName:
    {
      type: DataTypes.String
      allowNull: false

    },
    id:
    {
      TYPE: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
