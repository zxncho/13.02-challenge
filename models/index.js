// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
// const ProductTag = require('./ProductTag');
// const sequelize = require('../config/connection');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.belongsToMany(Product, {
  through: Tag,
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through:Product,
  foreignKey:'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through:Tag,
  foreignKey:'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
};
