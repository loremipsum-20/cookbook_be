const express = require("express");
const router = express.Router();
const RecipeSchema = require("../models/RecipeModel");

// router.post("/", async (req, res) => {
//   // manually inserted new Entry - we don't want this most of the time
//   // const student = {
//   //   name: 'Gio',
//   //   first_name: 'me',
//   //   email: 'gio@gio.com',
//   // }

//   const recipe = req.body;

//   // you can use await/async with Try/catch block to catch error
//   // or you can use promises with .then / .catch
//   try {
//     const newRecipe = await RecipeSchema.create(recipe);
//     console.log(newRecipe);
//   } catch (err) {
//     console.log("err creating new recipe", err);
//   }
// });

router.post("/", async (req, res) => {
  const recipe = new RecipeSchema({
    slug: req.body.slug,
    shortDescription: req.body.shortDescription,
    ingredientsList: req.body.ingredientsList,
    time: req.body.time,
    description: req.body.description,
    category: req.body.category,
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
