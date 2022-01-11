var dotenv = require("dotenv").config();
var express = require("express");
var app = express();

const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

app.use(express.static(__dirname));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  res.json(
    process.env.MESSAGE_STYLE === "uppercase"
      ? { message: "Hello JSON" }
      : { message: "Hello json" }
  );
});

app.listen(port);

module.exports = app;
