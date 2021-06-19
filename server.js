const express = require("express");
const app = express();
const data = require ("./data.js");

const port = 8080;
app.listen(port);

app.get("/recipes", (req, res, next) => {
  res.send(data);
});

console.log('Server started at http://localhost:' + port);
console.log(data)
