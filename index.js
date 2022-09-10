const express = require("express");
const app = express();


app.get("/", function (req, res) {
  res.send("welcome")
})

app.listen(8080, () => {
  console.log("server telah berjalan")
})