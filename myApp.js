var express = require("express");
var app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port);

module.exports = app;
