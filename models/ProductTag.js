const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    product_id:
    {
      TYPE: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true
    }

    tag_id:
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
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
