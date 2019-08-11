const express = require("express");
const app = express();
app.post("/login", (req, res) => {
  console.log("####", req);
  res.send("Hello World");
});
app.listen(3000, () => console.log("Server listening on port 3000"));
