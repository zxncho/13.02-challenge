const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = async () => {
  try {
    await Category.bulkCreate(categoryData);
    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};


module.exports = seedCategories;
