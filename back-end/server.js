const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Server is working started at port: 8000");
});

app.listen(8000);
