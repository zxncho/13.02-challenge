const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true,
    },

    product_id:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model:'product',
        key: 'id'
      }
    },

    product_name:
    {
     type: DataTypes.STRING,
     allowNull:false,
     references: {
      model: 'product',
      key: 'product_name',
     }
    },

    tag_id:
    {
      type: DataTypes.STRING,
      unique:false,
      // allowNull: false,
      references: {
        model:'tag',
        key: 'id'
      }
    },
    // define columns
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product-tag',
  }
);

// const seedProductTags = async () => {
//   await ProductTag.bulkCreate([categoryData]);
// };


module.exports = ProductTag;
