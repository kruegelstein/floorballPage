const express = require("express");
const app = express();
app.use(express.json());

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("####", username, password);
  res.send("Hello World");
});
app.listen(8080, () => console.log("Server listening on port 8080"));
