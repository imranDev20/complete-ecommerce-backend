const express = require("express");
const cors = require("cors");
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("*", (req, res) => {
  res.send("No Routes Found");
});

module.exports = app;
