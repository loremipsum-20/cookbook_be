const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
  //_id: ObjectId,
  name: String,
  slug: String,
  shortDescription: String,
  ingredientsList: String,
  time: String,
  description: String,
  category: String,
})


module.exports = mongoose.model('Recipe', recipeSchema)
