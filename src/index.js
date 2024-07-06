const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const homeRoutes = require("./routers/homeRouters");

app.use("/", homeRoutes);

app.use(cors());
app.use(bodyParser.json());

module.exports = { app };
