const express = require("express");
const router = express.Router();
const RecipeSchema = require("../models/RecipeModel");

router.post("/", async (req, res) => {
  const recipe = new RecipeSchema({
    name: req.body.name,
    slug: req.body.slug,
    shortDescription: req.body.shortDescription,
    ingredientsList: req.body.ingredientsList,
    time: req.body.time,
    description: req.body.description,
    category: req.body.category,
    imageURL: req.body.imageURL,
  });
  await recipe.save();
  res.send(recipe);
});

router.get("/", (req, res) => {
  RecipeSchema.find({}, (err, data) => res.send(data));
});

router.get("/:slug", async (req, res) => {
  try {
    const recipe = await RecipeSchema.findOne({ slug: req.params.slug });
    res.send(recipe);
  } catch {
    res.status(404);
    res.send({ error: "Recipe doesn't exist!" });
  }
});

module.exports = router;
