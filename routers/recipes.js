const express = require('express')
const router = express.Router()
const RecipeSchema = require('../models/RecipeModel')

router.post('/', async (req, res) => {
  // manually inserted new Entry - we don't want this most of the time
  // const student = {
  //   name: 'Gio',
  //   first_name: 'me',
  //   email: 'gio@gio.com',
  // }

  const recipe = req.body

  // you can use await/async with Try/catch block to catch error
  // or you can use promises with .then / .catch
  try {
    const newRecipe = await RecipeSchema.create(recipe)
    console.log(newRecipe)
  } catch (err) {
    console.log('err creating new recipe', err)
  }
})

router.get('/', (req, res) => {
  RecipeSchema.find({}, (err, data) => res.send(data))

})
//get all recipes
//router.get("/api/recipes", (req, res, next) => {
//  res.json(data.entries);
//});

//get 1 recipe
//router.get("/:id", (req, res, next) => {
  //console.log(data[req.params.id]);
  //res.send(data);
//});

module.exports = router
