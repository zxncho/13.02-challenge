// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    category_id:
    {
      TYPE: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id',
      }
    }
   
    product_name:
    {
     TYPE: DataTypes.string,
     allowNull:false
    }
    
    price:
    {
      TYPE: DataTypes.float,
      allowNull:false
      validate: {
        isDecimal:true,
      }
    }

    stock:
    {
      TYPE: DataTypes.INTEGER
      allowNull: false
     validate: {
      isNumeric: true,
     },
    },

    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
