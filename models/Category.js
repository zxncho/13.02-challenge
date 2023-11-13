const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

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

const seedCategories = async () => {
  await Category.bulkCreate([categoryData]);
};

module.exports = {Category, seedCategories};
