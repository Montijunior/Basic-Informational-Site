const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("content-Type", "text/html");

  let path = ".";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/contact":
      path += "/contact.html";
      res.statusCode = 200;
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Server listening on port 3000");
});
