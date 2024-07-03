const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  const file = path.join(__dirname, "./", "index.html");
  res.sendFile(file);
});
// About route
app.get("/about", (req, res) => {
  const file = path.join(__dirname, "./", "about.html");
  res.sendFile(file);
});

// Contact route
app.get("/contact", (req, res) => {
  const file = path.join(__dirname, "./", "contact.html");
  res.sendFile(file);
});

// 404 route
app.use((req, res) => {
  const file = path.join(__dirname, "./", "404.html");
  res.sendFile(file);
});
app.listen(3000, "localhost", () => {
  console.log("Server listening on port 3000");
});
