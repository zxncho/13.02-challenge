const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll;
  include 
  [

  ]
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne
  [

  ]
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create
  [

  ]
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update
  [

  ]
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.findbyIdandDelete(req.params.id)
  .then(() => {
    res.status(200).json({message:'Category deleted successfully'});
  })
  .catch((err) => {
    res.status(500).json({error: errmessage});
  });
  // delete on tag by its `id` value
});

module.exports = router;
