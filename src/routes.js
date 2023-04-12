const express = require("express");
const routes = express.Router();

const VideoController = require("./controllers/VideoController");
const MessageController = require("./controllers/MessageController");

// routes.get("/", (request, response) => response.send("Hello World"));

routes.get("/videos", VideoController.index);
routes.post("/videos", VideoController.store);
routes.get("/messages", MessageController.GetMessages);
routes.post("/sendMessages", MessageController.SendMessage);

// routes.get("/", (res) => {
//   res.send("deu boa");
// });

module.exports = routes;
