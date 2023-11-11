const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll;
  include [

  ]
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne;
  include [

  ]
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create;
  include [
    product_id: ,
    tag_id: ,
  ]
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update
  [

  ]
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.findbyIdandDelete(req.params.id)
  .then(() => {
    res.status(200).json({message:'Tag deleted successfully'});
  })
  .catch((err) => {
    res.status(500).json({error: errmessage});
  });
  // delete on tag by its `id` value
});

module.exports = router;
