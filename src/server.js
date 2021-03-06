const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db");
const recipeRouter = require("../routers/recipes");
//const data = require("./contentful-export.json");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.set("json spaces", 2);
// We need to use a proper middleware to parse the code
// before express v4, body-parser npm was needed. Now not anymore
// http://expressjs.com/en/api.html#express
// this needs to be declare before your routes
app.use(express.json()); // to parse json data
//app.use(express.urlencoded()) // to parse .txt or .html data

app.use("/api/recipes", recipeRouter);

app.listen(port, () => {
  console.log(`Cookbook app listening at http://localhost:${port}`);
});
