// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
// const Category = require('./category.js');

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
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category', // Reference to the Category model
        key: 'id', // The primary key in the Category model
      }
    },
   
    product_name:
    {
     type: DataTypes.STRING,
     allowNull:false
    },
    
    price:
    {
      type: DataTypes.FLOAT,
      allowNull:false,
      validate: {
        isDecimal:true,
      }
    },

    stock:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
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

// const seedProducts = async () => {
//   await Product.bulkCreate([productData]);
// };


module.exports = Product;
