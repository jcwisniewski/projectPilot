require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const connectToDataBase = require("./database");


const app = express();
const port = 3333;

const corsOptions = {
  origin: ["http://localhost:3000", "https://broadcast-messages.vercel.app"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`backend started at http://localhost:${port}`);
});

connectToDataBase();
