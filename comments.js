// Create web server
const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/api/users") {
    const users = [
      { name: "Bob Smith", age: 40 },
      { name: "John Doe", age: 30 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
  } else {
    fs.readFile(path.join(__dirname, "404.html"), (err, data) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
