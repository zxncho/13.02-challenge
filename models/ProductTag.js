const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    product_id:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
    },

    tag_id:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:'tag',
        key: 'id'
      }
    },

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },


    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

const seedProductTags = async () => {
  await ProductTag.bulkCreate([categoryData]);
};


module.exports = {ProductTag, seedProductTags};
