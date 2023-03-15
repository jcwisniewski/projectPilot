const express = require("express");
const routes = express.Router();

const VideoController = require("./controllers/VideoController");

// routes.get("/", (request, response) => response.send("Hello World"));

routes.get("/videos", VideoController.index);
routes.post("/videos", VideoController.store);

routes.get("/", (res) => {
  res.send("deu boa");
});

module.exports = routes;
