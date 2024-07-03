const fs = require("fs");
const express = require("express");
const app = express();

app.listen(3000, "localhost", () => {
  console.log("Server listening on port 3000");
});
