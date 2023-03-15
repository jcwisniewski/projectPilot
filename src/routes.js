const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => response.send("Hello World"));

module.exports = routes;
