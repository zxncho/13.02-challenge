const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    id:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true
    },
    category_name:
    {
      type: DataTypes.STRING,
      allowNull: false

    },
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
