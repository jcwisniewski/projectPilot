require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const port = 3333;

const corsOptions = {
  origin: ["http://localhost:3000", "https://project-pilot-pf7ysigxd-jcwisniewski.vercel.app"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.listen(port, () => {
  console.log(`backend started at http://localhost:${port}`);
});
const connectToDataBase = require("./database");
connectToDataBase();
