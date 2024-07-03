const fs = require("fs");
const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

// About route
app.get("/about", (req, res) => {
  res.sendFile("about.html");
});

// Contact route
app.get("/contact", (req, res) => {
  res.sendFile("contact.html");
});

// 404 route
app.use((req, res) => {
  res.sendFile("404.html");
});
app.listen(3000, "localhost", () => {
  console.log("Server listening on port 3000");
});
