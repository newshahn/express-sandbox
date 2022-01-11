var express = require("express");
var app = express();

const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(port);

module.exports = app;
