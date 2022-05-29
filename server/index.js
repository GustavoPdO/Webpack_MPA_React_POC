const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/help", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/help.html"));
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(3000, function () {
  console.log("Application is running on http://localhost:3000");
});
