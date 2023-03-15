require("dotenv").config();

const express = require("express");

const app = express();

const connectToDataBase = require("./database");

connectToDataBase();

const port = 3333;

// app.use(routes)

app.listen(port, () => {
  console.log(`backend started at http://localhost:${port}`);
});
