const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "This will demo node test for and CICD and Web  hook." });
});

module.exports = app;
