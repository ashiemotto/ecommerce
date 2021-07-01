const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  try{
    const categories = await Category.findAll({
      include:[{ model:Product}]
    });
    res.status(200).json(categories);
  }catch(err){
    res.status(500).json(err)
  }
  // find all categories
  // includes its associated Products
});

router.get('/:id',async (req, res) => {
    try{
      const categories = await Category.findByPk(req.params.id,{
        include:[{model:Product}]
      });
      res.status(200).json(categories);
    }catch(err){
      res.status(500).json(err)
    }
  // find one category by its `id` value
  // includes its associated Products
});

router.post('/',async (req, res) => {
  try{
    const categories = await Category.create(req.body)
    res.status(200).json(categories);
  }catch(err){
    res.status(500).json(err)
  }
  // create a new category
});

router.put('/:id',async (req, res) => {
  try {
    const categories = await Category.update(req.body,{
      where: {
        id: req.params.id
      }
});
  
  res.status(200).json(categories)
  }catch(err){
    res.status(500).json(err)
  }
  // update a category by its `id` value
});

router.delete('/:id', async(req, res) => {
  try {
    const categories = await Category.destroy({
      where: {
        id: req.params.id
      }

  // delete a category by its `id` value
});
  
  res.status(200).json(categories)
  }catch(err){
    res.status(500).json(err)
  }
});
module.exports = router;
