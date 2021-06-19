const express = require("express");
const app = express();
const data = require("./data.js");

const port = 8080;

//get all recipes
app.get("/api/recipes", (req, res, next) => {
  res.send(data);
});

//get 1 recipe
app.get("/api/recipes/:id", (req, res, next) => {
  console.log(data[req.params.id]);
  res.send(data[req.params.id]);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// install nodemon
// create more routes, get 1 recipe
// about
// put routes in a different file
//  UI / react client side: create a form like contentful, similar to todoList (private route)
// on submit: fetch request to localhost:8080/recipe
// how do we want to insert data? Do we want an interface
// later or next week: figure out how to connect to database
